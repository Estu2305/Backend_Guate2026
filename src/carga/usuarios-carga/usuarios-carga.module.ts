import { Module } from '@nestjs/common';
import { UsuariosCargaService } from './usuarios-carga.service';
import { UsuariosCargaController } from './usuarios-carga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosCarga } from './entities/usuarios-carga.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuariosCarga]),
  ],
  controllers: [UsuariosCargaController],
  providers: [UsuariosCargaService],
})
export class UsuariosCargaModule { }
