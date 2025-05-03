import { Module } from '@nestjs/common';
import { DocumentTypeController } from './document-type.controller';
import { DocumentTypeService } from './document-type.service';
import { DocumentTypeRepository } from './document-type.repository';

@Module({
    controllers: [DocumentTypeController],
    providers: [DocumentTypeService, DocumentTypeRepository],
})
export class DocumentTypeModule {}
