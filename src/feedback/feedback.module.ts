import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { Feedback } from './entities/feedback.entity';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback, Funcionario])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
