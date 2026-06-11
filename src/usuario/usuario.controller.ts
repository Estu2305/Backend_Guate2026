import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './Dto/create-usuario.dto';
import { UpdateUsuarioDto } from './Dto/update-usuario.dto';

import { UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

import { Roles } from '../auth/Decorators/roles.decorator';
import { ResetPasswordDto } from './Dto/reset-password.dto';

@UseGuards(JwtAuthGuard)
@Controller('usuarios')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
  ) {}

  // Visualizar a todos los usuarios
  @Roles('Administrador')
  @UseGuards(
    JwtAuthGuard,
    RolesGuard,
  )
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  // Visualiazar por su id 
  @Roles('Administrador')
  @UseGuards(
    JwtAuthGuard,
    RolesGuard,
  )
  @Get(':id')
  findOne(
   @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usuarioService.findOne(id);
  }

  // Crear Usuarios
  @Roles('Administrador')
  @UseGuards(
    JwtAuthGuard,
    RolesGuard,
  )
  @Post()
  create(
    @Body() data: CreateUsuarioDto,
  ) {
    return this.usuarioService.create(data);
  }

  // Actualizar Campos del Usuario
  @Roles('Administrador')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUsuarioDto,
  ) {
    return this.usuarioService.update(id, data);
  }

  // Para no eliminar mejor desactiva el usuario como reporte de algun detalle
  // Se puede volver a activar que seria como habilitar

  //Desactivar Usuario
  @Roles('Administrador')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id/desactivar')
  desactivar(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usuarioService.desactivar(id);
  }

  // Activar Usuario
  @Roles('Administrador')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id/activar')
  activar(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usuarioService.activar(id);   
  }

  //Olvido la COntrasenia
  @Roles('Administrador')
  @UseGuards(
    JwtAuthGuard,
    RolesGuard,
  )
  @Patch(':id/reset-password')
  resetPassword(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: ResetPasswordDto,
  ) {
    return this.usuarioService.resetPassword(
      id,
      data.password,
    );
  }
}