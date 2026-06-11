import { Module } from '@nestjs/common';
import { ActivosCargaService } from './activos-carga.service';
import { ActivosCargaController } from './activos-carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivosCarga } from './entities/activos-carga.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActivosCarga]),
  ],
  controllers: [ActivosCargaController],
  providers: [ActivosCargaService],
})
export class ActivosCargaModule { }
