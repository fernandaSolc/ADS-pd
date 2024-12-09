import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';
import { Tarefa } from './entities/tarefa.entity';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa, Funcionario])],
  controllers: [TarefaController],
  providers: [TarefaService],
})
export class TarefaModule {}
