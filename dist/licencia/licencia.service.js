"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenciaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const licencia_entity_1 = require("./entities/licencia.entity");
let LicenciaService = class LicenciaService {
    licenciaRepository;
    constructor(licenciaRepository) {
        this.licenciaRepository = licenciaRepository;
    }
    create(createLicenciaDto) {
        return this.licenciaRepository.save(createLicenciaDto);
    }
    findAll() {
        return this.licenciaRepository.find();
    }
    findOne(id) {
        return this.licenciaRepository.findOneBy({ id });
    }
    update(id, updateLicenciaDto) {
        return this.licenciaRepository.update(id, updateLicenciaDto);
    }
    remove(id) {
        return this.licenciaRepository.delete(id);
    }
    async findClosest(fecha) {
        return await this.licenciaRepository
            .createQueryBuilder('licencia')
            .where('licencia.fecha_vencimiento >= :fecha', { fecha })
            .orderBy('licencia.fecha_vencimiento', 'ASC')
            .limit(10)
            .getMany();
    }
};
exports.LicenciaService = LicenciaService;
exports.LicenciaService = LicenciaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(licencia_entity_1.Licencia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LicenciaService);
//# sourceMappingURL=licencia.service.js.map