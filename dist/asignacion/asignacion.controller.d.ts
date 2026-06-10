import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
export declare class AsignacionController {
    private readonly asignacionService;
    constructor(asignacionService: AsignacionService);
    create(createAsignacionDto: CreateAsignacionDto): Promise<CreateAsignacionDto & import("./entities/asignacion.entity").Asignacion>;
    findAll(): Promise<import("./entities/asignacion.entity").Asignacion[]>;
    findOne(id: string): Promise<import("./entities/asignacion.entity").Asignacion | null>;
    update(id: string, updateAsignacionDto: UpdateAsignacionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("./entities/asignacion.entity").Asignacion>;
}
