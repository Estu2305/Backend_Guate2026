import { Test, TestingModule } from '@nestjs/testing';
import { ActivosCargaService } from './activos-carga.service';

describe('ActivosCargaService', () => {
  let service: ActivosCargaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivosCargaService],
    }).compile();

    service = module.get<ActivosCargaService>(ActivosCargaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
