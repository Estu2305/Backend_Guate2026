import { Injectable } from '@nestjs/common';
import { CreateAsignacionesCargaDto } from './dto/create-asignaciones-carga.dto';
import { UpdateAsignacionesCargaDto } from './dto/update-asignaciones-carga.dto';
import { AsignacionesCarga } from './entities/asignaciones-carga.entity';
import { Readable } from 'stream';
import csv from 'csv-parser';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionesCargaService {

  constructor(
    @InjectRepository(AsignacionesCarga)
    private readonly asignacionesCargaRepository: Repository<AsignacionesCarga>,
  ) { }

  async procesarCsv(archivo: any,) {
    const registros: Partial<AsignacionesCarga>[] = [];
    const stream = Readable.from(
      archivo.buffer,
    );

    return new Promise((resolve, reject) => {
      stream.pipe(csv()).on('data', (fila) => {
        console.log('Fila CSV:', fila,);

        registros.push({

          activo_id: Number(
            fila.activo_id,
          ),

          usuario_id: Number(
            fila.usuario_id,
          ),

          fecha_inicio:
            fila.fecha_inicio
              ? new Date(
                fila.fecha_inicio,
              )
              : undefined,

          fecha_fin:
            fila.fecha_fin
              ? new Date(
                fila.fecha_fin,
              )
              : undefined,

          motivo: fila.motivo,

          notas: fila.notas,

        });
      })
        .on('end', async () => {
          try {
            // Inserta todos los registros en una sola operación
            await this.asignacionesCargaRepository.save(
              registros,
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
