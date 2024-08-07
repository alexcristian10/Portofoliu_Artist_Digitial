// src/app.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('endpoint')
  getData(): string {
    return 'Data from GET endpoint';
  }

  @Post('submit')
  postData(@Body() data: any): string {
    console.log(data);
    return 'Data received';
  }
}
