import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MantenimientosCargaService } from './mantenimientos-carga.service';
import { CreateMantenimientosCargaDto } from './dto/create-mantenimientos-carga.dto';
import { UpdateMantenimientosCargaDto } from './dto/update-mantenimientos-carga.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('mantenimientos-carga')
export class MantenimientosCargaController {
  constructor(private readonly mantenimientosCargaService: MantenimientosCargaService) {}

  //Metodo post que se encarga de almacenar datos en la DB a partir de un archivo .csv
  @Post('cargar-csv')
  @UseInterceptors(FileInterceptor('archivo'))//Pasar en la url el archivo .csv
  async cargarCsv(@UploadedFile() archivo:any,){
    console.log(archivo)
    return await this.mantenimientosCargaService.procesarCsv(archivo)
  }
}
