import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class UsuariosCarga {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nombre!: string

    @Column()
    apellido!: string

    @Column()
    correo!: string

    @Column()
    rol_id!: number

    @Column()
    departamento!: string

    @Column()
    activo!: boolean

    @Column({type: 'date'})
    fecha_registro!: Date

    @Column()
    password!: string
}
