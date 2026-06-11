export class CreateMantenimientoDto {
  activo_id!: number;
  tipo!: string;
  descripcion?: string;
  proximo_mantenimiento?: Date;
  responsable?: string;
  costo?: number;
}