import { Module } from '@nestjs/common';
import { ActivosController } from './activos.controller';
import { ActivosService } from './activos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activos } from './entities/activos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activos]),
  ],
  controllers: [ActivosController],
  providers: [ActivosService]
})
export class ActivosModule {}
