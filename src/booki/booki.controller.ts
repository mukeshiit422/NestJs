import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookiService } from './booki.service';
import { CreateBookiDto } from './dto/create-booki.dto';
import { UpdateBookiDto } from './dto/update-booki.dto';

@Controller('booki')
export class BookiController {
  constructor(private readonly bookiService: BookiService) {}

  @Post()
  create(@Body() createBookiDto: CreateBookiDto) {
    return this.bookiService.create(createBookiDto);
  }

  @Get()
  findAll() {
    return this.bookiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookiDto: UpdateBookiDto) {
    return this.bookiService.update(+id, updateBookiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookiService.remove(+id);
  }
}
