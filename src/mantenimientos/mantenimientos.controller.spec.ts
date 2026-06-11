import { Test, TestingModule } from '@nestjs/testing';
import { MantenimientosController } from './mantenimientos.controller';

describe('MantenimientosController', () => {
  let controller: MantenimientosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MantenimientosController],
    }).compile();

    controller = module.get<MantenimientosController>(MantenimientosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
