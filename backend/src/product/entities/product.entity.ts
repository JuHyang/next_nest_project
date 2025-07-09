import { CreateProductDto } from '../dto/create-product.dto';

export class Product {
  id: number;
  name: string;
  price: number;
  // TODO : 국가별 가격 필드 필요

  static fromDto(dto: CreateProductDto, id: number): Product {
    const product = new Product();
    product.id = id;
    product.name = dto.name;
    product.price = dto.price;
    return product;
  }
}
