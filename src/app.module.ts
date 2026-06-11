import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivosModule } from './activos/activos.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { AsignacionModule } from './asignacion/asignacion.module';
import { LicenciaModule } from './licencia/licencia.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      ssl: {
        rejectUnauthorized: false,
      },
      autoLoadEntities: true,
      synchronize: false,
    }),

    ActivosModule,

    UbicacionModule,

    AsignacionModule,

    LicenciaModule,
  ],
})
export class AppModule {
  
}