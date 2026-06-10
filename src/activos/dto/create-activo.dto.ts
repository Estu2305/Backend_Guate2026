import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsDateString,
    IsIP,
    Min,
} from 'class-validator';//Importacion para la validacion de cada uno de los campos

//Clase para el ingreso de un activo a al base de datos, con validaciones para cada campo
export class CreateActivoDto {

    //Para crear un Activo se necesitan todos los campos

    @IsString()//Corrobora que lo mandado en el Body sea un string
    @IsNotEmpty()//Corrobora que el campo no este vacio
    codigo!: string;

    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsString()
    @IsNotEmpty()
    descripcion!: string;

    @IsNumber()//Corrobora que el campo mandado en el body sea un numero
    categoria_id!: number;

    @IsString()
    @IsNotEmpty()
    marca!: string;

    @IsString()
    @IsNotEmpty()
    modelo!: string;

    @IsString()
    @IsNotEmpty()
    numero_serie!: string;

    @IsString()
    @IsNotEmpty()
    estado!: string;

    @IsNumber()
    ubicacion_id!: number;

    @IsDateString()//Corrobora que el campo mandado en el body sea una fecha valida
    fecha_compra!: Date;

    @IsDateString()
    fecha_registro!: Date;

    @IsNumber()
    @Min(0)//Corrobora que el campo mandado en el body sea un numero positivo
    valor_compra!: number;

    @IsIP()//Corrobora que el campo mandado en el body sea una dirección IP valida
    direccion_ip!: string;

    @IsString()
    @IsNotEmpty()
    sistema_operativo!: string;
}