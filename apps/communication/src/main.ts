import { NestFactory } from '@nestjs/core';
import { CommunicationModule } from './communication.module';
import { Transport, type MicroserviceOptions } from '@nestjs/microservices';
        
async function bootstrap() {
 const redisConfigs = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    db: parseInt(process.env.REDIS_DB, 10) || 0,
    username: process.env.REDIS_USERNAME || 'default',
    password: process.env.REDIS_PASSWORD || 'secretpassword',
  };

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CommunicationModule,
    {
      transport: Transport.REDIS,
      options: {
        host: redisConfigs.host,
        port: redisConfigs.port,
        db: redisConfigs.db,
        username: redisConfigs.username,
        password: redisConfigs.password,
      },
    },
  );
  await app.listen();
  console.log('Communication microservice is listening');
}
bootstrap();


