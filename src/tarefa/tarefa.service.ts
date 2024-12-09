import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Tarefa } from './entities/tarefa.entity';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Injectable()
export class TarefaService {
  constructor(
    @InjectRepository(Tarefa)
    private tarefaRepository: Repository<Tarefa>,
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Tarefa[]> {
    return this.tarefaRepository.find({ relations: ['funcionarios'] });
  }

  async findOne(id: number): Promise<Tarefa> {
    const tarefa = await this.tarefaRepository.findOne({
      where: { id_tarefa: id },
      relations: ['funcionarios'],
    });

    if (!tarefa) {
      throw new NotFoundException('Tarefa not found');
    }

    return tarefa;
  }

  async create(createTarefaDto: CreateTarefaDto): Promise<Tarefa> {
    const { funcionariosIds, ...data } = createTarefaDto;

    const funcionarios = await this.funcionarioRepository.find({
      where: { id_funcionario: In(funcionariosIds || []) },
    });

    if (funcionarios.length !== (funcionariosIds?.length || 0)) {
      throw new NotFoundException('Some funcionarios not found');
    }

    const tarefa = this.tarefaRepository.create({ ...data, funcionarios });
    return this.tarefaRepository.save(tarefa);
  }

  async update(id: number, updateTarefaDto: UpdateTarefaDto): Promise<Tarefa> {
    const { funcionariosIds, ...data } = updateTarefaDto;

    const tarefa = await this.findOne(id);

    if (funcionariosIds) {
      const funcionarios = await this.funcionarioRepository.find({
        where: { id_funcionario: In(funcionariosIds) },
      });

      if (funcionarios.length !== funcionariosIds.length) {
        throw new NotFoundException('Some funcionarios not found');
      }

      tarefa.funcionarios = funcionarios;
    }

    Object.assign(tarefa, data);

    return this.tarefaRepository.save(tarefa);
  }

  async remove(id: number): Promise<void> {
    const tarefa = await this.findOne(id);
    await this.tarefaRepository.remove(tarefa);
  }
}
