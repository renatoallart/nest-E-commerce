import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('Running at: localhost:3000/graphql');
  await app.listen(3000);
}
bootstrap();
