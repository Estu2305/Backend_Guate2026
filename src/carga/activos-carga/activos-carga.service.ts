import { Injectable } from '@nestjs/common';
import { CreateActivosCargaDto } from './dto/create-activos-carga.dto';
import { UpdateActivosCargaDto } from './dto/update-activos-carga.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivosCarga } from './entities/activos-carga.entity';
import { Repository } from 'typeorm';
import { Readable } from 'stream';
import csv from 'csv-parser';

@Injectable()
export class ActivosCargaService {

  constructor(
    @InjectRepository(ActivosCarga)
    private readonly activosCargaRepository: Repository<ActivosCarga>,
  ) { }

  async procesarCsv(
    archivo: any,
  ) {

    const registros: Partial<ActivosCarga>[] = [];

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

            codigo: fila.codigo,

            nombre: fila.nombre,

            descripcion: fila.descripcion,

            categoria_id: Number(
              fila.categoria_id,
            ),

            marca: fila.marca,

            modelo: fila.modelo,

            numero_serie:
              fila.numero_serie,

            estado: fila.estado,

            ubicacion_id: Number(
              fila.ubicacion_id,
            ),

            fecha_compra: new Date(
              fila.fecha_compra,
            ),

            fecha_registro: new Date(
              fila.fecha_registro,
            ),

            valor_compra: Number(
              fila.valor_compra,
            ),

            direccion_ip:
              fila.direccion_ip,

            sistema_operativo:
              fila.sistema_operativo,

          });

        })

        .on('end', async () => {

          try {

            // Inserta todos los registros en una sola operación
            await this.activosCargaRepository.save(
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

  create(createActivosCargaDto: CreateActivosCargaDto) {
    return 'This action adds a new activosCarga';
  }

  findAll() {
    return `This action returns all activosCarga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activosCarga`;
  }

  update(id: number, updateActivosCargaDto: UpdateActivosCargaDto) {
    return `This action updates a #${id} activosCarga`;
  }

  remove(id: number) {
    return `This action removes a #${id} activosCarga`;
  }
}
