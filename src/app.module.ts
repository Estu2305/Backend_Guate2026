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
import { ActivosCargaModule } from './carga/activos-carga/activos-carga.module';
import { UsuariosCargaModule } from './carga/usuarios-carga/usuarios-carga.module';
import { UbicacionesCargaModule } from './carga/ubicaciones-carga/ubicaciones-carga.module';
import { AsignacionesCargaModule } from './carga/asignaciones-carga/asignaciones-carga.module';
import { LicenciasAsignadasCargaModule } from './carga/licencias-asignadas-carga/licencias-asignadas-carga.module';

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

    MantenimientosCargaModule,

    ActivosCargaModule,

    UsuariosCargaModule,

    UbicacionesCargaModule,

    AsignacionesCargaModule,

    LicenciasAsignadasCargaModule
  ],
})
export class AppModule {
  
}