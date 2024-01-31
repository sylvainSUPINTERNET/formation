import { AggregateRoot } from "@nestjs/cqrs";
import { CreateBidEvent } from "src/events/create-bid-event";

export class AuctionAggregate extends AggregateRoot {

    constructor(public id: string, public productName: string, public minBid: number, public endDate: Date, public sellerId: string) {
        super();
    }

    public addBid(amount: number, bidderId: string) {
        // TODO add Here some business logic

        // notify event handler
        this.apply(new CreateBidEvent(bidderId, amount)); 
    }
}