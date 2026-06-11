import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mantenimiento } from './entities/mantenimieto.entity';
import { Repository } from 'typeorm';
import { CreateMantenimientoDto } from './Dto/create-mantenimientos.dto';
import { UpdateMantenimientoDto } from './Dto/update-mantenimietos.dto';


@Injectable()
export class MantenimientosService {

  constructor(
   @InjectRepository(Mantenimiento)
   private mantenimientoRepository:
     Repository<Mantenimiento>,
  ) {}

  // Ver todos
  async findAll() {
   return this.mantenimientoRepository.find();
  }

  // ver uno en especifico
  async findOne(id: number) {

   const mantenimiento =
     await this.mantenimientoRepository.findOne({
       where: { id },
     });

   if (!mantenimiento) {
     throw new NotFoundException(
       `Mantenimiento con ID ${id} no encontrado`,
     );
   }

   return mantenimiento;
 }

 // Crear Mantenimiento
 async create(
    data: CreateMantenimientoDto,
  ) {

    if (
      data.tipo !== 'Preventivo' &&
      data.tipo !== 'Correctivo'
    ) {
      throw new BadRequestException(
        'El tipo debe ser Preventivo o Correctivo',
      );
    }

    if (
      data.costo !== undefined &&
      data.costo < 0
    ) {
      throw new BadRequestException(
        'El costo no puede ser negativo',
      );
    }

    if (data.proximo_mantenimiento) {

      const fecha =
        new Date(data.proximo_mantenimiento);

      const hoy = new Date();

      hoy.setHours(0, 0, 0, 0);

      if (fecha < hoy) {
        throw new BadRequestException(
          'La fecha del próximo mantenimiento no puede ser anterior a hoy',
        );
      }
    }

    const mantenimiento =
      this.mantenimientoRepository.create(data);

    return this.mantenimientoRepository.save(
      mantenimiento,
    );
  }

 // Actualizacion de Mantenimiento
 async update(
    id: number,
    data: UpdateMantenimientoDto,
  ) {

    const mantenimiento =
      await this.mantenimientoRepository.findOne({
        where: { id },
      });

    if (!mantenimiento) {
      throw new NotFoundException(
        `Mantenimiento con ID ${id} no encontrado`,
      );
    }

    // Validar tipo
    if (data.tipo) {

      if (
        data.tipo !== 'Preventivo' &&
        data.tipo !== 'Correctivo'
      ) {
        throw new BadRequestException(
          'El tipo debe ser Preventivo o Correctivo',
        );
      }
    }

    // Validar costo
    if (
      data.costo !== undefined &&
      data.costo < 0
    ) {
      throw new BadRequestException(
        'El costo no puede ser negativo',
      );
    }

    // Validar fecha
    if (data.proximo_mantenimiento) {

      const fecha =
        new Date(data.proximo_mantenimiento);

      const hoy = new Date();

      hoy.setHours(0, 0, 0, 0);

      if (fecha < hoy) {
        throw new BadRequestException(
          'La fecha del próximo mantenimiento no puede ser anterior a hoy',
        );
      }
    }

    await this.mantenimientoRepository.update(
      id,
      data,
    );

    return this.findOne(id);
  }

 // Eliminar Mantenimiento
async remove(id: number) {

  const mantenimiento =
    await this.findOne(id);

  await this.mantenimientoRepository.remove(
    mantenimiento,
  );

  return {
    message:
      'Mantenimiento eliminado correctamente',
  };
}

 // Historial de activo
async findByActivo(activoId: number) {
    return this.mantenimientoRepository.find({
      where: {
        activo_id: activoId,
      },
      order: {
        fecha_realizado: 'DESC',
      },
    });
  }

  // Proximos mantenimientos
  async proximos() {
    return this.mantenimientoRepository
      .createQueryBuilder('m')
      .where(
        'm.proximo_mantenimiento >= CURRENT_DATE',
      )
      .orderBy(
        'm.proximo_mantenimiento',
        'ASC',
      )
      .getMany();
  }

  // Alertas
  async alertas() {
    return this.mantenimientoRepository
      .createQueryBuilder('m')
      .where(
        `m.proximo_mantenimiento <= CURRENT_DATE + INTERVAL '30 days'`,
      )
      .orderBy(
        'm.proximo_mantenimiento',
        'ASC',
      )
      .getMany();
  }
}
