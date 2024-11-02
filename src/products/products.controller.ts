import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  findaAll() {
    return [];
  }

  @Post()
  createOne(@Body() createProductDto: CreateProductDto) {
    return { product: createProductDto, action: 'Product has been created!' };
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return { id, ...updateProductDto, action: 'Product has been update!' };
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return { id, action: 'Product has been deleted!' };
  }
}
