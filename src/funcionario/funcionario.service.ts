import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Cargo } from '../cargo/entities/cargo.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
    @InjectRepository(Cargo)
    private cargoRepository: Repository<Cargo>,
  ) {}

  findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  async findOne(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOne({
      where: { id_funcionario: id },
      relations: ['cargo', 'tarefas'], // Incluir o relacionamento com tarefas
    });

    if (!funcionario) {
      throw new NotFoundException('Funcionario not found');
    }

    return funcionario;
  }


  async create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    const { id_cargo, ...data } = createFuncionarioDto;

    // Verificar se o cargo existe
    const cargo = await this.cargoRepository.findOne({ where: { id_cargo } });
    if (!cargo) {
      throw new NotFoundException('Cargo not found');
    }

    const funcionario = this.funcionarioRepository.create({
      ...data,
      cargo,
    });

    return this.funcionarioRepository.save(funcionario);
  }

  async update(
    id: number,
    updateFuncionarioDto: UpdateFuncionarioDto,
  ): Promise<Funcionario> {
    const { id_cargo, ...data } = updateFuncionarioDto;

    const funcionario = await this.findOne(id);

    // Atualizar o cargo, se fornecido
    if (id_cargo) {
      const cargo = await this.cargoRepository.findOne({ where: { id_cargo } });
      if (!cargo) {
        throw new NotFoundException('Cargo not found');
      }
      funcionario.cargo = cargo;
    }

    Object.assign(funcionario, data);

    return this.funcionarioRepository.save(funcionario);
  }


  async remove(id: number): Promise<void> {
    await this.funcionarioRepository.delete(id);
  }
}
