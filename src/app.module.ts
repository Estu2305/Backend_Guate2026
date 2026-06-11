import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';
import { ReportesModule } from './reportes/reportes.module';
import { ActivosModule } from './activos/activos.module';
import { AsignacionModule } from './asignacion/asignacion.module';
import { LicenciaModule } from './licencia/licencia.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { LicenciasAsignadasModule } from './carga/licencias/licencias-asignadas/licencias-asignadas.module';
import { MantenimientosCargaModule } from './carga/mantenimientos-carga/mantenimientos-carga.module';

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
    UsuarioModule,

    RolesModule,

    AuthModule,

    DashboardModule,

    CategoriasModule,

    MantenimientosModule,

    ReportesModule,

    ActivosModule,

    AsignacionModule,

    LicenciaModule,

    UbicacionModule,

    LicenciasAsignadasModule,

    MantenimientosCargaModule
  ],
})
export class AppModule {
  
}