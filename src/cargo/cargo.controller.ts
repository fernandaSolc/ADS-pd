import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Controller('admin/cargos')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @Get()
  findAll() {
    return this.cargoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cargoService.findOne(id);
  }

  @Post()
  create(@Body() createCargoDto: CreateCargoDto) {
    return this.cargoService.create(createCargoDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargoService.update(id, updateCargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cargoService.remove(id);
  }
}
