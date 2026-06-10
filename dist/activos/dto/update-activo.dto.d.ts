import { CreateActivoDto } from './create-activo.dto';
declare const UpdateActivoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateActivoDto>>;
export declare class UpdateActivoDto extends UpdateActivoDto_base {
    nombre: string;
    descripcion: string;
    categoria_id: number;
    estado: string;
    ubicacion_id: number;
    valor_compra: number;
    sistema_operativo: string;
}
export {};
