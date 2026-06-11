import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LicenciasAsignadasService } from './licencias-asignadas.service';

@Controller('licencias-asignadas')
export class LicenciasAsignadasController {
    constructor(
        private readonly licenciasService: LicenciasAsignadasService,
    ) { }

    @Post('cargar-csv')
    @UseInterceptors(FileInterceptor('archivo'))
    async cargarCsv(
        @UploadedFile() archivo: any,
    ) {
        console.log(archivo);
        return await this.licenciasService.procesarCsv(archivo);
    }
}
