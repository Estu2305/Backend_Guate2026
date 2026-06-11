import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import csv from 'csv-parser';
import { InjectRepository } from '@nestjs/typeorm';
import { LicenciaAsignada } from './entity/licencia-asignada.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LicenciasAsignadasService {

  constructor(
    @InjectRepository(LicenciaAsignada)
    private readonly licenciasAsignadasRepository: Repository<LicenciaAsignada>,
  ) { }

  async procesarCsv(
    archivo: any,
  ) {

    const registros: any[] = [];

    const stream = Readable.from(archivo.buffer);

    return new Promise((resolve, reject) => {

      stream
        .pipe(
          csv({
            separator: '\t', // porque el archivo está separado por TAB
          }),
        )
        .on('data', (fila) => {

          registros.push({
            id: Number(fila.id),
            licencia_id: Number(fila.licencia_id),
            activo_id: Number(fila.activo_id),
            usuario_id: fila.usuario_id
              ? Number(fila.usuario_id)
              : null,
            fecha_asignacion: fila.fecha_asignacion,
          });

        })
        .on('end', async () => {

          try {

            for (const registro of registros) {

              console.log(registro);

              await this.licenciasAsignadasRepository.save({
                licencia_id: registro.licencia_id,
                activo_id: registro.activo_id,
                usuario_id: registro.usuario_id,
                fecha_asignacion: registro.fecha_asignacion,
              });

            }

            resolve({
              mensaje: 'CSV procesado correctamente',
              total: registros.length,
            });

          } catch (error) {
            reject(error);
          }

        })
        .on('error', reject);

    });
  }
}
