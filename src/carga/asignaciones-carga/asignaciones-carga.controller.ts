import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AsignacionesCargaService } from './asignaciones-carga.service';
import { CreateAsignacionesCargaDto } from './dto/create-asignaciones-carga.dto';
import { UpdateAsignacionesCargaDto } from './dto/update-asignaciones-carga.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('asignaciones-carga')
export class AsignacionesCargaController {
  constructor(private readonly asignacionesCargaService: AsignacionesCargaService) { }

  //Metodo post que se encarga de almacenar datos en la DB a partir de un archivo .csv
  @Post('cargar-csv')
  @UseInterceptors(FileInterceptor('archivo'))//Pasar en la url el archivo .csv
  async cargarCsv(@UploadedFile() archivo: any,) {
    console.log(archivo)
    return await this.asignacionesCargaService.procesarCsv(archivo)
  }
}
