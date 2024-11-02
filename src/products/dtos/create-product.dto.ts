import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
} from '@nestjs/class-validator';
import { IsPositive } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1024)
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsString()
  @MaxLength(255)
  currency: string; //todo type dto

  @IsNumber()
  @Max(9999)
  stock_quantity: number;

  @IsString()
  @MaxLength(255)
  category: string; // todo type dto

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Max(5)
  rating: number;

  @IsArray()
  images: [{ url: string; alt_text: string }]; // todo dto
}
