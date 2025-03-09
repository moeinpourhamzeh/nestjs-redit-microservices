import { Controller, Get } from '@nestjs/common';
import { CommunicationService } from './communication.service';
import { EventPattern } from '@nestjs/microservices';
import type { CreateUserEvent } from './create-user.event';

@Controller()
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Get()
  getHello(): string {
    return this.communicationService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    console.log('User created:', data);
    this.communicationService.handleUserCreated(data);
  }
}
