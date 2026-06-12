import { Module } from '@nestjs/common';
import { UbicacionesCargaService } from './ubicaciones-carga.service';
import { UbicacionesCargaController } from './ubicaciones-carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionesCarga } from './entities/ubicaciones-carga.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UbicacionesCarga]),
  ],
  controllers: [UbicacionesCargaController],
  providers: [UbicacionesCargaService],
})
export class UbicacionesCargaModule { }
