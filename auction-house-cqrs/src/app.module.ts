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
import { DatabaseModule } from './db/database.module';
import { AuctionProviders } from './db/entities/auction/auction.providers';
import { AuctionServices } from './services/auction/auction.service';
import { ConfigModule } from '@nestjs/config';

export const CommandHandlers = [CreateBidHandler, CreateAuctionHandler];
export const EventHandlers =  [CreateBidEventHandler];


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    CqrsModule,
    // KAKFA
    // ClientsModule.register([
    //   {
    //     name: 'MY_APP_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'my-app',
    //         brokers: ['localhost:9092']
    //       }
    //     },
    //   }
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService,
    ...CommandHandlers,
    ...EventHandlers,
    AuctionRepository,
    ...AuctionProviders,
    AuctionServices],
})
export class AppModule {}
