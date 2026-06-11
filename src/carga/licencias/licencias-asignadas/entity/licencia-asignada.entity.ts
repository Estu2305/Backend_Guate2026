import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('licencias_asignadas')
export class LicenciaAsignada {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    licencia_id!: number

    @Column()
    activo_id!: number

    @Column()
    usuario_id!: number

    @Column({ type: 'date' })//Tipo de dato fecha, solo fecha sin hora
    fecha_asignacion!: Date
}