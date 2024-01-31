import { Injectable, Logger } from "@nestjs/common";
import { AuctionDto } from "src/dto/AuctionDto";

// TODO : use real repository / database obviously

@Injectable()
export class AuctionRepository {

        private readonly logger = new Logger(AuctionRepository.name);

    
        constructor() {}
    
        async createAuction(auctionDto:AuctionDto) : Promise<AuctionDto> {
            this.logger.debug("Repository Create auction ", auctionDto)
            return new Promise((resolve, reject) => { resolve(auctionDto) });
        }
}