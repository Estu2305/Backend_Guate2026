import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Role } from '../roles/entities/role.entity';
import { CreateUsuarioDto } from './Dto/create-usuario.dto';
import { UpdateUsuarioDto } from './Dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,

    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  // Tener a todos los Usuarios
  async findAll() {
    return this.usuarioRepository.find({
      relations: {
        rol: true,
      },
    });
  }

  // Seleccionar un Usuario especifico
  async findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: { id },
      relations: {
        rol: true,
      },
    });
  }

  // Crear Usuario, con validaciones del mismo correo y id no existente
  async create(data: CreateUsuarioDto) {

    const rol = await this.roleRepository.findOne({
      where: {
        id: data.rol_id,
      },
    });

    if (!rol) {
      throw new BadRequestException(
        `El rol con ID ${data.rol_id} no existe`,
      );
    }

    const existeCorreo = await this.usuarioRepository.findOne({
      where: {
        correo: data.correo,
      },
    });

    if (existeCorreo) {
      throw new BadRequestException(
        'Ya existe un usuario con ese correo',
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        data.password!,
        10,
      );

    const usuario =
      this.usuarioRepository.create({
        ...data,
        password: hashedPassword,
      });

    return this.usuarioRepository.save(
      usuario,
    );
  }

  // Actualizar campos del Usuario
  async update(
    id: number,
    data: UpdateUsuarioDto,
  ) {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException(
        `Usuario con ID ${id} no encontrado`,
      );
    }

    if (data.rol_id) {
      const rol = await this.roleRepository.findOne({
        where: {
          id: data.rol_id,
        },
      });

      if (!rol) {
        throw new BadRequestException(
          `El rol con ID ${data.rol_id} no existe`,
        );
      }
    }

    await this.usuarioRepository.update(id, data);

    return this.findOne(id);
  }

  //Descativar el usuario
  async desactivar(id: number) {

    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException(
        `Usuario con ID ${id} no encontrado`,
      );
    }

    usuario.activo = false;

    return this.usuarioRepository.save(usuario);
  }

  // Activar Usuario
  async activar(id: number) {

    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException(
        `Usuario con ID ${id} no encontrado`,
      );
    }

    usuario.activo = true;

    return this.usuarioRepository.save(usuario);
  }

  //Olvido de COntrasenia
  async resetPassword(
    id: number,
    password: string,
  ) {
    const usuario =
      await this.usuarioRepository.findOne({
        where: { id },
      });

    if (!usuario) {
      throw new NotFoundException(
        `Usuario con ID ${id} no encontrado`,
      );
    }

    usuario.password =
      await bcrypt.hash(
        password,
        10,
      );

    await this.usuarioRepository.save(
      usuario,
    );

    return {
      message:
        'Contraseña restablecida correctamente',
    };
  }
}