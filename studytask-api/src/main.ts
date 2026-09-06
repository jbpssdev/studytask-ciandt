import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  //validationPipe adicionado!
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 1989);
}
bootstrap();
