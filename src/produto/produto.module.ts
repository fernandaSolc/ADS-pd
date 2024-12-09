import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { Produto } from './entities/produto.entity';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Funcionario])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
