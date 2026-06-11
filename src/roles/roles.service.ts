import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './Dto/create-role.dto';
import { UpdateRoleDto } from './Dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  // Ver todos los roles
  async findAll() {
    return this.roleRepository.find();
  }

  // Ver un rol especifico
  async findOne(id: number) {
    const role = await this.roleRepository.findOne({
      where: { id },
    });

    if (!role) {
      throw new NotFoundException(
        `No existe el rol con id ${id}`,
      );
    }

    return role;
  }

  // Crear Roles

  async create(data: CreateRoleDto) {

    const existe = await this.roleRepository.findOne({
      where: {
        nombre: data.nombre,
      },
    });

    if (existe) {
      throw new BadRequestException(
        'Ya existe un rol con ese nombre',
      );
    }

    const rol = this.roleRepository.create(data);

    return this.roleRepository.save(rol);
  }

  // Editar Roles
  async update(
    id: number,
    data: UpdateRoleDto,
  ) {

    const rol = await this.roleRepository.findOne({
      where: { id },
    });

    if (!rol) {
      throw new NotFoundException(
        `Rol con ID ${id} no encontrado`,
      );
    }

    await this.roleRepository.update(id, data);

    return this.findOne(id);
  }

}