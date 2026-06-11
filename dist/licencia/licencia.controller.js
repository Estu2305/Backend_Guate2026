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
exports.LicenciaController = void 0;
const common_1 = require("@nestjs/common");
const licencia_service_1 = require("./licencia.service");
const create_licencia_dto_1 = require("./dto/create-licencia.dto");
const update_licencia_dto_1 = require("./dto/update-licencia.dto");
let LicenciaController = class LicenciaController {
    licenciaService;
    constructor(licenciaService) {
        this.licenciaService = licenciaService;
    }
    create(createLicenciaDto) {
        return this.licenciaService.create(createLicenciaDto);
    }
    findAll() {
        return this.licenciaService.findAll();
    }
    findOne(id) {
        return this.licenciaService.findOne(+id);
    }
    update(id, updateLicenciaDto) {
        return this.licenciaService.update(+id, updateLicenciaDto);
    }
    remove(id) {
        return this.licenciaService.remove(+id);
    }
    findClosest(fecha) {
        return this.licenciaService.findClosest(fecha);
    }
};
exports.LicenciaController = LicenciaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_licencia_dto_1.CreateLicenciaDto]),
    __metadata("design:returntype", void 0)
], LicenciaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LicenciaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LicenciaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_licencia_dto_1.UpdateLicenciaDto]),
    __metadata("design:returntype", void 0)
], LicenciaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LicenciaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('proximas/:fecha'),
    __param(0, (0, common_1.Param)('fecha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LicenciaController.prototype, "findClosest", null);
exports.LicenciaController = LicenciaController = __decorate([
    (0, common_1.Controller)('licencia'),
    __metadata("design:paramtypes", [licencia_service_1.LicenciaService])
], LicenciaController);
//# sourceMappingURL=licencia.controller.js.map