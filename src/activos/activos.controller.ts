import { Controller, Get } from '@nestjs/common';
import { ActivosService } from './activos.service';

@Controller('activos')
export class ActivosController {
    constructor(private readonly usuariosService: ActivosService) { }

    @Get()
    findAll() {
        return this.usuariosService.findAll();
    }
}
