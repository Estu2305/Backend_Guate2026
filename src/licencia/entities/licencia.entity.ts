import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('licencias')
export class Licencia {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    software!: string

    @Column()
    version!: string
    
    @Column()
    proveedor!: string
    
    @Column()
    cantidad_licencias!: number

    @Column()
    tipo_licencia!: string

    @Column({ type: 'date' })//Tipo de dato fecha, solo fecha sin hora
    fecha_adquisicion!: Date

    @Column({ type: 'date' })//Tipo de dato fecha, solo fecha sin hora
    fecha_vencimiento!: Date

    @Column('decimal', {//Tipo de dato decimal, para valores con decimales
        precision: 10,
        scale: 2,
    })
    costo!: number

    @Column()
    notas!: string

    @Column()
    clave_producto!: string
}