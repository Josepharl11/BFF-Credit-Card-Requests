import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerRepository {
  getCustomer(documenttype: string, documentnumber: string) {
    return { name: '' };
  }
}