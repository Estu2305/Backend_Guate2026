import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UpdateProfileDto } from './Dto/update-profile.dto';
import { ChangePasswordDto } from './Dto/change-password.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,

    private jwtService: JwtService,
  ) {}

 // Login Acceso
  async login(
    correo: string,
    password: string,
  ) {

    const usuario =
      await this.usuarioRepository.findOne({
        where: {
          correo,
        },
        relations: {
          rol: true,
        },
      });

    if (!usuario) {
      throw new UnauthorizedException(
        'Credenciales inválidas',
      );
    }

    if (!usuario.activo) {
      throw new UnauthorizedException(
        'Usuario desactivado',
      );
    }

    const passwordValida =
    await bcrypt.compare(
      password,
      usuario.password,
    );

  if (!passwordValida) {
    throw new UnauthorizedException(
      'Credenciales inválidas',
    );
  }

    const payload = {
      sub: usuario.id,
      correo: usuario.correo,
      rol: usuario.rol.nombre,
    };

    return {
      access_token:
        this.jwtService.sign(payload),
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol.nombre,
      },
    };
  }

 //Perfil 
  async perfil(id: number) {
    return this.usuarioRepository.findOne({
      where: { id },
      relations: {
        rol: true,
      },
    });
  }

  //Editar perfil propio usuario
  async updatePerfil(
    id: number,
    data: UpdateProfileDto,
  ) {
    const usuario =
      await this.usuarioRepository.findOne({
        where: { id },
      });

    if (!usuario) {
      throw new NotFoundException(
        'Usuario no encontrado',
      );
    }

    await this.usuarioRepository.update(
      id,
      data,
    );

    return this.perfil(id);
  }

  //Cambiar Contrasenia
  async cambiarPassword(
    id: number,
    data: ChangePasswordDto,
  ) {
    const usuario =
      await this.usuarioRepository.findOne({
        where: { id },
      });

    if (!usuario) {
      throw new NotFoundException(
        'Usuario no encontrado',
      );
    }

    const passwordCorrecta =
      await bcrypt.compare(
        data.passwordActual,
        usuario.password,
      );

    if (!passwordCorrecta) {
      throw new BadRequestException(
        'La contraseña actual es incorrecta',
      );
    }

    usuario.password =
      await bcrypt.hash(
        data.passwordNueva,
        10,
      );

    await this.usuarioRepository.save(
      usuario,
    );

    return {
      message:
        'Contraseña actualizada correctamente',
    };
  }
}
