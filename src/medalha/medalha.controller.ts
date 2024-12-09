import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedalhaService } from './medalha.service';
import { CreateMedalhaDto } from './dto/create-medalha.dto';
import { UpdateMedalhaDto } from './dto/update-medalha.dto';

@Controller('admin/medalhas')
export class MedalhaController {
  constructor(private readonly medalhaService: MedalhaService) {}

  @Get()
  findAll() {
    return this.medalhaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.medalhaService.findOne(id);
  }

  @Post()
  create(@Body() createMedalhaDto: CreateMedalhaDto) {
    return this.medalhaService.create(createMedalhaDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMedalhaDto: UpdateMedalhaDto) {
    return this.medalhaService.update(id, updateMedalhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.medalhaService.remove(id);
  }
}
