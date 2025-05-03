import { Module } from '@nestjs/common';
import { SolicitudController } from './solicitud.controller';
import { SolicitudService } from './solicitud.service';
import { SolicitudRepository } from './solicitud.repository';

@Module({
  controllers: [SolicitudController],
  providers: [SolicitudService, SolicitudRepository],
})
export class SolicitudModule {}