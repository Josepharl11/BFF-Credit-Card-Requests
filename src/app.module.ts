import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelModule } from './channel/channel.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { SolicitudModule } from './solicitud/solicitud.module';

@Module({
  imports: [ChannelModule, DocumentTypeModule, CustomerModule, ProductModule, SolicitudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
