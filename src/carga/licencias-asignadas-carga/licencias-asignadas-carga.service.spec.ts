import { Test, TestingModule } from '@nestjs/testing';
import { LicenciasAsignadasCargaService } from './licencias-asignadas-carga.service';

describe('LicenciasAsignadasCargaService', () => {
  let service: LicenciasAsignadasCargaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicenciasAsignadasCargaService],
    }).compile();

    service = module.get<LicenciasAsignadasCargaService>(LicenciasAsignadasCargaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
