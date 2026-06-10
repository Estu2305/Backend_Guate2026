import { GuiaService } from './guia.service';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
export declare class GuiaController {
    private readonly guiaService;
    constructor(guiaService: GuiaService);
    create(createGuiaDto: CreateGuiaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGuiaDto: UpdateGuiaDto): string;
    remove(id: string): string;
}
