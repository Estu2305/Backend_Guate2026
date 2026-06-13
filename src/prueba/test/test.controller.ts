import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get()
    obtenerMensaje() {
        return {
            estado: true,
            mensaje: 'Backend NestJS funcionando correctamente',
            fecha: new Date()
        };
    }
}