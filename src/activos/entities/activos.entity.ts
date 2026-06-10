import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('activos')
export class Activos {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    codigo!: string

    @Column()
    nombre!: string

    @Column()
    descripcion!: string

    @Column()
    categoria_id!: number

    @Column()
    marca!: string

    @Column()
    modelo!: string

    @Column()
    numero_serie!: string

    @Column()
    estado!: string

    @Column()
    ubicacion_id!: number

    @Column({ type: 'date' })
    fecha_compra!: Date

    @Column({ type: 'timestamp' })
    fecha_registro!: Date

    @Column('decimal', {
        precision: 10,
        scale: 2,
    })
    valor_compra!: number;

    @Column()
    direccion_ip!: string

    @Column()
    sistema_operativo!: string
}