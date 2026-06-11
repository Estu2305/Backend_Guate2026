import { Test, TestingModule } from '@nestjs/testing';
import { ActivosCargaController } from './activos-carga.controller';
import { ActivosCargaService } from './activos-carga.service';

describe('ActivosCargaController', () => {
  let controller: ActivosCargaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivosCargaController],
      providers: [ActivosCargaService],
    }).compile();

    controller = module.get<ActivosCargaController>(ActivosCargaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
