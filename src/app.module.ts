import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { BookiModule } from './booki/booki.module';

@Module({
  imports: [UserModule, BookiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
