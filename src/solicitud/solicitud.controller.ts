import { Controller, Post, Body, Get } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { FormModel } from '../models/formModel';

@Controller('solicitud')
export class SolicitudController {
  constructor(private readonly solicitudService: SolicitudService) {}

  @Post()
  async create(@Body() formModel: FormModel) {
    return await this.solicitudService.create(formModel);
  }

  @Post('excel')
  async createExcel(@Body() formModel: FormModel[]) {
    return await this.solicitudService.createExcel(formModel);
  }
}