import { PartialType } from '@nestjs/mapped-types';
import { CreateUbicacionDto } from './create-ubicacion.dto';
import { IsNotEmpty, IsString, IsNumber} from 'class-validator';

export class UpdateUbicacionDto extends PartialType(CreateUbicacionDto) {
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
