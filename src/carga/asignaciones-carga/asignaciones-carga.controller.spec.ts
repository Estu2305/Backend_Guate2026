import { Test, TestingModule } from '@nestjs/testing';
import { AsignacionesCargaController } from './asignaciones-carga.controller';
import { AsignacionesCargaService } from './asignaciones-carga.service';

describe('AsignacionesCargaController', () => {
  let controller: AsignacionesCargaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignacionesCargaController],
      providers: [AsignacionesCargaService],
    }).compile();

    controller = module.get<AsignacionesCargaController>(AsignacionesCargaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
