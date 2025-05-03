import { Injectable } from '@nestjs/common';
import { ChannelRepository } from './channel.repository';

@Injectable()
export class ChannelService {
  constructor(private readonly channelRepository: ChannelRepository) {}

  getChannels() {
    return this.channelRepository.getChannels();
  }
}