import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsDateString,
    Min,
} from 'class-validator';

export class CreateLicenciaDto {

    @IsString()
    @IsNotEmpty()
    software!: string;

    @IsString()
    @IsNotEmpty()
    version!: string;

    @IsString()
    @IsNotEmpty()
    proveedor!: string;

    @IsNumber()
    cantidad_licencias!: number;

    @IsString()
    @IsNotEmpty()
    tipo_licencia!: string;

    @IsDateString()
    fecha_adquisicion!: Date;

    @IsDateString()
    fecha_vencimiento!: Date;

    @IsNumber()
    @Min(0)
    costo!: number;

    @IsString()
    @IsNotEmpty()
    notas!: string;

    @IsString()
    @IsNotEmpty()
    clave_producto!: string;
}