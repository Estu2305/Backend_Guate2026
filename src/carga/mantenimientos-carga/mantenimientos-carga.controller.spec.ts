import { Test, TestingModule } from '@nestjs/testing';
import { MantenimientosCargaController } from './mantenimientos-carga.controller';
import { MantenimientosCargaService } from './mantenimientos-carga.service';

describe('MantenimientosCargaController', () => {
  let controller: MantenimientosCargaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MantenimientosCargaController],
      providers: [MantenimientosCargaService],
    }).compile();

    controller = module.get<MantenimientosCargaController>(MantenimientosCargaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
