import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/todos')
  getAllTodo() {
    return this.appService.getAllTodo();
  }

  @Post('/todos')
  createTodo(@Body() body: { name: string }) {
    return this.appService.createTodo(body.name);
  }
}
