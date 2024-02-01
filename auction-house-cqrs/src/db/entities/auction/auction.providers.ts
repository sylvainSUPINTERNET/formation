import { AuctionEntity } from "./auction.entity";

export const AuctionProviders = [
    {
        provide: 'AUCTION_REPOSITORY',
        useValue: AuctionEntity,
    }
]