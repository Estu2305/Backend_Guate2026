import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ReportesService {
  constructor(
    private readonly dataSource: DataSource,
  ) {}

  async activos() {
    return this.dataSource.query(
      'SELECT * FROM v_activos',
    );
  }

  async asignaciones() {
    return this.dataSource.query(
      'SELECT * FROM v_asignaciones_activas',
    );
  }

  async laboratorios() {
    return this.dataSource.query(
      'SELECT * FROM v_laboratorios',
    );
  }

  async servidores() {
    return this.dataSource.query(
      'SELECT * FROM v_servidores',
    );
  }

  async proyectores() {
    return this.dataSource.query(
      'SELECT * FROM v_proyectores',
    );
  }

  async licenciasPorVencer() {
    return this.dataSource.query(
      'SELECT * FROM v_licencias_por_vencer',
    );
  }

  async mantenimientos() {
    return this.dataSource.query(
      'SELECT * FROM mantenimientos',
    );
  }
}