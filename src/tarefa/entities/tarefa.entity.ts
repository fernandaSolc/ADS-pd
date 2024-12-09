import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

@Entity('tarefas')
export class Tarefa {
  @PrimaryGeneratedColumn()
  id_tarefa: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @CreateDateColumn({ type: 'timestamp' })
  data_criacao: Date;

  @Column({ type: 'timestamp', nullable: true })
  data_limite: Date;

  @Column({ default: 'pendente' })
  status: string;

  @ManyToMany(() => Funcionario, (funcionario) => funcionario.tarefas, { cascade: true })
  @JoinTable({
    name: 'funcionario_tarefa',
    joinColumn: { name: 'id_tarefa', referencedColumnName: 'id_tarefa' },
    inverseJoinColumn: { name: 'id_funcionario', referencedColumnName: 'id_funcionario' },
  })
  funcionarios: Funcionario[];
}
