import { Test, TestingModule } from '@nestjs/testing';
import { UbicacionesCargaController } from './ubicaciones-carga.controller';
import { UbicacionesCargaService } from './ubicaciones-carga.service';

describe('UbicacionesCargaController', () => {
  let controller: UbicacionesCargaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UbicacionesCargaController],
      providers: [UbicacionesCargaService],
    }).compile();

    controller = module.get<UbicacionesCargaController>(UbicacionesCargaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
