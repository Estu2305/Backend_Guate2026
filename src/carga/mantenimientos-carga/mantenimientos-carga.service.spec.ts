import { Test, TestingModule } from '@nestjs/testing';
import { MantenimientosCargaService } from './mantenimientos-carga.service';

describe('MantenimientosCargaService', () => {
  let service: MantenimientosCargaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MantenimientosCargaService],
    }).compile();

    service = module.get<MantenimientosCargaService>(MantenimientosCargaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
