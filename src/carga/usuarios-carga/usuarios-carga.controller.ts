import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsuariosCargaService } from './usuarios-carga.service';
import { CreateUsuariosCargaDto } from './dto/create-usuarios-carga.dto';
import { UpdateUsuariosCargaDto } from './dto/update-usuarios-carga.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('usuarios-carga')
export class UsuariosCargaController {
  constructor(private readonly usuariosCargaService: UsuariosCargaService) { }

  //Metodo post que se encarga de almacenar datos en la DB a partir de un archivo .csv
  @Post('cargar-csv')
  @UseInterceptors(FileInterceptor('archivo'))//Pasar en la url el archivo .csv
  async cargarCsv(@UploadedFile() archivo: any,) {
    console.log(archivo)
    return await this.usuariosCargaService.procesarCsv(archivo)
  }
}
