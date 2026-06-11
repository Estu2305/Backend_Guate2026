import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
  ) {}

  // Vemos todos los datos
  @Get()
  getDashboard() {
    return this.dashboardService.getDashboard();
  }

  // Ver datos de Activos
  @Get('activos')
  getActivos() {
    return this.dashboardService.getActivos();
  }

  // Ver datos de Asignaciones
  @Get('asignaciones')
  getAsignaciones() {
    return this.dashboardService.getAsignaciones();
  }

  // Ver datos de Licencias
  @Get('licencias')
  getLicencias() {
    return this.dashboardService.getLicencias();
  }

  // Ver datos de Laboratorios
  @Get('laboratorios')
  getLaboratorios() {
    return this.dashboardService.getLaboratorios();
  }

  // Ver datos de Servidores
  @Get('servidores')
  getServidores() {
    return this.dashboardService.getServidores();
  }

  // Ver datos de Proyectos
  @Get('proyectores')
  getProyectores() {
    return this.dashboardService.getProyectores();
  }
}