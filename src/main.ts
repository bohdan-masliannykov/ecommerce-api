import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // an entry point protecting all endpoint from recieving incorrect data
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // filters properties that shouldn`t be recieved
      forbidNonWhitelisted: true, // throws an error on non whitelist fields
      transform: true, // enables auto transforming JS objects into dto`s through network
      // disableErrorMessages: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
