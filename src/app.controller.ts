import { Controller, Get, HttpCode, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Redirect('/translator')
  @HttpCode(301)
  index(): void {}
}
