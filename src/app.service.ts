import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService){};
  getEnvHello(): string {
    return this.configService.get('HELLO');
  }
}
