import { Controller, Get, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomer(
    @Query('documenttype') documenttype: string,
    @Query('documentnumber') documentnumber: string,
  ) {
    return this.customerService.getCustomer(documenttype, documentnumber);
  }
}