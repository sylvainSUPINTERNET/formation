import { Injectable, Logger } from "@nestjs/common";
import { AuctionAggregate } from "src/aggregate/AuctionAggregate";
import { AuctionDto } from "src/dto/AuctionDto";

// TODO : use real repository / database obviously and define entites
//@EntityRepository(AuctionEntity)
//export class AuctionRepository extends Repository<AuctionEntity> {

@Injectable()
export class AuctionRepository  {

        private readonly logger = new Logger(AuctionRepository.name);

        constructor() {}
    
        async findById(id: string) : Promise<AuctionAggregate> {

            this.logger.debug("Repository Find auction by id ", id)

            // TODO from DB ( find by ID )
            let data = new AuctionDto(
                "productName",
                1000,
                new Date(),
                "theSellerId1234",
                null, 
                new Date(),
                "1"
            )

            // Return aggregate to use in command handler and send event to event handler
            return new AuctionAggregate(data.id, data.productName, data.minBid, data.endDate, data.sellerId);
        }

        async createAuction(auctionDto:AuctionDto) : Promise<AuctionDto> {

            this.logger.debug("Repository Create auction ", auctionDto);

            // TODO save in DB

            return new Promise((resolve, reject) => { resolve(auctionDto) });
        }
}

