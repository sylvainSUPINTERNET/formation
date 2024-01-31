import { Body, Inject, Injectable, Logger, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { CreateAuctionCommand } from 'src/commands/create-auction.command';
import { CreateBidCommand } from 'src/commands/create-bid.command';
import { AuctionDto } from 'src/dto/AuctionDto';

@Injectable()
export class AppService {

  private readonly _logger = new Logger(AppService.name);

  constructor(private readonly _commandBus: CommandBus) { }


  async createAuction( auctionDto: AuctionDto ) : Promise<void> {

    await this._commandBus.execute(new CreateAuctionCommand(
      auctionDto.productName,
      auctionDto.minBid,
      auctionDto.endDate,
      auctionDto.sellerId
    ));

  }

  async bid( bidDto: any) : Promise<void> {
    await this._commandBus.execute( new CreateBidCommand("1", 2000, "sylvain1234") );
  }

}
