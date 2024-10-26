import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // 3. limit/sort

  // 7. product categories get
  // 8. get product per category

  @Get()
  findAll() {
    return [{ id: 1 }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return [{ id }];
  }

  @Post()
  createOne(@Body() body: any) {
    return body;
  }

  @Put()
  updateOne(@Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return { id: 'id-to-delte: ' + id };
  }
}
