import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('mantenimientos')
export class Mantenimiento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  activo_id!: number;

  @Column()
  tipo!: string;

  @Column({
    nullable: true,
  })
  descripcion!: string;

  @Column()
  fecha_realizado!: Date;

  @Column({
    nullable: true,
  })
  proximo_mantenimiento!: Date;

  @Column({
    nullable: true,
  })
  responsable!: string;

  @Column({
    type: 'decimal',
    default: 0,
  })
  costo!: number;
}