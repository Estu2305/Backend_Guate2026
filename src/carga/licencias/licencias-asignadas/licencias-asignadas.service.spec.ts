import { Test, TestingModule } from '@nestjs/testing';
import { LicenciasAsignadasService } from './licencias-asignadas.service';

describe('LicenciasAsignadasService', () => {
  let service: LicenciasAsignadasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicenciasAsignadasService],
    }).compile();

    service = module.get<LicenciasAsignadasService>(LicenciasAsignadasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
