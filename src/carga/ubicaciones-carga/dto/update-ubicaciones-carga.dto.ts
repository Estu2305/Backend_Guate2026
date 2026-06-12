import { PartialType } from '@nestjs/mapped-types';
import { CreateUbicacionesCargaDto } from './create-ubicaciones-carga.dto';

export class UpdateUbicacionesCargaDto extends PartialType(CreateUbicacionesCargaDto) {}
