import { PartialType } from '@nestjs/mapped-types';
import { CreateActivoDto } from './create-activo.dto';
import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

//Clase DTO para actualizar un activo, hereda de CreateAsignacionDto y agrega validaciones adicionales
export class UpdateActivoDto extends PartialType(CreateActivoDto) {
    @IsString()//Corrobora que lo mandado en el body sea un string
    @IsNotEmpty()//Corrobora que el campo mandado en el body no este vacio.
    nombre!: string;

    @IsString()
    @IsNotEmpty()
    descripcion!: string;

    @IsNumber()//Corrobora que lo mandado en el body sea un numero
    categoria_id!: number;

    @IsString()
    @IsNotEmpty()
    estado!: string;

    @IsNumber()
    ubicacion_id!: number;

    @IsNumber()
    @Min(0)//Corrobora que el numero mandado en el body sea mayor o igual a 0, para evitar valores negativos
    valor_compra!: number;


    @IsString()
    @IsNotEmpty()
    sistema_operativo!: string;
}
