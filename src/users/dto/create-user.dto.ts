import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength, isAlphanumeric } from "class-validator";

export class CreateUserDto{
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(10)
  name:string;

  @ApiProperty({required:false})
  age?:Number;
}