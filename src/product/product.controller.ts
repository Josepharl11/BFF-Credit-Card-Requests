import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id/limits')
  getProductLimits(@Param('id') id: string) {
    return this.productService.getProductLimits(parseInt(id));
  }
}