import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './Dto/create-categoria.dto';
import { UpdateCategoriaDto } from './Dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
 constructor(
  @InjectRepository(Categoria)
  private categoriaRepository: Repository<Categoria>,
 ) {}

 // Para ver todos
 async findAll() {
   return this.categoriaRepository.find();
 }

 //Ver uno especifico
 async findOne(id: number) {

   const categoria =
     await this.categoriaRepository.findOne({
       where: { id },
     });

   if (!categoria) {
     throw new NotFoundException(
       `Categoría con ID ${id} no encontrada`,
     );
   }

   return categoria;
 }

 // Crear Categoria
 async create(
   data: CreateCategoriaDto,
 ) {

   const existe =
     await this.categoriaRepository.findOne({
       where: {
         nombre: data.nombre,
       },
     });

   if (existe) {
     throw new BadRequestException(
       'Ya existe una categoría con ese nombre',
     );
   }

   const categoria =
     this.categoriaRepository.create(data);

   return this.categoriaRepository.save(
     categoria,
   );
 }

 //Actualizar Categoria
 async update(
   id: number,
   data: UpdateCategoriaDto,
 ) {

   const categoria =
     await this.findOne(id);

   await this.categoriaRepository.update(
     categoria.id,
     data,
   );

   return this.findOne(id);
 }

 //Eliminar Categoria
 async remove(id: number) {

   const categoria = await this.findOne(id);

   try {

     await this.categoriaRepository.remove(
       categoria,
     );

     return {
       message:
         'Categoría eliminada correctamente',
     };

   } catch {

     throw new BadRequestException(
       'No se puede eliminar la categoría porque tiene activos asociados',
     );

   }
 }
}
