import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosCargaService } from './usuarios-carga.service';

describe('UsuariosCargaService', () => {
  let service: UsuariosCargaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosCargaService],
    }).compile();

    service = module.get<UsuariosCargaService>(UsuariosCargaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
