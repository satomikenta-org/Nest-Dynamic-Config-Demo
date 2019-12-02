import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService){} // We can inject ConfigService Cuz ConfigModule is @Global.
  getAll(): any[] {
    console.log("ConfigService===========", this.configService.get('HELLO'));
    return [{ name: "satomi", phone_number: "000000000" },{ name: "kenta", phone_number: "000000001" }];
  }
}
