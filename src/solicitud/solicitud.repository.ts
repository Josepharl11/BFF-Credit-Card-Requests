import { Injectable } from '@nestjs/common';
import { FormModel } from '../models/formModel';

@Injectable()
export class SolicitudRepository {
  async create(formModel: FormModel) {
    return {
      message: 'Solicitud procesada correctamente',
      data: formModel
    }
  }

  async createExcel(formModel: FormModel[]) {
    return {
      message: 'Solicitudes procesadas correctamente',
      count: formModel.length,
      formModel
    };
  }
}