import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { Repository } from 'typeorm';
import { Asignacion } from './entities/asignacion.entity';
export declare class AsignacionService {
    private asignacionesRepository;
    constructor(asignacionesRepository: Repository<Asignacion>);
    create(createAsignacionDto: CreateAsignacionDto): Promise<CreateAsignacionDto & Asignacion>;
    findAll(): Promise<Asignacion[]>;
    findOne(id: number): Promise<Asignacion | null>;
    update(id: number, updateAsignacionDto: UpdateAsignacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<Asignacion>;
}
