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
exports.AsignacionController = void 0;
const common_1 = require("@nestjs/common");
const asignacion_service_1 = require("./asignacion.service");
const create_asignacion_dto_1 = require("./dto/create-asignacion.dto");
const update_asignacion_dto_1 = require("./dto/update-asignacion.dto");
let AsignacionController = class AsignacionController {
    asignacionService;
    constructor(asignacionService) {
        this.asignacionService = asignacionService;
    }
    create(createAsignacionDto) {
        return this.asignacionService.create(createAsignacionDto);
    }
    findAll() {
        return this.asignacionService.findAll();
    }
    findOne(id) {
        return this.asignacionService.findOne(+id);
    }
    update(id, updateAsignacionDto) {
        return this.asignacionService.update(+id, updateAsignacionDto);
    }
    remove(id) {
        return this.asignacionService.remove(+id);
    }
};
exports.AsignacionController = AsignacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asignacion_dto_1.CreateAsignacionDto]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asignacion_dto_1.UpdateAsignacionDto]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AsignacionController.prototype, "remove", null);
exports.AsignacionController = AsignacionController = __decorate([
    (0, common_1.Controller)('asignacion'),
    __metadata("design:paramtypes", [asignacion_service_1.AsignacionService])
], AsignacionController);
//# sourceMappingURL=asignacion.controller.js.map