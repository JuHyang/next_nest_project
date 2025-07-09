import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  async findAll() {
    return this.productRepository.findAll();
  }

  async findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(updateProductDto);
  }

  async remove(id: number) {
    return this.productRepository.remove(id);
  }
}
