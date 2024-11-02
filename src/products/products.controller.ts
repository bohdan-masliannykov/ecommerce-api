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

  @Get(':id?')
  findProducts() {
    //todo create dto for queryparams
    return this.productsService.findAll();
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createOne(createProductDto);
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateOne(id, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteOne(id);
  }
}
