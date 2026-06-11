import { LicenciaService } from './licencia.service';
import { CreateLicenciaDto } from './dto/create-licencia.dto';
import { UpdateLicenciaDto } from './dto/update-licencia.dto';
export declare class LicenciaController {
    private readonly licenciaService;
    constructor(licenciaService: LicenciaService);
    create(createLicenciaDto: CreateLicenciaDto): Promise<CreateLicenciaDto & import("./entities/licencia.entity").Licencia>;
    findAll(): Promise<import("./entities/licencia.entity").Licencia[]>;
    findOne(id: string): Promise<import("./entities/licencia.entity").Licencia | null>;
    update(id: string, updateLicenciaDto: UpdateLicenciaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    findClosest(fecha: string): Promise<import("./entities/licencia.entity").Licencia[]>;
}
