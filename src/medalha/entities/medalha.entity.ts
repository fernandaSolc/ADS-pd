import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

@Entity('medalhas')
export class Medalha {
  @PrimaryGeneratedColumn()
  id_medalha: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ nullable: true })
  icone: string;

  @ManyToMany(() => Funcionario, (funcionario) => funcionario.medalhas)
  @JoinTable({
    name: 'funcionario_medalha',
    joinColumn: { name: 'id_medalha', referencedColumnName: 'id_medalha' },
    inverseJoinColumn: { name: 'id_funcionario', referencedColumnName: 'id_funcionario' },
  })
  funcionarios: Funcionario[];
}
