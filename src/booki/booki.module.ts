import { Module } from '@nestjs/common';
import { BookiService } from './booki.service';
import { BookiController } from './booki.controller';

@Module({
  controllers: [BookiController],
  providers: [BookiService],
})
export class BookiModule {}
