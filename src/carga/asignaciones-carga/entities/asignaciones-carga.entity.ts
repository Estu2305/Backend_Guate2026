import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('asignaciones')
export class AsignacionesCarga {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    activo_id!: number

    @Column()
    usuario_id!: number

    @Column({
        type: 'date',
        nullable: true,
    })
    fecha_inicio!: Date;

    @Column({
        type: 'date',
        nullable: true,
    })
    fecha_fin!: Date;

    @Column()
    motivo!: string

    @Column()
    notas!: string

}
