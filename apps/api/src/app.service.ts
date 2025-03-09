import { Inject, Injectable } from '@nestjs/common';
import type { CreateUserRequestDto } from './create-user-request.dto';
import type { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {

  private readonly users: any[] = [];

  constructor(@Inject('COMMUNICATION') private readonly communicationClient: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(user: CreateUserRequestDto) {
    this.users.push(user);
    this.communicationClient.emit('user_created', new CreateUserEvent(user.email));
    return user;
  }
}
