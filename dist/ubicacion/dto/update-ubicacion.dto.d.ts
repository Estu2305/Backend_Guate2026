import { CreateUbicacionDto } from './create-ubicacion.dto';
declare const UpdateUbicacionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUbicacionDto>>;
export declare class UpdateUbicacionDto extends UpdateUbicacionDto_base {
    nombre: string;
    edificio: string;
    piso: string;
    capacidad: number;
    estado: string;
}
export {};
