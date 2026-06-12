import { PartialType } from '@nestjs/mapped-types';
import { CreateLicenciasAsignadasCargaDto } from './create-licencias-asignadas-carga.dto';

export class UpdateLicenciasAsignadasCargaDto extends PartialType(CreateLicenciasAsignadasCargaDto) {}
