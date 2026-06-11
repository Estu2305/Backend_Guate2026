import { Injectable } from '@nestjs/common';
import { CreateMantenimientosCargaDto } from './dto/create-mantenimientos-carga.dto';
import { UpdateMantenimientosCargaDto } from './dto/update-mantenimientos-carga.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MantenimientosCarga } from './entities/mantenimientos-carga.entity';
import { Repository } from 'typeorm';
import { Readable } from 'stream';
import csv from 'csv-parser';
import { stringify } from 'querystring';

@Injectable()
export class MantenimientosCargaService {
  constructor(
    @InjectRepository(MantenimientosCarga)
    private readonly mantenimientosCargaRepository: Repository<MantenimientosCarga>,
  ) { }

  async procesarCsv(
    archivo: any,
  ) {

    const registros: any[] = [];

    const stream = Readable.from(archivo.buffer);

    return new Promise((resolve, reject) => {

      stream
        .pipe(
          csv(),
        )
        .on('data', (fila) => {

          console.log('Fila CSV: ', fila)

          registros.push({
            activo_id: Number(fila.activo_id),
            tipo: fila.tipo,
            descripcion: fila.descripcion,
            fecha_realizado: new Date(fila.fecha_realizado),
            proximo_mantenimiento: new Date(fila.proximo_mantenimiento),
            responsable: fila.responsable,
            costo: Number(fila.costo),
          });
        })
        .on('end', async () => {

          try {

            for (const registro of registros) {

              //console.log(registro);

              await this.mantenimientosCargaRepository.save({
                activo_id: registro.activo_id,
                tipo: registro.tipo,
                descripcion: registro.descripcion,
                fecha_realizado: registro.fecha_realizado,
                proximo_mantenimiento: registro.proximo_mantenimiento,
                responsable: registro.responsable,
                costo: registro.costo,
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
