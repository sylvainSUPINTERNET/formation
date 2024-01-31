import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CreateBidEvent } from "../create-bid-event";
import { AuctionRepository } from "src/repositories/auction.repository";
import { Logger } from "@nestjs/common";

@EventsHandler(CreateBidEvent)
export class CreateBidEventHandler implements IEventHandler<CreateBidEvent> {
  
  private readonly _logger = new Logger(CreateBidEventHandler.name);

  constructor(private auctionRepository: AuctionRepository) {}

  handle(event: CreateBidEvent) {
    // Business logic
    this._logger.debug("Handle event - new bid created notif ", event)
  }
}