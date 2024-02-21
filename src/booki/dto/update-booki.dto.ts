import { PartialType } from '@nestjs/swagger';
import { CreateBookiDto } from './create-booki.dto';

export class UpdateBookiDto extends PartialType(CreateBookiDto) {}
