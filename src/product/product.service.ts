import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  getProducts() {
    return this.productRepository.getProducts();
  }

  getProductLimits(id: number) {
    return this.productRepository.getProductLimits(id);
  }
}