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
exports.ActivosController = void 0;
const common_1 = require("@nestjs/common");
const activos_service_1 = require("./activos.service");
const create_activo_dto_1 = require("./dto/create-activo.dto");
const update_activo_dto_1 = require("./dto/update-activo.dto");
let ActivosController = class ActivosController {
    activosService;
    constructor(activosService) {
        this.activosService = activosService;
    }
    create(createActivoDto) {
        return this.activosService.create(createActivoDto);
    }
    findAll() {
        return this.activosService.findAll();
    }
    findOne(id) {
        return this.activosService.findOne(+id);
    }
    update(id, updateActivoDto) {
        return this.activosService.update(+id, updateActivoDto);
    }
    remove(id) {
        return this.activosService.remove(+id);
    }
};
exports.ActivosController = ActivosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_activo_dto_1.CreateActivoDto]),
    __metadata("design:returntype", void 0)
], ActivosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActivosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActivosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_activo_dto_1.UpdateActivoDto]),
    __metadata("design:returntype", void 0)
], ActivosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActivosController.prototype, "remove", null);
exports.ActivosController = ActivosController = __decorate([
    (0, common_1.Controller)('activos'),
    __metadata("design:paramtypes", [activos_service_1.ActivosService])
], ActivosController);
//# sourceMappingURL=activos.controller.js.map