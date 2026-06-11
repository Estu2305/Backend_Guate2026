import { Module } from '@nestjs/common';
import { ActivosService } from './activos.service';
import { ActivosController } from './activos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activo } from './entities/activo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activo]),
  ],
  controllers: [ActivosController],
  providers: [ActivosService],
})
export class ActivosModule {}
