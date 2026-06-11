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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Licencia = void 0;
const typeorm_1 = require("typeorm");
let Licencia = class Licencia {
    id;
    software;
    version;
    proveedor;
    cantidad_licencias;
    tipo_licencia;
    fecha_adquisicion;
    fecha_vencimiento;
    costo;
    notas;
    clave_producto;
};
exports.Licencia = Licencia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Licencia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Licencia.prototype, "software", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Licencia.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Licencia.prototype, "proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Licencia.prototype, "cantidad_licencias", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Licencia.prototype, "tipo_licencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Licencia.prototype, "fecha_adquisicion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Licencia.prototype, "fecha_vencimiento", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Licencia.prototype, "costo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Licencia.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Licencia.prototype, "clave_producto", void 0);
exports.Licencia = Licencia = __decorate([
    (0, typeorm_1.Entity)('licencias')
], Licencia);
//# sourceMappingURL=licencia.entity.js.map