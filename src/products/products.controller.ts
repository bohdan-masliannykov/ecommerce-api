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
import { CreateProductDto, UpdateProductDto } from './dtos';
import { ProductsService } from './providers/products.service';

@Controller('products')
export class ProductsController {
  constructor(readonly productsService: ProductsService) {}

  //TODO handle sorting and quering
  @Get()
  findaAll() {
    return this.productsService.findAll();
  }

  @Post()
  createOne(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createOne(createProductDto);
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateOne(id, updateProductDto);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteOne(id);
  }
}
