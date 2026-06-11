import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@Controller('ubicacion')
export class UbicacionController {
  constructor(private readonly ubicacionService: UbicacionService) { }

  //Metodo post para crear una nueva ubicacion, en el body tienen que venir todos los atributos de la ubiacion, excepto el id que se genera automaticamente
  @Post()
  create(@Body() createUbicacionDto: CreateUbicacionDto) {//Obteniendo los datos mandados en el body de la peticion y los guarda en la variable createUbicacionDto
    return this.ubicacionService.create(createUbicacionDto);
  }
  //Metodo get para obtener todas las ubicaciones registradas en la base de datos
  @Get()
  findAll() {
    return this.ubicacionService.findAll();
  }
  //Metodo get para obtener una ubicacion por su id, el id se obtiene de la url
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ubicacionService.findOne(+id);
  }
  //Metodo patch para actualizar una ubicacion por su id, el id se obtiene de la url
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUbicacionDto: UpdateUbicacionDto) {
    return this.ubicacionService.update(+id, updateUbicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ubicacionService.remove(+id);
  }
}
