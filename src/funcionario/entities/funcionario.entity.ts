import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany
} from "typeorm";
import { Cargo } from '../../cargo/entities/cargo.entity';
import { Tarefa } from '../../tarefa/entities/tarefa.entity';
import { Medalha } from "../../medalha/entities/medalha.entity";
import { Feedback } from "../../feedback/entities/feedback.entity";
import { Produto } from "../../produto/entities/produto.entity";

@Entity('funcionarios')
export class Funcionario {
  @PrimaryGeneratedColumn()
  id_funcionario: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  senha: string;

  @Column({ nullable: true })
  foto: string;

  @Column({ default: 0 })
  moedas: number;

  @ManyToOne(() => Cargo, (cargo) => cargo.funcionarios, { eager: true })
  cargo: Cargo;

  @OneToMany(() => Tarefa, (tarefa) => tarefa.funcionarios)
  tarefas: Tarefa[];

  @ManyToMany(() => Medalha, (medalha) => medalha.funcionarios)
  medalhas: Medalha[];

  @OneToMany(() => Feedback, (feedback) => feedback.id_remetente)
  feedbacksEnviados: Feedback[];

  @OneToMany(() => Feedback, (feedback) => feedback.id_destinatario)
  feedbacksRecebidos: Feedback[];

  @ManyToMany(() => Produto, (produto) => produto.funcionariosFavoritos)
  produtosFavoritos: Produto[];

  @ManyToMany(() => Produto, (produto) => produto.funcionariosCompraram)
  produtosComprados: Produto[];
}
