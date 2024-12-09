import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.NODE_ENV === 'development' ? 4000 : process.env.PORT || 8080;

  console.log(`Running in ${process.env.NODE_ENV} mode`);

  await app.listen(port);
}
bootstrap();
