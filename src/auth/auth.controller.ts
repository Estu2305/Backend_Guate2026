import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Patch,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto } from './Dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UpdateProfileDto } from './Dto/update-profile.dto';
import { ChangePasswordDto } from './Dto/change-password.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  // Login Acceso
  @Post('login')
  login(
    @Body() loginDto: LoginDto,
  ) {
    return this.authService.login(
      loginDto.correo,
      loginDto.password,
    );
  }

  //Perfil
  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  perfil(@Request() req) {
    return this.authService.perfil(
      req.user.id,
    );
  }

  //Editar Perfil cada usuario
  @UseGuards(JwtAuthGuard)
  @Patch('perfil')
  updatePerfil(
    @Request() req,
    @Body() data: UpdateProfileDto,
  ) {
    return this.authService.updatePerfil(
      req.user.id,
      data,
    );
  }

  //Cambiar Contrasenia
  @UseGuards(JwtAuthGuard)
  @Patch('cambiar-password')
  cambiarPassword(
    @Request() req,
    @Body() data: ChangePasswordDto,
  ) {
    return this.authService.cambiarPassword(
      req.user.id,
      data,
    );
  }
}
