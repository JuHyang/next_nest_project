import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // ✅ 프론트엔드 주소만 허용
    credentials: true,               // 필요 시: 쿠키 포함 요청 허용
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
