import { Injectable } from '@nestjs/common';

@Injectable()
export class ChannelRepository {
  getChannels() {
    return [
      { id: 1, name: 'ContactCenter' },
      { id: 2, name: 'APP' },
    ];
  }
}