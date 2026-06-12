import { Module } from '@nestjs/common';
import { LicenciasAsignadasCargaService } from './licencias-asignadas-carga.service';
import { LicenciasAsignadasCargaController } from './licencias-asignadas-carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenciasAsignadasCarga } from './entities/licencias-asignadas-carga.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([LicenciasAsignadasCarga]),
    ],
  controllers: [LicenciasAsignadasCargaController],
  providers: [LicenciasAsignadasCargaService],
})
export class LicenciasAsignadasCargaModule {}
