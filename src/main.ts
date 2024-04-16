import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:6000', //the ip address of the frontend server
    ],
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  });

  await app.listen(4000);
}
bootstrap();
