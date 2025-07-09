import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductRepository {
  private cache: Product[] = [];

  async save(product: CreateProductDto): Promise<Product> {
    // Simulate saving to a database
    const newProduct = Product.fromDto(product, this.cache.length + 1);
    this.cache.push(newProduct);
    return Promise.resolve(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return Promise.resolve(this.cache);
  }

  async findOne(id: number): Promise<Product> {
    const product = this.cache.find((p) => p.id === id);

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    return Promise.resolve(product);
  }

  async update(updateProductDto: UpdateProductDto): Promise<Product | null> {
    const index = this.cache.findIndex((p) => p.id === updateProductDto.id);
    if (index !== -1) {
      console.log(11);
      const newProduct: Product = {
        id: updateProductDto.id,
        name: updateProductDto.name!,
        price: updateProductDto.price!,
      };

      this.cache[index] = { ...this.cache[index], ...newProduct };
      return Promise.resolve(this.cache[index]);
    }
    console.log(22);
    return Promise.resolve(null);
  }

  async remove(id: number): Promise<void> {
    this.cache = this.cache.filter((p) => p.id !== id);
    return Promise.resolve();
  }
}
