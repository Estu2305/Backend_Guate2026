import { Activos } from './entities/activos.entity';
import { Repository } from 'typeorm';
export declare class ActivosService {
    private readonly activosRepository;
    constructor(activosRepository: Repository<Activos>);
    findAll(): Promise<Activos[]>;
}
