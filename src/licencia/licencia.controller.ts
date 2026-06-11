import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicenciaService } from './licencia.service';
import { CreateLicenciaDto } from './dto/create-licencia.dto';
import { UpdateLicenciaDto } from './dto/update-licencia.dto';

@Controller('licencia')
export class LicenciaController {
  constructor(private readonly licenciaService: LicenciaService) { }

  //Metodo post para crear una nueva ubicacion, en el body tienen que venir todos los atributos de la ubiacion, excepto el id que se genera automaticamente
  @Post()
  create(@Body() createLicenciaDto: CreateLicenciaDto) {//Obteniendo los datos mandados en el body de la peticion y los guarda en la variable createLicenciaDto
    return this.licenciaService.create(createLicenciaDto);
  }

  //Metodo get para obtener todas las licencias registradas en la base de datos
  @Get()
  findAll() {
    return this.licenciaService.findAll();
  }

  //Metodo get para obtener una licencia por su id, el id se obtiene de la url
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licenciaService.findOne(+id);
  }

  //Metodo patch para actualizar una licencia por su id, el id se obtiene de la url
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLicenciaDto: UpdateLicenciaDto) {
    return this.licenciaService.update(+id, updateLicenciaDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licenciaService.remove(+id);
  }

  //Metodo get para obtener las 10 licencias con fecha de vencimiento mas cercana a la fecha proporcionada en la url
  @Get('proximas/:fecha')//Ejemplo de url: licencia/proximas/2023-12-31
  findClosest(@Param('fecha') fecha: string) {
    return this.licenciaService.findClosest(fecha);
  }
}
