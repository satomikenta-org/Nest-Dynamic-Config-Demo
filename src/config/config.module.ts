import { Module, DynamicModule, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

@Global() // to be GlobalModule
@Module({})
export class ConfigModule {
  static register(options): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: "CONFIG_OPTION",
          useValue: options
        },
        ConfigService
      ],
      exports: [ConfigService],
    }
  }
}
