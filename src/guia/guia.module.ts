import { Module } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { GuiaController } from './guia.controller';

@Module({
  controllers: [GuiaController],
  providers: [GuiaService],
})
export class GuiaModule {}
