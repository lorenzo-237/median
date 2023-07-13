import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
