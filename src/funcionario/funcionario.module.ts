import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { Funcionario } from './entities/funcionario.entity';
import { Cargo } from '../cargo/entities/cargo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Funcionario, Cargo]), // Registrar Funcionario e Cargo
  ],
  controllers: [FuncionarioController], // Controlador responsável pelas rotas
  providers: [FuncionarioService], // Serviço com a lógica de negócio
  exports: [TypeOrmModule], // Exportar o serviço para uso externo, se necessário
})
export class FuncionarioModule {}
