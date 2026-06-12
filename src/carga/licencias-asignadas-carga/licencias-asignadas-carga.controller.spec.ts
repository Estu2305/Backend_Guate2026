import { Test, TestingModule } from '@nestjs/testing';
import { LicenciasAsignadasCargaController } from './licencias-asignadas-carga.controller';
import { LicenciasAsignadasCargaService } from './licencias-asignadas-carga.service';

describe('LicenciasAsignadasCargaController', () => {
  let controller: LicenciasAsignadasCargaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicenciasAsignadasCargaController],
      providers: [LicenciasAsignadasCargaService],
    }).compile();

    controller = module.get<LicenciasAsignadasCargaController>(LicenciasAsignadasCargaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
