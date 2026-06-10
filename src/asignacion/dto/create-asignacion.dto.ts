import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsDateString,
} from 'class-validator';//Importacion para la validacion de cada uno de los campos

export class CreateAsignacionDto {


    @IsNumber()
    activo_id!: number;

    @IsNumber()
    usuario_id!: number;

    @IsDateString()//Corrobora que el campo mandado en el body sea una fecha valida
    fecha_inicio!: Date;

    @IsDateString()
    fecha_fin!: Date;

    @IsString()
    @IsNotEmpty()
    motivo!: string;

    @IsString()
    @IsNotEmpty()
    notas!: string;
}
