import { Test, TestingModule } from '@nestjs/testing';
import { UbicacionesCargaService } from './ubicaciones-carga.service';

describe('UbicacionesCargaService', () => {
  let service: UbicacionesCargaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UbicacionesCargaService],
    }).compile();

    service = module.get<UbicacionesCargaService>(UbicacionesCargaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
