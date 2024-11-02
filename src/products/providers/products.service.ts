import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dtos';

@Injectable()
export class ProductsService {
  constructor() {}

  public findAll() {
    return [];
  }

  public createOne(createProductDto: CreateProductDto) {
    return { product: createProductDto, action: 'Product has been created!' };
  }

  public updateOne(id: number, updateProductDto: UpdateProductDto) {
    console.log(id);
    return { product: updateProductDto, action: 'Product has been created!' };
  }

  public deleteOne(id: number) {
    return { id, action: 'Product has been deleted!' };
  }
}
