import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { ReportesService } from './reportes.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/Decorators/roles.decorator';

@Controller('reportes')
@UseGuards(
  JwtAuthGuard,
  RolesGuard,
)
export class ReportesController {
  constructor(
    private readonly reportesService: ReportesService,
  ) {}

  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('activos')
  activos() {
    return this.reportesService.activos();
  }

  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('asignaciones')
  asignaciones() {
    return this.reportesService.asignaciones();
  }

  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('laboratorios')
  laboratorios() {
    return this.reportesService.laboratorios();
  }

  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('servidores')
  servidores() {
    return this.reportesService.servidores();
  }

  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('proyectores')
  proyectores() {
    return this.reportesService.proyectores();
  }

  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('licencias-por-vencer')
  licenciasPorVencer() {
    return this.reportesService.licenciasPorVencer();
  }

  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('mantenimientos')
  mantenimientos() {
    return this.reportesService.mantenimientos();
  }
}