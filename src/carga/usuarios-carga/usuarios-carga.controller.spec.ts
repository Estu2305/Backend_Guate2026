import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosCargaController } from './usuarios-carga.controller';
import { UsuariosCargaService } from './usuarios-carga.service';

describe('UsuariosCargaController', () => {
  let controller: UsuariosCargaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosCargaController],
      providers: [UsuariosCargaService],
    }).compile();

    controller = module.get<UsuariosCargaController>(UsuariosCargaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
