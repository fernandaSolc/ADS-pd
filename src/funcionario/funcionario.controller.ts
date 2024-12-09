import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('admin/funcionarios')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Get()
  findAll() {
    return this.funcionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.funcionarioService.findOne(id);
  }

  @Post()
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionarioService.update(id, updateFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.funcionarioService.remove(id);
  }
}
