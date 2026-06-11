import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';

@Controller('asignacion')
export class AsignacionController {
  constructor(private readonly asignacionService: AsignacionService) {}
  //Metodo post para crear una nueva asignacion, en el body tienen que venir todos los atributos de la asignacion, excepto el id que se genera automaticamente
  @Post()
  create(@Body() createAsignacionDto: CreateAsignacionDto) {//Obteniendo los datos mandados en el body de la peticion y los guarda en la variable createAsignacionDto
    return this.asignacionService.create(createAsignacionDto);
  }

  //Metodo get para obtener todas las asignaciones registradas en la base de datos
  @Get()
  findAll() {
    return this.asignacionService.findAll();
  }

  //Metodo get para obtener una asignacion por su id, el id se obtiene de la url
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignacionService.findOne(+id);
  }

  //Metodo patch para actualizar una asignacion por su id, el id se obtiene de la url
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsignacionDto: UpdateAsignacionDto) {
    return this.asignacionService.update(+id, updateAsignacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignacionService.remove(+id);
  }
}
