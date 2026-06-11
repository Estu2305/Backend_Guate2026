import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('asignaciones')
export class Asignacion {

    @PrimaryGeneratedColumn()//Llave primaria autogenerada
    id!: number//id de la asignacion generado automaticamente

    @Column()//Columna de la tabla, el nombre de la propiedad es igual al nombre de la columna en la base de datos
    activo_id!: number

    @Column()
    usuario_id!: number

    @Column({ type: 'date' })//Tipo de dato fecha, solo fecha sin hora
    fecha_inicio!: Date

    @Column({ type: 'date'})
    fecha_fin!: Date

    @Column()
    motivo!: string

    @Column()
    notas!: string
}
