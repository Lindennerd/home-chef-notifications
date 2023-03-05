import { Transport } from '@nestjs/microservices';
//! TODO: Add a way to specify the queue name
export const RmqOptions = (transport: Transport, connection: string) => ({
  transport: transport,
  options: {
    urls: [connection],
    noAck: true,
    queue: 'dinner_notifications',
    queueOptions: {
      durable: true,
    },
  },
});
