
// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { Item } from './items/item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  // Cambia esto si tu base de datos está en otro host
      port: 5433,         // Puerto por defecto de PostgreSQL
      username: 'postgres',  // Reemplaza con tu usuario de PostgreSQL
      password: '1004',  // Reemplaza con tu contraseña de PostgreSQL
      database: 'computadoras',  // Reemplaza con el nombre de tu base de datos
      entities: [Item],
      synchronize: true,
    }),
    ItemsModule,
  ],
})
export class AppModule {}