import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('ubicaciones')//Nombre de la entidad, nombre igual al de la tabla en la base de datos
export class Ubicacion {

    @PrimaryGeneratedColumn()//Llave primaria autogenerada
    id!: number//El signo de exclamacion indica que el valor no puede ser nulo

    @Column()//Columna de la tabla, el nombre de la propiedad es igual al nombre de la columna en la base de datos
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
