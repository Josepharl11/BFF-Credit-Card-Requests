import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  getProducts() {
    return [
      { id: 1, name: 'Mastercard Standard' },
      { id: 2, name: 'Visa Gold' },
    ];
  }

  getProductLimits(id: number) {
    return {
      minLimitDop: 1,
      maxLimitDop: 1,
      minLimitUSD: 1,
      maxLimitUSD: 1,
    };
  }
}