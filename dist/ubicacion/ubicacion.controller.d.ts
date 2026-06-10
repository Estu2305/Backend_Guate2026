import { UbicacionService } from './ubicacion.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
export declare class UbicacionController {
    private readonly ubicacionService;
    constructor(ubicacionService: UbicacionService);
    create(createUbicacionDto: CreateUbicacionDto): Promise<CreateUbicacionDto & import("./entities/ubicacion.entity").Ubicacion>;
    findAll(): Promise<import("./entities/ubicacion.entity").Ubicacion[]>;
    findOne(id: string): Promise<import("./entities/ubicacion.entity").Ubicacion | null>;
    update(id: string, updateUbicacionDto: UpdateUbicacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
