import { Injectable } from '@nestjs/common';
import { SolicitudRepository } from './solicitud.repository';
import { FormModel } from '../models/formModel';

@Injectable()
export class SolicitudService {
  constructor(private readonly solicitudRepository: SolicitudRepository) {}

  async create(formModel: FormModel) {
    return await this.solicitudRepository.create(formModel);
  }

  async createExcel(formModel: FormModel[]) {
    return await this.solicitudRepository.createExcel(formModel);
  }
}