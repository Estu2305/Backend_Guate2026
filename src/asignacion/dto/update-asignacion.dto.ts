import { PartialType } from '@nestjs/mapped-types';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAsignacionDto extends PartialType(CreateAsignacionDto) {

    @IsString()
    @IsNotEmpty()
    motivo!: string;

    @IsString()
    @IsNotEmpty()
    notas!: string;
}
