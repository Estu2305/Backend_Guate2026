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
exports.UbicacionController = void 0;
const common_1 = require("@nestjs/common");
const ubicacion_service_1 = require("./ubicacion.service");
const create_ubicacion_dto_1 = require("./dto/create-ubicacion.dto");
const update_ubicacion_dto_1 = require("./dto/update-ubicacion.dto");
let UbicacionController = class UbicacionController {
    ubicacionService;
    constructor(ubicacionService) {
        this.ubicacionService = ubicacionService;
    }
    create(createUbicacionDto) {
        return this.ubicacionService.create(createUbicacionDto);
    }
    findAll() {
        return this.ubicacionService.findAll();
    }
    findOne(id) {
        return this.ubicacionService.findOne(+id);
    }
    update(id, updateUbicacionDto) {
        return this.ubicacionService.update(+id, updateUbicacionDto);
    }
    remove(id) {
        return this.ubicacionService.remove(+id);
    }
};
exports.UbicacionController = UbicacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ubicacion_dto_1.CreateUbicacionDto]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ubicacion_dto_1.UpdateUbicacionDto]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "remove", null);
exports.UbicacionController = UbicacionController = __decorate([
    (0, common_1.Controller)('ubicacion'),
    __metadata("design:paramtypes", [ubicacion_service_1.UbicacionService])
], UbicacionController);
//# sourceMappingURL=ubicacion.controller.js.map