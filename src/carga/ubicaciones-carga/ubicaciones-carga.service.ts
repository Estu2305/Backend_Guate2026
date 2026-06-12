import { Injectable } from '@nestjs/common';
import { CreateUbicacionesCargaDto } from './dto/create-ubicaciones-carga.dto';
import { UpdateUbicacionesCargaDto } from './dto/update-ubicaciones-carga.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UbicacionesCarga } from './entities/ubicaciones-carga.entity';
import { Repository } from 'typeorm';
import { Readable } from 'stream';
import csv from 'csv-parser';

@Injectable()
export class UbicacionesCargaService {
  constructor(
    @InjectRepository(UbicacionesCarga)
    private readonly ubicacionesCargaRepository: Repository<UbicacionesCarga>,
  ) { }

  async procesarCsv(archivo: any,) {
    const registros: Partial<UbicacionesCarga>[] = [];
    const stream = Readable.from(
      archivo.buffer,
    );

    return new Promise((resolve, reject) => {
      stream.pipe(csv()).on('data', (fila) => {
        console.log('Fila CSV:', fila,);

        registros.push({

          nombre: fila.nombre,

          edificio: fila.edificio,

          piso: fila.piso,

          capacidad: Number(
            fila.capacidad,
          ),

          estado: fila.estado,

        });
      })
        .on('end', async () => {
          try {
            // Inserta todos los registros en una sola operación
            await this.ubicacionesCargaRepository.save(
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
