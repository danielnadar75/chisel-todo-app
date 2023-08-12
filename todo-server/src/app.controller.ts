import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { pbkdf2Sync } from 'crypto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  test() {
    const password = 'helo@123';
    const SECRET = 'secret...13w223';

    const I = pbkdf2Sync(password, SECRET, 1000, 64, 'sha256').toString('hex');
    const O = pbkdf2Sync(password, SECRET, 1000, 64, 'sha256').toString('hex');

    return {
      I,
      O,
    };
  }
}
