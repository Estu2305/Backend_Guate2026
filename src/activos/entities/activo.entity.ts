import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

//Nombre de la entidad, nombre igual al de la tabla en la base de datos
@Entity('activos')
export class Activo {

    @PrimaryGeneratedColumn()//Llave primaria autogenerada
    id!: number//El signo de exclamacion indica que el valor no puede ser nulo

    @Column()//Columna de la tabla, el nombre de la propiedad es igual al nombre de la columna en la base de datos
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

    @Column({ type: 'date' })//Tipo de dato fecha, solo fecha sin hora
    fecha_compra!: Date

    @Column({ type: 'timestamp' })//Tipo de dato fecha, fecha y hora
    fecha_registro!: Date

    @Column('decimal', {//Tipo de dato decimal, para valores con decimales
        precision: 10,
        scale: 2,
    })
    valor_compra!: number;

    @Column()
    direccion_ip!: string

    @Column()
    sistema_operativo!: string
}
