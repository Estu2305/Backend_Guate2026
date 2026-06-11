import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Role } from '../roles/entities/role.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column()
  correo!: string;

  @Column()
  rol_id!: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'rol_id' })
  rol!: Role;

  @Column({
    nullable: true,
  })
  departamento!: string;

  @Column()
  activo!: boolean;

  @Column()
  password!: string;

  @Column()
  fecha_registro!: Date;
}