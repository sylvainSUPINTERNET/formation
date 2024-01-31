export class CreateAuctionCommand {
    constructor(public productName:string, public minBid:number, public endDate:Date, public sellerId:string) {}
}