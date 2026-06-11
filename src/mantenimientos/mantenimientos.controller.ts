import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MantenimientosService } from './mantenimientos.service';
import { CreateMantenimientoDto } from './Dto/create-mantenimientos.dto';
import { UpdateMantenimientoDto } from './Dto/update-mantenimietos.dto';

@Controller('mantenimientos')
export class MantenimientosController {

 constructor(
     private readonly mantenimientosService: MantenimientosService,
   ) {}
 
  // Ver todos
  @Get()
  findAll() {
    return this.mantenimientosService.findAll();
  } 

  // Proximo Mantenimientos
  @Get('proximos')
  proximos() {
    return this.mantenimientosService.proximos();
  }

  //Alertas
  @Get('alertas')
  alertas() {
    return this.mantenimientosService.alertas();
  }

  // Ver uno en especifico
  @Get(':id')
  findOne(
   @Param('id', ParseIntPipe)
   id: number,
  ) {
    return this.mantenimientosService.findOne(id);
  }

  //Crear Mantenimiento
  @Post()
  create(
    @Body()
    data: CreateMantenimientoDto,
  ) {
    return this.mantenimientosService.create(data);
  }

  //Actualizar Mantenimiento
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    data: UpdateMantenimientoDto,
  ) {
    return this.mantenimientosService.update(
      id,
      data,
    );
  }

  // Eliniar Mantenimiento
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.mantenimientosService.remove(id);
  }

  //Activiacion para historial
  @Get('activo/:id')
  findByActivo(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.mantenimientosService.findByActivo(id);
  }
}
