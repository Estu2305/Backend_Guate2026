import { Injectable } from '@nestjs/common';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';

@Injectable()
export class UbicacionService {

  constructor(
      @InjectRepository(Ubicacion)
      private ubicacionesRepository: Repository<Ubicacion>,
    ){  }

  //Metodo que crea y almacena una ubicacion en la base de datos  
  create(createUbicacionDto: CreateUbicacionDto) {//Obtiene el DTO con los datos de la ubicacion a crear
    return this.ubicacionesRepository.save(createUbicacionDto);
  }

  //Metodo que devuelve un array con todas las ubicaciones almacenadas en la base de datos
  findAll() {
    return this.ubicacionesRepository.find();
  }

  //Metodo que devuelve una sola ubicacion que coincida con el id proporcionado, si no existe devuelve null
  findOne(id: number) {//obtiene el id de la ubicacion a buscar
    return this.ubicacionesRepository.findOne({ where: { id } });
  }

  //Metodo que actualiza una ubbicacion existente con los datos proporcionados en el DTO, si el activo no existe devuelve null
  update(id: number, updateUbicacionDto: UpdateUbicacionDto) {
    return this.ubicacionesRepository.update(id, updateUbicacionDto);
  }

  remove(id: number) {
    return this.ubicacionesRepository.delete(id);
  }
}
