import { Body, Inject, Injectable, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { CreateAuctionCommand } from 'src/commands/create-auction.command';
import { AuctionDto } from 'src/dto/AuctionDto';

@Injectable()
export class AppService {

  constructor(private readonly _commandBus: CommandBus) { }


  async createAuction( auctionDto: AuctionDto ) : Promise<void> {

    await this._commandBus.execute(new CreateAuctionCommand(
      auctionDto.productName,
      auctionDto.minBid,
      auctionDto.endDate,
      auctionDto.sellerId
    ));

  }

}
