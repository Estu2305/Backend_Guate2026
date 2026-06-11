import { Test, TestingModule } from '@nestjs/testing';
import { LicenciasAsignadasController } from './licencias-asignadas.controller';

describe('LicenciasAsignadasController', () => {
  let controller: LicenciasAsignadasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicenciasAsignadasController],
    }).compile();

    controller = module.get<LicenciasAsignadasController>(LicenciasAsignadasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
