import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UbicacionesCargaService } from './ubicaciones-carga.service';
import { CreateUbicacionesCargaDto } from './dto/create-ubicaciones-carga.dto';
import { UpdateUbicacionesCargaDto } from './dto/update-ubicaciones-carga.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ubicaciones-carga')
export class UbicacionesCargaController {
  constructor(private readonly ubicacionesCargaService: UbicacionesCargaService) {}

  //Metodo post que se encarga de almacenar datos en la DB a partir de un archivo .csv
    @Post('cargar-csv')
    @UseInterceptors(FileInterceptor('archivo'))//Pasar en la url el archivo .csv
    async cargarCsv(@UploadedFile() archivo: any,) {
      console.log(archivo)
      return await this.ubicacionesCargaService.procesarCsv(archivo)
    }
}
