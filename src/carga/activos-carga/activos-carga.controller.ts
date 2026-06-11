import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ActivosCargaService } from './activos-carga.service';
import { CreateActivosCargaDto } from './dto/create-activos-carga.dto';
import { UpdateActivosCargaDto } from './dto/update-activos-carga.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('activos-carga')
export class ActivosCargaController {
  constructor(private readonly activosCargaService: ActivosCargaService) {}

  //Metodo post que se encarga de almacenar datos en la DB a partir de un archivo .csv
    @Post('cargar-csv')
    @UseInterceptors(FileInterceptor('archivo'))//Pasar en la url el archivo .csv
    async cargarCsv(@UploadedFile() archivo:any,){
      console.log(archivo)
      return await this.activosCargaService.procesarCsv(archivo)
    }
}
