import { Module } from '@nestjs/common';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { ChannelRepository } from './channel.repository';

@Module({
    controllers: [ChannelController],
    providers: [ChannelService, ChannelRepository],
})

export class ChannelModule {}
