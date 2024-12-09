import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from './entities/cargo.entity';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private cargoRepository: Repository<Cargo>,
  ) {}

  findAll(): Promise<Cargo[]> {
    return this.cargoRepository.find();
  }

  async findOne(id: number): Promise<Cargo> {
    const cargo = await this.cargoRepository.findOne({ where: { id_cargo: id } });

    if (!cargo) {
      throw new NotFoundException('Cargo not found');
    }

    return cargo;
  }

  create(createCargoDto: CreateCargoDto): Promise<Cargo> {
    const cargo = this.cargoRepository.create(createCargoDto);
    return this.cargoRepository.save(cargo);
  }

  async update(id: number, updateCargoDto: UpdateCargoDto): Promise<Cargo> {
    const cargo = await this.findOne(id);
    Object.assign(cargo, updateCargoDto);
    return this.cargoRepository.save(cargo);
  }

  async remove(id: number): Promise<void> {
    const cargo = await this.findOne(id);
    await this.cargoRepository.remove(cargo);
  }
}
