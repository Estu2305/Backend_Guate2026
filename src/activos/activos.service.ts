import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activos } from './entities/activos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivosService {
    constructor(
        @InjectRepository(Activos)
        private readonly activosRepository: Repository<Activos>,
    ) { }

    async findAll() {
        return this.activosRepository.find();
    }
}