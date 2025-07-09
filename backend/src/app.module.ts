import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PostModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
