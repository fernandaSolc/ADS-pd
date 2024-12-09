import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './entities/feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find();
  }

  async findOne(id: number): Promise<Feedback> {
    const feedback = await this.feedbackRepository.findOne({ where: { id_feedback: id } });
    if (!feedback) {
      throw new NotFoundException('Feedback not found');
    }
    return feedback;
  }

  async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const { id_remetente, id_destinatario, ...data } = createFeedbackDto;

    const remetente = await this.funcionarioRepository.findOne({ where: { id_funcionario: id_remetente } });
    if (!remetente) {
      throw new NotFoundException('Remetente not found');
    }

    const destinatario = await this.funcionarioRepository.findOne({ where: { id_funcionario: id_destinatario } });
    if (!destinatario) {
      throw new NotFoundException('Destinatario not found');
    }

    const feedback = this.feedbackRepository.create({
      ...data,
      id_remetente: remetente,
      id_destinatario: destinatario,
    });

    return this.feedbackRepository.save(feedback);
  }

  async remove(id: number): Promise<void> {
    const feedback = await this.findOne(id);
    await this.feedbackRepository.remove(feedback);
  }
}
