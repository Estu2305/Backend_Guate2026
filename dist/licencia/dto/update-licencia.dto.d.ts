import { CreateLicenciaDto } from './create-licencia.dto';
declare const UpdateLicenciaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateLicenciaDto>>;
export declare class UpdateLicenciaDto extends UpdateLicenciaDto_base {
    software: string;
    version: string;
    proveedor: string;
    cantidad_licencias: number;
    tipo_licencia: string;
    fecha_vencimiento: Date;
    costo: number;
    notas: string;
}
export {};
