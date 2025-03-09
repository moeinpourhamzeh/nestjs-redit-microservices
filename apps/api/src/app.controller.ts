import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { CreateUserRequestDto } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() createUserRequest: CreateUserRequestDto) {
    return this.appService.createUser(createUserRequest);
  }
}
