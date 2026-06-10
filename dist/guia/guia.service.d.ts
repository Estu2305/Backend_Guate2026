import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
export declare class GuiaService {
    create(createGuiaDto: CreateGuiaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGuiaDto: UpdateGuiaDto): string;
    remove(id: number): string;
}
