import { Injectable } from '@nestjs/common';
import type { CreateUserEvent } from './create-user.event';

@Injectable()
export class CommunicationService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - COMMUNICATION:', data);
    // TODO: Send an email to the user
  }
}
