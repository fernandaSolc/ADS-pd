import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medalha } from './entities/medalha.entity';
import { CreateMedalhaDto } from './dto/create-medalha.dto';
import { UpdateMedalhaDto } from './dto/update-medalha.dto';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Injectable()
export class MedalhaService {
  constructor(
    @InjectRepository(Medalha)
    private medalhaRepository: Repository<Medalha>,
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  findAll(): Promise<Medalha[]> {
    return this.medalhaRepository.find({ relations: ['funcionarios'] });
  }

  async findOne(id: number): Promise<Medalha> {
    const medalha = await this.medalhaRepository.findOne({
      where: { id_medalha: id },
      relations: ['funcionarios'],
    });

    if (!medalha) {
      throw new NotFoundException('Medalha not found');
    }

    return medalha;
  }

  create(createMedalhaDto: CreateMedalhaDto): Promise<Medalha> {
    const medalha = this.medalhaRepository.create(createMedalhaDto);
    return this.medalhaRepository.save(medalha);
  }

  async update(id: number, updateMedalhaDto: UpdateMedalhaDto): Promise<Medalha> {
    const medalha = await this.findOne(id);
    Object.assign(medalha, updateMedalhaDto);
    return this.medalhaRepository.save(medalha);
  }

  async remove(id: number): Promise<void> {
    const medalha = await this.findOne(id);
    await this.medalhaRepository.remove(medalha);
  }
}
