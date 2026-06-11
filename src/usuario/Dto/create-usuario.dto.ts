export class CreateUsuarioDto {
  nombre!: string;
  apellido!: string;
  correo!: string;
  rol_id!: number;
  departamento?: string;
  activo!: boolean;
  password!: string;
}