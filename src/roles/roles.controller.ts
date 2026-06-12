import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { RolesService } from './roles.service';
import { CreateRoleDto } from './Dto/create-role.dto';
import { UpdateRoleDto } from './Dto/update-role.dto';
import { Roles } from '../auth/Decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

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
  @Roles('Administrador')
  @UseGuards(
  JwtAuthGuard,
  RolesGuard,
  )
  @Post()
  create(
    @Body() data: CreateRoleDto,
  ) {
    return this.rolesService.create(data);
  }

  //Editar Roles
  @Roles('Administrador')
  @UseGuards(
  JwtAuthGuard,
  RolesGuard,
  )
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateRoleDto,
  ) {
    return this.rolesService.update(id, data);
  }
}