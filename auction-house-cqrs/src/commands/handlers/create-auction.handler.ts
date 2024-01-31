import { CommandHandler, EventPublisher, ICommand, ICommandHandler } from "@nestjs/cqrs";
import { CreateAuctionCommand } from "../create-auction.command";
import { AuctionRepository } from "src/repositories/auction.repository";
import { AuctionDto } from "src/dto/AuctionDto";
import { Logger } from "@nestjs/common";


@CommandHandler(CreateAuctionCommand)
export class CreateAuctionHandler implements ICommandHandler<CreateAuctionCommand> {
    
    private readonly logger = new Logger(CreateAuctionHandler.name);

    constructor(
        private publisher: EventPublisher,
        private auctionRepository: AuctionRepository
     ){}

    async execute(command: CreateAuctionCommand): Promise<any> {
        const { productName, minBid, endDate, sellerId } = command;

        this.logger.debug("Execute command - create auction ", command)

        await this.auctionRepository.createAuction(
            new AuctionDto(productName, minBid, endDate, sellerId, new Date(), new Date())
        );


    
    }


}