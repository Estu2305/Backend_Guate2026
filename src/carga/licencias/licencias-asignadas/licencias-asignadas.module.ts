import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenciaAsignada } from './entity/licencia-asignada.entity';
import { LicenciasAsignadasController } from './licencias-asignadas.controller';
import { LicenciasAsignadasService } from './licencias-asignadas.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([LicenciaAsignada]),
    ],
    controllers: [LicenciasAsignadasController],
    providers: [LicenciasAsignadasService],
})
export class LicenciasAsignadasModule { }
