import { Header, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import * as ExcelJS from 'exceljs'

@Injectable()
export class ReportesService {
  constructor(
    private readonly dataSource: DataSource,
  ) {}

  // Reportes para Activos
  async activos() {
    return this.dataSource.query(
      'SELECT * FROM v_activos',
    );
  }

  //Reportes para asignacion
  async asignaciones() {
    return this.dataSource.query(
      'SELECT * FROM v_asignaciones_activas',
    );
  }

  // Reportes para Laboratorios
  async laboratorios() {
    return this.dataSource.query(
      'SELECT * FROM v_laboratorios',
    );
  }

  // Reportes para Servidores
  async servidores() {
    return this.dataSource.query(
      'SELECT * FROM v_servidores',
    );
  }

  // Reportes para Proyectores
  async proyectores() {
    return this.dataSource.query(
      'SELECT * FROM v_proyectores',
    );
  }

  // Reportes para Licencias por vencer
  async licenciasPorVencer() {
    return this.dataSource.query(
      'SELECT * FROM v_licencias_por_vencer',
    );
  }

  // Reportes para Mantenimientos
  async mantenimientos() {
    return this.dataSource.query(
      'SELECT * FROM mantenimientos',
    );
  }

  // Exportacion de 4 Reportes
  // Exportacion para Excel
  async generarExcel (
    nombreHoja: string,
    columnas: any[],
    datos: any[],  
  ){
    const workbook = new ExcelJS.Workbook();

    const worksheet = 
      workbook.addWorksheet(nombreHoja);

    worksheet.columns = columnas;

    datos.forEach((item) =>{
      worksheet.addRow(item);
    });

    return workbook.xlsx.writeBuffer();
  }

  // Activos Por Categoria
  async exportarActivosPorCategoria() {
  const datos =
    await this.activosPorCategoria();

  return this.generarExcel(
    'Activos por Categoria',
    [
      {
        header: 'Categoria',
        key: 'categoria',
        width: 40,
      },
      {
        header: 'Total Activos',
        key: 'total',
        width: 20,
      },
    ],
    datos,
  );
}

  //Exportacion de Activos Categorias 
  async activosPorCategoria() {
    return this.dataSource.query(`
      SELECT
        c.nombre AS categoria,
        COUNT(a.id) AS total
      FROM categorias_activo c
      LEFT JOIN activos a
        ON a.categoria_id = c.id
      GROUP BY c.nombre
      ORDER BY c.nombre
    `);
  }
  
  //Exportacion Activos Aaignados
  async exportarActivosAsignacion() {
  const datos = await this.asignaciones();

  return this.generarExcel(
    'Activos Asignados',
    [
      {
        header: 'Activo',
        key: 'activo',
        width: 40,
      },
      {
        header: 'Asignado A',
        key: 'asignado_a',
        width: 40,
      },
      {
        header: 'Departamento',
        key: 'departamento',
        width: 30,
      },
      {
        header: 'Fecha Inicio',
        key: 'fecha_inicio',
        width: 25,
      },
      {
        header: 'Motivo',
        key: 'motivo',
        width: 50,
      },
    ],
    datos,
  );
}

  // Exportacion Mantenimientos
  async exportarMantenimientos() {
  const datos =
    await this.mantenimientos();

  return this.generarExcel(
    'Mantenimientos',
    [
      {
        header: 'Activo ID',
        key: 'activo_id',
        width: 15,
      },
      {
        header: 'Tipo',
        key: 'tipo',
        width: 20,
      },
      {
        header: 'Descripcion',
        key: 'descripcion',
        width: 50,
      },
      {
        header: 'Fecha Realizado',
        key: 'fecha_realizado',
        width: 25,
      },
      {
        header: 'Responsable',
        key: 'responsable',
        width: 30,
      },
      {
        header: 'Costo',
        key: 'costo',
        width: 15,
      },
    ],
    datos,
  );
}

  // Exportacion Licencias por Vencer 
  async exportarLicenciasPorVencer() {
  const datos =
    await this.licenciasPorVencer();

  return this.generarExcel(
    'Licencias',
    [
      {
        header: 'Software',
        key: 'software',
        width: 40,
      },
      {
        header: 'Version',
        key: 'version',
        width: 20,
      },
      {
        header: 'Proveedor',
        key: 'proveedor',
        width: 30,
      },
      {
        header: 'Fecha Vencimiento',
        key: 'fecha_vencimiento',
        width: 25,
      },
      {
        header: 'Dias Restantes',
        key: 'dias_restantes',
        width: 20,
      },
    ],
    datos,
  );
}
}
