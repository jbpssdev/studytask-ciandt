import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  //validationPipe adicionado!
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

//precisando aprimorar, temos o DTO, que é, usando uma analogia simples, a lista com os nomes autorizados (titulo e concluida). O whitelist: true já se comporta falando com o fiscal (ValidationPipe) "Qualquer propriedade que chegar no JSON, e não estiver nessa lista, corte fora antes de entregar para o Controller."

//whitelist: true é uma opção de configuração do próprio ValidationPipe do NestJS

//{...} objeto de configuração padrão do JavaScript/TypeScript!