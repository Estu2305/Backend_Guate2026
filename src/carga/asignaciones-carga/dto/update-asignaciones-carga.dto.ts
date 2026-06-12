import { PartialType } from '@nestjs/mapped-types';
import { CreateAsignacionesCargaDto } from './create-asignaciones-carga.dto';

export class UpdateAsignacionesCargaDto extends PartialType(CreateAsignacionesCargaDto) {}
