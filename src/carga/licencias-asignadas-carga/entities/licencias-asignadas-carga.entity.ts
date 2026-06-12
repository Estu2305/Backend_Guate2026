import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('licencias_asignadas')
export class LicenciasAsignadasCarga {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    licencia_id!: number

    @Column()
    activo_id!: number

    @Column()
    usuario_id!: number

    @Column({type:'date'})
    fecha_asignacion!: Date
}
