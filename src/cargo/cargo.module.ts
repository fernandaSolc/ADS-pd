import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargoService } from './cargo.service';
import { CargoController } from './cargo.controller';
import { Cargo } from './entities/cargo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cargo])], // Registrar a entidade Cargo
  controllers: [CargoController], // Registrar o controlador
  providers: [CargoService], // Registrar o serviço
  exports: [CargoService], // Exportar o serviço para uso futuro
})
export class CargoModule {}
