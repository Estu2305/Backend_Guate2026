import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
import { Activo } from './entities/activo.entity';
import { Repository } from 'typeorm';
export declare class ActivosService {
    private activosRepository;
    constructor(activosRepository: Repository<Activo>);
    create(createActivoDto: CreateActivoDto): Promise<CreateActivoDto & Activo>;
    findAll(): Promise<Activo[]>;
    findOne(id: number): Promise<Activo | null>;
    update(id: number, updateActivoDto: UpdateActivoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
