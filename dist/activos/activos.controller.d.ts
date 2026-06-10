import { ActivosService } from './activos.service';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
export declare class ActivosController {
    private readonly activosService;
    constructor(activosService: ActivosService);
    create(createActivoDto: CreateActivoDto): Promise<CreateActivoDto & import("./entities/activo.entity").Activo>;
    findAll(): Promise<import("./entities/activo.entity").Activo[]>;
    findOne(id: string): Promise<import("./entities/activo.entity").Activo | null>;
    update(id: string, updateActivoDto: UpdateActivoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
