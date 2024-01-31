export class CreateBidCommand {
    constructor(public auctionId:string, public bidAmount:number, public bidderId:string) {}
}