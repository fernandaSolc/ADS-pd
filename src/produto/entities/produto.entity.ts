import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id_produto: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @ManyToMany(() => Funcionario, (funcionario) => funcionario.produtosFavoritos)
  @JoinTable({
    name: 'funcionario_produto_favorito',
    joinColumn: { name: 'id_produto', referencedColumnName: 'id_produto' },
    inverseJoinColumn: { name: 'id_funcionario', referencedColumnName: 'id_funcionario' },
  })
  funcionariosFavoritos: Funcionario[];

  @ManyToMany(() => Funcionario, (funcionario) => funcionario.produtosComprados)
  @JoinTable({
    name: 'funcionario_produto_compra',
    joinColumn: { name: 'id_produto', referencedColumnName: 'id_produto' },
    inverseJoinColumn: { name: 'id_funcionario', referencedColumnName: 'id_funcionario' },
  })
  funcionariosCompraram: Funcionario[];
}
