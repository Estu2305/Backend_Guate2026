import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { LicenciasAsignadasCargaService } from './licencias-asignadas-carga.service';
import { CreateLicenciasAsignadasCargaDto } from './dto/create-licencias-asignadas-carga.dto';
import { UpdateLicenciasAsignadasCargaDto } from './dto/update-licencias-asignadas-carga.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('licencias-asignadas-carga')
export class LicenciasAsignadasCargaController {
  constructor(private readonly licenciasAsignadasCargaService: LicenciasAsignadasCargaService) { }

  //Metodo post que se encarga de almacenar datos en la DB a partir de un archivo .csv
  @Post('cargar-csv')
  @UseInterceptors(FileInterceptor('archivo'))//Pasar en la url el archivo .csv
  async cargarCsv(@UploadedFile() archivo: any,) {
    console.log(archivo)
    return await this.licenciasAsignadasCargaService.procesarCsv(archivo)
  }
}
