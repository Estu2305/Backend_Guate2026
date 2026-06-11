import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { RolesService } from './roles.service';
import { CreateRoleDto } from './Dto/create-role.dto';
import { UpdateRoleDto } from './Dto/update-role.dto';

@Controller('roles')
export class RolesController {
  constructor(
    private readonly rolesService: RolesService,
  ) {}

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.rolesService.findOne(id);
  }

  //Crear Roles

  @Post()
  create(
    @Body() data: CreateRoleDto,
  ) {
    return this.rolesService.create(data);
  }

  //Editar Roles
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateRoleDto,
  ) {
    return this.rolesService.update(id, data);
  }
}