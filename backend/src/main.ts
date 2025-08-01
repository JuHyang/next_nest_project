import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // ✅ 프론트엔드 주소만 허용
    credentials: true, // 필요 시: 쿠키 포함 요청 허용
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  });

  await app.listen(process.env.PORT ?? 3002);
}

bootstrap();
