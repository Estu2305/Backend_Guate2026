import {
    IsString,
    IsNotEmpty,
    IsNumber,
} from 'class-validator';//Importacion para la validacion de cada uno de los campos

export class CreateUbicacionDto {

    @IsString()//Corrobora que lo mandado en el Body sea un string
    @IsNotEmpty()//Corrobora que el campo no este vacio
    nombre!: string;

    @IsString()
    @IsNotEmpty()
    edificio!: string;

    @IsString()
    @IsNotEmpty()
    piso!: string;

    @IsNumber()//Corrobora que el campo mandado en el body sea un numero
    capacidad!: number;

    @IsString()
    @IsNotEmpty()
    estado!: string;
}
