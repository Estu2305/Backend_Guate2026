import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
import { Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
export declare class UbicacionService {
    private ubicacionesRepository;
    constructor(ubicacionesRepository: Repository<Ubicacion>);
    create(createUbicacionDto: CreateUbicacionDto): Promise<CreateUbicacionDto & Ubicacion>;
    findAll(): Promise<Ubicacion[]>;
    findOne(id: number): Promise<Ubicacion | null>;
    update(id: number, updateUbicacionDto: UpdateUbicacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
