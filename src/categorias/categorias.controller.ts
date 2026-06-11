import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './Dto/create-categoria.dto';
import { UpdateCategoriaDto } from './Dto/update-categoria.dto';

@Controller('categorias')
export class CategoriasController {
 constructor(
     private readonly categoriasService: CategoriasService,
   ) {}

 // Para ver todas las categorias  
 @Get()
 findAll() {
   return this.categoriasService.findAll();
 }

 //Para ver uno especifico 
 @Get(':id')
 findOne(
   @Param('id', ParseIntPipe)
   id: number,
 ) {
   return this.categoriasService.findOne(id);
 }

 //Para crear la categoria
 @Post()
 create(
   @Body()
   data: CreateCategoriaDto,
 ) {
   return this.categoriasService.create(data);
 }

 //Actualizar categoria
 @Patch(':id')
 update(
   @Param('id', ParseIntPipe)
   id: number,

   @Body()
   data: UpdateCategoriaDto,
 ) {
   return this.categoriasService.update(
     id,
     data,
   );
 }

 // Eliminar Categoria
 @Delete(':id')
 remove(
   @Param('id', ParseIntPipe)
   id: number,
 ) {
   return this.categoriasService.remove(id);
 }
}
