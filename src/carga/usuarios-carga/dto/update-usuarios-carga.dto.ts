import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosCargaDto } from './create-usuarios-carga.dto';

export class UpdateUsuariosCargaDto extends PartialType(CreateUsuariosCargaDto) {}
