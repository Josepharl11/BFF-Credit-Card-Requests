import { Injectable } from '@nestjs/common';
import { DocumentTypeRepository } from './document-type.repository';

@Injectable()
export class DocumentTypeService {
  constructor(private readonly documentTypeRepository: DocumentTypeRepository) {}

  getDocumentTypes() {
    return this.documentTypeRepository.getDocumentTypes();
  }
}