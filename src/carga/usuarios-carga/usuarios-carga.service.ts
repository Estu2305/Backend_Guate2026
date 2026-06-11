import { Injectable } from '@nestjs/common';
import { CreateUsuariosCargaDto } from './dto/create-usuarios-carga.dto';
import { UpdateUsuariosCargaDto } from './dto/update-usuarios-carga.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosCarga } from './entities/usuarios-carga.entity';
import { Repository } from 'typeorm';
import { Readable } from 'stream';
import csv from 'csv-parser';

@Injectable()
export class UsuariosCargaService {

  constructor(
    @InjectRepository(UsuariosCarga)
    private readonly usuariosCargaRepository: Repository<UsuariosCarga>,
  ) { }

  async procesarCsv(archivo: any,) {
    const registros: Partial<UsuariosCarga>[] = [];
    const stream = Readable.from(
      archivo.buffer,
    );

    return new Promise((resolve, reject) => {
      stream.pipe(csv()).on('data', (fila) => {
        console.log('Fila CSV:', fila,);

        registros.push({

          nombre: fila.nombre,

          apellido: fila.apellido,

          correo: fila.correo,

          rol_id: Number(
            fila.rol_id,
          ),

          departamento:
            fila.departamento,

          activo:
            fila.activo === 'true' ||
            fila.activo === '1',

          fecha_registro:
            fila.fecha_registro
              ? new Date(
                fila.fecha_registro,
              )
              : new Date(),

          password:
            fila.password,

        });
      })
        .on('end', async () => {
          try {
            // Inserta todos los registros en una sola operación
            await this.usuariosCargaRepository.save(
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
