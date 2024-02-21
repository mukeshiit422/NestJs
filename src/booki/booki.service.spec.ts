import { Test, TestingModule } from '@nestjs/testing';
import { BookiService } from './booki.service';

describe('BookiService', () => {
  let service: BookiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookiService],
    }).compile();

    service = module.get<BookiService>(BookiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
