import { Injectable } from '@nestjs/common';
import { CreateBookiDto } from './dto/create-booki.dto';
import { UpdateBookiDto } from './dto/update-booki.dto';

@Injectable()
export class BookiService {
  create(createBookiDto: CreateBookiDto) {
    return 'This action adds a new booki';
  }

  findAll() {
    return `This action returns all booki`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booki`;
  }

  update(id: number, updateBookiDto: UpdateBookiDto) {
    return `This action updates a #${id} booki`;
  }

  remove(id: number) {
    return `This action removes a #${id} booki`;
  }
}
