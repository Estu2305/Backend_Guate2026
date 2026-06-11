import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor(
    private dataSource: DataSource,
  ) {}

  //Vemos todos los datos 
  async getDashboard() {
    const result = await this.dataSource.query(
      'SELECT * FROM v_dashboard',
    );

    return result[0];
  }

  async getActivos() {
    return this.dataSource.query(
      'SELECT * FROM v_activos',
    );
  }

  async getAsignaciones() {
    return this.dataSource.query(
      'SELECT * FROM v_asignaciones_activas',
    );
  }

  // Vista de Licencias
  async getLicencias() {
    return this.dataSource.query(
      'SELECT * FROM v_licencias_por_vencer',
    );
  }

  // Vista de Laboratorios
  async getLaboratorios() {
    return this.dataSource.query(
      'SELECT * FROM v_laboratorios',
    );
  }

  // Vista de Servidores
  async getServidores() {
    return this.dataSource.query(
      'SELECT * FROM v_servidores',
    );
  }

  // Vista de proyectos
  async getProyectores() {
    return this.dataSource.query(
      'SELECT * FROM v_proyectores',
    );
  }
}