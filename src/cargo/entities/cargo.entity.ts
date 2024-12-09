import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

@Entity('cargos')
export class Cargo {
  @PrimaryGeneratedColumn()
  id_cargo: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @OneToMany(() => Funcionario, (funcionario) => funcionario.cargo)
  funcionarios: Funcionario[];
}
