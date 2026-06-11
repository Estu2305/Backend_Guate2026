import { PartialType } from '@nestjs/mapped-types';
import { CreateActivosCargaDto } from './create-activos-carga.dto';

export class UpdateActivosCargaDto extends PartialType(CreateActivosCargaDto) {}
