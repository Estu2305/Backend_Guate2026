import { Module } from '@nestjs/common';
import { MantenimientosCargaService } from './mantenimientos-carga.service';
import { MantenimientosCargaController } from './mantenimientos-carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MantenimientosCarga } from './entities/mantenimientos-carga.entity';

@Module({
  imports: [
          TypeOrmModule.forFeature([MantenimientosCarga]),
      ],
  controllers: [MantenimientosCargaController],
  providers: [MantenimientosCargaService],
})
export class MantenimientosCargaModule {}
