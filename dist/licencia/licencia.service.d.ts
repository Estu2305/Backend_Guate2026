import { CreateLicenciaDto } from './dto/create-licencia.dto';
import { UpdateLicenciaDto } from './dto/update-licencia.dto';
import { Repository } from 'typeorm';
import { Licencia } from './entities/licencia.entity';
export declare class LicenciaService {
    private licenciaRepository;
    constructor(licenciaRepository: Repository<Licencia>);
    create(createLicenciaDto: CreateLicenciaDto): Promise<CreateLicenciaDto & Licencia>;
    findAll(): Promise<Licencia[]>;
    findOne(id: number): Promise<Licencia | null>;
    update(id: number, updateLicenciaDto: UpdateLicenciaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findClosest(fecha: string): Promise<Licencia[]>;
}
