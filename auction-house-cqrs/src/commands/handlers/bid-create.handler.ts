import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { AuctionRepository } from "src/repositories/auction.repository";
import { Logger } from "@nestjs/common";
import { CreateBidCommand } from "../create-bid.command";


@CommandHandler(CreateBidCommand)
export class CreateBidHandler implements ICommandHandler<CreateBidCommand> {
    
    private readonly logger = new Logger(CreateBidHandler.name);

    constructor(
        private publisher: EventPublisher,
        private auctionRepository: AuctionRepository
     ){}

    async execute(command: CreateBidCommand): Promise<any> {
        const { auctionId, bidAmount, bidderId } = command;

        this.logger.debug("Execute command - create bid ", command)

        // copy event publisher context to use "this.apply" to generate event to eventHandler 
        const auctionAggregate = this.publisher.mergeObjectContext(
            await this.auctionRepository.findById(auctionId)
        );
        auctionAggregate.addBid(bidAmount, bidderId);
        auctionAggregate.commit(); // dispatch the event
    }


}