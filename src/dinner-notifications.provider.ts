import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const DinnerNotificationsProvider = {
  provide: 'DINNER_NOTIFICATION_SERVICE',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.getOrThrow('RABBITMQ_HOST')],
        noAck: false,
        queue: 'dinner_notifications',
        queueOptions: {
          durable: true,
        },
      },
    });
  },
} satisfies Provider;
