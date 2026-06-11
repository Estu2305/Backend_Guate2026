import { Injectable } from '@nestjs/common';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from './entities/asignacion.entity';

@Injectable()
export class AsignacionService {

  constructor(
        @InjectRepository(Asignacion)
        private asignacionesRepository: Repository<Asignacion>,
      ){  }

  create(createAsignacionDto: CreateAsignacionDto) {
    return this.asignacionesRepository.save(createAsignacionDto);
  }

  findAll() {
    return this.asignacionesRepository.find();
  }

  findOne(id: number) {
    return this.asignacionesRepository.findOneBy({ id });
  }

  update(id: number, updateAsignacionDto: UpdateAsignacionDto) {
    return this.asignacionesRepository.update({ id }, updateAsignacionDto);
  }

  remove(id: number) {
    return this.asignacionesRepository.delete({ id });
  }
}
