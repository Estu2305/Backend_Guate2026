import { ActivosService } from './activos.service';
export declare class ActivosController {
    private readonly usuariosService;
    constructor(usuariosService: ActivosService);
    findAll(): Promise<import("./entities/activos.entity").Activos[]>;
}
