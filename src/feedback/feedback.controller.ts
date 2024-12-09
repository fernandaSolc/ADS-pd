import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Controller('social/feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  findAll() {
    return this.feedbackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.feedbackService.findOne(id);
  }

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.feedbackService.remove(id);
  }
}
