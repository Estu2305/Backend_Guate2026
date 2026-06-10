import { Injectable } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activo } from './entities/activo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivosService {

  constructor(
    @InjectRepository(Activo)
    private activosRepository: Repository<Activo>,
  ){  }

  //Metodo que crea y almacena un activo en la base de datos
  create(createActivoDto: CreateActivoDto) {//Obtiene el DTO con los datos del activo a crear
    return this.activosRepository.save(createActivoDto);
  }

  //Metodo que devuelve un array con todos los activos almacenados en la base de datos
  findAll() {
    return this.activosRepository.find();
  }

  //Metodo que devuelve un solo activo que coincida con el id proporcionado, si no existe devuelve null
  findOne(id: number) {//obtiene el id del activo a buscar
    return this.activosRepository.findOne({ where: { id } });
  }

  //Metodo que actualiza un activo existente con los datos proporcionados en el DTO, si el activo no existe devuelve null
  update(id: number, updateActivoDto: UpdateActivoDto) {//obtiene el id del activo a actualizar y el DTO con los nuevos datos, verificar en el DTO que datos fueron considerados paa actualizar
    return this.activosRepository.update(id, updateActivoDto);
  }

  //Metodo que elimina un activo de la base de datos, si el activo no existe devuelve null
  remove(id: number) {
    return this.activosRepository.delete(id);
  }
}
