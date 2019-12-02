import { Injectable, Inject } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {

  private readonly envConfig: any;

  constructor(@Inject("CONFIG_OPTION") private options: any) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', this.options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
