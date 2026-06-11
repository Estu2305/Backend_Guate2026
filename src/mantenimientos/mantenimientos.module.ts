import { Module } from '@nestjs/common';
import { MantenimientosController } from './mantenimientos.controller';
import { MantenimientosService } from './mantenimientos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mantenimiento } from './entities/mantenimieto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Mantenimiento,
    ]),
  ],
  controllers: [MantenimientosController],
  providers: [MantenimientosService]
})
export class MantenimientosModule {}
