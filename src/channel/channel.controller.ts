import { Controller, Get } from '@nestjs/common';
import { ChannelService } from './channel.service';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  getChannels() {
    return this.channelService.getChannels();
  }
}