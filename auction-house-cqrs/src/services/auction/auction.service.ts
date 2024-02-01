import { Injectable, Inject } from '@nestjs/common';
import { AuctionEntity } from 'src/db/entities/auction/auction.entity';

@Injectable()
export class AuctionServices {
    constructor(@Inject('AUCTION_REPOSITORY') private auctionRepository: typeof AuctionEntity) { }

    async findAll(): Promise<AuctionEntity[]> {
        return this.auctionRepository.findAll<AuctionEntity>();
    }

}