import { Controller, Get } from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';

@Controller('documenttype')
export class DocumentTypeController {
  constructor(private readonly documentTypeService: DocumentTypeService) {}

  @Get()
  getDocumentTypes() {
    return this.documentTypeService.getDocumentTypes();
  }
}