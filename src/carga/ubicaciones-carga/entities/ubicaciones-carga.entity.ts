import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ubicaciones')
export class UbicacionesCarga {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nombre!: string

    @Column()
    edificio!: string

    @Column()
    piso!: string

    @Column()
    capacidad!: number

    @Column()
    estado!: string
}
