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
  ],
})
export class AppModule {
  
}