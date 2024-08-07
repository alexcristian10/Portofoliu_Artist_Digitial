import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Permite cereri CORS de la toate sursele
  const port=3001;
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();