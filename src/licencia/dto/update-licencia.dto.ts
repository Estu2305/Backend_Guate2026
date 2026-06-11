import { PartialType } from '@nestjs/mapped-types';
import { CreateLicenciaDto } from './create-licencia.dto';
import {
    IsString,
    IsNotEmpty,
    IsNumber,
    Min,
    IsDateString,
} from 'class-validator';//Importacion para la validacion de cada uno de los campos

export class UpdateLicenciaDto extends PartialType(CreateLicenciaDto) {
    //Estos son los atributos que son considerados para que sean actualizados en una licencia.

    @IsString()//Corrobora que lo mandado en el Body sea un string
    @IsNotEmpty()//Corrobora que el campo no este vacio
    software!: string;

    @IsString()
    @IsNotEmpty()
    version!: string;

    @IsString()
    @IsNotEmpty()
    proveedor!: string;

    @IsNumber()//Corrobora que el campo mandado en el body sea un numero
    cantidad_licencias!: number;

    @IsString()
    @IsNotEmpty()
    tipo_licencia!: string;

    @IsDateString()
    fecha_vencimiento!: Date;

    @IsNumber()
    @Min(0)
    costo!: number;

    @IsString()
    @IsNotEmpty()
    notas!: string;
}
