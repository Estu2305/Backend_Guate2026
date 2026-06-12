import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionesCargaService } from './asignaciones-carga.service';

describe('AsignacionesCargaService', () => {
  let service: AsignacionesCargaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignacionesCargaService],
    }).compile();

    service = module.get<AsignacionesCargaService>(AsignacionesCargaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
