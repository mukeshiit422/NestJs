import { Test, TestingModule } from '@nestjs/testing';
import { BookiController } from './booki.controller';
import { BookiService } from './booki.service';

describe('BookiController', () => {
  let controller: BookiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookiController],
      providers: [BookiService],
    }).compile();

    controller = module.get<BookiController>(BookiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
