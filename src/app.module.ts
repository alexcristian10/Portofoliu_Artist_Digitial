// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; // Importă AppController

@Module({
  imports: [],
  controllers: [AppController], // Folosește AppController aici
  providers: [],
})
export class AppModule {}
