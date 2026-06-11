import { PartialType } from '@nestjs/mapped-types';
import { CreateMantenimientosCargaDto } from './create-mantenimientos-carga.dto';

export class UpdateMantenimientosCargaDto extends PartialType(CreateMantenimientosCargaDto) {}
