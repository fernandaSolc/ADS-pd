import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Controller('admin/tarefas') // O caminho base para as rotas deve ser este
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Get()
  findAll() {
    return this.tarefaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tarefaService.findOne(id);
  }

  @Post()
  create(@Body() createTarefaDto: CreateTarefaDto) {
    return this.tarefaService.create(createTarefaDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTarefaDto: UpdateTarefaDto) {
    return this.tarefaService.update(id, updateTarefaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tarefaService.remove(id);
  }
}
