import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { ReportesService } from './reportes.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/Decorators/roles.decorator';

import type { Response } from 'express';
import { Res } from '@nestjs/common';

@Controller('reportes')
@UseGuards(
  JwtAuthGuard,
  RolesGuard,
)
export class ReportesController {
  constructor(
    private readonly reportesService: ReportesService,
  ) {}


  // Reportes para Activos
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('activos')
  activos() {
    return this.reportesService.activos();
  }

  // Reportes para Asignaciones
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('asignaciones')
  asignaciones() {
    return this.reportesService.asignaciones();
  }

  // Reportes de Laboratorios
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('laboratorios')
  laboratorios() {
    return this.reportesService.laboratorios();
  }

  // Reportes para Servidores
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('servidores')
  servidores() {
    return this.reportesService.servidores();
  }

  // Reportes para Proyectores
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('proyectores')
  proyectores() {
    return this.reportesService.proyectores();
  }

  // Reporte para Licencias por vencer
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('licencias-por-vencer')
  licenciasPorVencer() {
    return this.reportesService.licenciasPorVencer();
  }

  // Reportes para Mantenimientos
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('mantenimientos')
  mantenimientos() {
    return this.reportesService.mantenimientos();
  }

  // Exportacion de 4 Reportes Importantes
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('activos-por-categoria/excel')
  async activosCategoriaExcel(
    @Res() res: Response,
  ) {
    const buffer =
      await this.reportesService.exportarActivosPorCategoria();

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=activos-por-categoria.xlsx',
    );

    return res.send(buffer);
  }

  // Exportacion #2 Asignacion
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('activos-asignados/excel')
  async activosAsignadosExcel(
    @Res() res: Response,
  ) {
    const buffer =
      await this.reportesService.exportarActivosAsignacion();

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=activos-asignados.xlsx',
    );

    res.send(buffer);
  }

  // Exportacion #3 Mantenimientos
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('equipos-mantenimiento/excel')
  async mantenimientoExcel(
    @Res() res: Response,
  ) {
    const buffer =
      await this.reportesService.exportarMantenimientos();

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=equipos-mantenimiento.xlsx',
    );

    res.send(buffer);
  }

  // Exportacion #4 Licencias por Vencer
  @Roles(
    'Administrador',
    'Auxiliar',
  )
  @Get('licencias-por-vencer/excel')
  async licenciasExcel(
    @Res() res: Response,
  ) {
    const buffer =
      await this.reportesService.exportarLicenciasPorVencer();

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=licencias-por-vencer.xlsx',
    );

    res.send(buffer);
  }
}