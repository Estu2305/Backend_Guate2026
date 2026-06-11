import { Injectable } from '@nestjs/common';
import { CreateLicenciaDto } from './dto/create-licencia.dto';
import { UpdateLicenciaDto } from './dto/update-licencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Licencia } from './entities/licencia.entity';

@Injectable()
export class LicenciaService {

  constructor(
    @InjectRepository(Licencia)
    private licenciaRepository: Repository<Licencia>,
  ) { }

  //Metodo que crea y almacena una licencia en la base de datos
  create(createLicenciaDto: CreateLicenciaDto) {
    return this.licenciaRepository.save(createLicenciaDto);
  }

  //Metodo que obtiene y devuelve un array con todas las licencias almacenadas en la base de datos
  findAll() {
    return this.licenciaRepository.find();
  }

  //Metodo que devuelve una sola licencia que coincida con el id proporcionado
  findOne(id: number) {
    return this.licenciaRepository.findOneBy({ id });
  }

  //Metodo que actualiza una licencia que coincida con el id proporcionado en la url
  update(id: number, updateLicenciaDto: UpdateLicenciaDto) {
    return this.licenciaRepository.update(id, updateLicenciaDto);
  }

  remove(id: number) {
    return this.licenciaRepository.delete(id);
  }

  //Metodo que devuelve las 10 licencias con fecha de vencimiento mas cercana a la fecha proporcionada en la url
  async findClosest(fecha: string) {
    return await this.licenciaRepository
      .createQueryBuilder('licencia')
      .where('licencia.fecha_vencimiento >= :fecha', { fecha })
      .orderBy('licencia.fecha_vencimiento', 'ASC')
      .limit(10)
      .getMany();
  }
}
