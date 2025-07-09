import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return {
      message: 'Product created successfully',
      product: await this.productService.create(createProductDto),
    };
  }

  @Get()
  async findAll() {
    return {
      message: 'Products retrieved successfully',
      products: await this.productService.findAll(),
    };
  }

  @Get(':id')
  async asyncfindOne(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'Product retrieved successfully',
      product: await this.productService.findOne(id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return {
      message: 'Product updated successfully',
      product: await this.productService.update(id, updateProductDto),
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'Product removed successfully',
      product: await this.productService.remove(+id),
    };
  }
}
