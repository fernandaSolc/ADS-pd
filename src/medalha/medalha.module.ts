import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedalhaService } from './medalha.service';
import { MedalhaController } from './medalha.controller';
import { Medalha } from './entities/medalha.entity';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medalha, Funcionario])],
  controllers: [MedalhaController],
  providers: [MedalhaService],
})
export class MedalhaModule {}
