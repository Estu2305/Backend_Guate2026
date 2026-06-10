import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivosService } from './activos.service';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';

@Controller('activos')
export class ActivosController {
  constructor(private readonly activosService: ActivosService) { }

  //Metodo post para crear un nuevo activo, en el body tienen que venir todos los atributos del activo, excepto el id que se genera automaticamente
  @Post()
  create(@Body() createActivoDto: CreateActivoDto) {//Obtiene el body de la peticion y lo guarda en la variable createActivoDto, que es del tipo CreateActivoDto
    return this.activosService.create(createActivoDto);//Llama al metodo create del servicio de activos, pasando como parametro el createActivoDto
  }

  //Metodo get para obtener todos los activos registrados en la base de datos
  @Get()
  findAll() {
    return this.activosService.findAll();
  }

  //Metodo get para obtener un activo por su id, el id se obtiene de la url
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activosService.findOne(+id);
  }

  //Metodo patch para actualizar un activo por su id, el id se obtiene de la url
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivoDto: UpdateActivoDto) {//Obtiene el body de la peticion y lo guarda en la variable updateActivoDto, unicamente se mandan los atributos que se consideraron que pueden ser actualizados
    return this.activosService.update(+id, updateActivoDto);//Rertorna el resultado del metodo update
  }

  //Metodo delete para eliminar un activo por su id, el id se obtiene de la url
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activosService.remove(+id);//Retorna el resultado del metodo remove
  }
}
