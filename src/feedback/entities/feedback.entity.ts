import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

@Entity('feedbacks')
export class Feedback {
  @PrimaryGeneratedColumn()
  id_feedback: number;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.feedbacksEnviados, { eager: true })
  id_remetente: Funcionario;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.feedbacksRecebidos, { eager: true })
  id_destinatario: Funcionario;

  @Column()
  titulo: string;

  @Column()
  conteudo: string;

  @CreateDateColumn({ type: 'timestamp' })
  data_criacao: Date;

  @Column({ default: 0 })
  moeda_enviada: number;
}
