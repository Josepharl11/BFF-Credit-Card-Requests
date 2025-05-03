import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentTypeRepository {
  getDocumentTypes() {
    return [
      { id: 1, name: 'Cedula' },
      { id: 2, name: 'Pasaporte' },
    ];
  }
}