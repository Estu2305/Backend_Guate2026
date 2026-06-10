import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';

@Controller('guia')
export class GuiaController {
  constructor(private readonly guiaService: GuiaService) {}

  @Post()
  create(@Body() createGuiaDto: CreateGuiaDto) {
    return this.guiaService.create(createGuiaDto);
  }

  @Get()
  findAll() {
    return this.guiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuiaDto: UpdateGuiaDto) {
    return this.guiaService.update(+id, updateGuiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guiaService.remove(+id);
  }
}
