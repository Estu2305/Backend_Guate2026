import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('mantenimientos')
export class MantenimientosCarga {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    activo_id!: number

    @Column()
    tipo!: string

    @Column()
    descripcion!: string

    @Column({type: 'date'})
    fecha_realizado!: Date

    @Column({type: 'date'})
    proximo_mantenimiento!: Date

    @Column()
    responsable!: string

    @Column('decimal', {//Tipo de dato decimal, para valores con decimales
        precision: 10,
        scale: 2,
    })
    costo!: number
}
