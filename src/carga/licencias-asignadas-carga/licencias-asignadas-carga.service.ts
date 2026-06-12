import { Injectable } from '@nestjs/common';
import { CreateLicenciasAsignadasCargaDto } from './dto/create-licencias-asignadas-carga.dto';
import { UpdateLicenciasAsignadasCargaDto } from './dto/update-licencias-asignadas-carga.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LicenciasAsignadasCarga } from './entities/licencias-asignadas-carga.entity';
import { Readable } from 'stream';
import csv from 'csv-parser';

@Injectable()
export class LicenciasAsignadasCargaService {

  constructor(
    @InjectRepository(LicenciasAsignadasCarga)
    private readonly licenciasAsignadasCargaRepository: Repository<LicenciasAsignadasCarga>,
  ) { }

  async procesarCsv(
    archivo: any,
  ) {

    const registros: Partial<LicenciasAsignadasCarga>[] = [];

    const stream = Readable.from(
      archivo.buffer,
    );

    return new Promise((resolve, reject) => {

      stream
        .pipe(csv())

        .on('data', (fila) => {

          console.log(
            'Fila CSV:',
            fila,
          );

          registros.push({

            licencia_id: Number(
              fila.licencia_id,
            ),

            activo_id: Number(
              fila.activo_id,
            ),

            usuario_id: Number(
              fila.usuario_id,
            ),

            fecha_asignacion:
              new Date(
                fila.fecha_asignacion,
              ),

          });

        })

        .on('end', async () => {

          try {

            const entidades =
              this.licenciasAsignadasCargaRepository.create(
                registros,
              );

            await this.licenciasAsignadasCargaRepository.save(
              entidades,
            );

            resolve({
              mensaje:
                'CSV procesado correctamente',
              total:
                registros.length,
            });

          } catch (error) {

            reject(error);

          }

        })

        .on('error', (error) => {

          reject(error);

        });

    });

  }
}
