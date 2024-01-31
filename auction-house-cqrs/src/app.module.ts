import { Module } from '@nestjs/common';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CreateBidEvent } from './events/create-bid-event';
import { CreateBidEventHandler } from './events/handlers/create-bid.event.handler';
import { AuctionRepository } from './repositories/auction.repository';
import { CreateAuctionHandler } from './commands/handlers/create-auction.handler';
import { CreateBidHandler } from './commands/handlers/bid-create.handler';

export const CommandHandlers = [CreateBidHandler, CreateAuctionHandler];
export const EventHandlers =  [CreateBidEventHandler];


@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'MY_APP_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'my-app',
            brokers: ['localhost:9092']
          }
        },
      }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService,
    ...CommandHandlers,
    ...EventHandlers,
    AuctionRepository],
})
export class AppModule {}
