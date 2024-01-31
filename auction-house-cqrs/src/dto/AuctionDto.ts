export class AuctionDto {

    constructor ( productName: string, minBid: number, endDate: Date, sellerId: string, createdAt?: Date, updatedAt?: Date) {
        this.productName = productName;
        this.minBid = minBid;
        this.endDate = endDate;
        this.sellerId = sellerId;
        this.endDate = endDate;
        this.createdAt = updatedAt;
    }
    
    public productName: string;
    public minBid: number;
    public endDate: Date;
    public createdAt: Date;
    public updatedAt: Date;
    public sellerId: string;
}