import { Module } from '@nestjs/common';
import { AsignacionesCargaService } from './asignaciones-carga.service';
import { AsignacionesCargaController } from './asignaciones-carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionesCarga } from './entities/asignaciones-carga.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([AsignacionesCarga]),
    ],
  controllers: [AsignacionesCargaController],
  providers: [AsignacionesCargaService],
})
export class AsignacionesCargaModule {}
