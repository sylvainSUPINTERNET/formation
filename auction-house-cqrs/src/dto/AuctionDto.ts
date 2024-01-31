export class AuctionDto {

    public productName: string;
    public minBid: number;
    public endDate: Date;
    public createdAt: Date;
    public updatedAt: Date;
    public sellerId: string;
    public id:string;

    constructor ( productName: string, minBid: number, endDate: Date, sellerId: string, createdAt?: Date, updatedAt?: Date, id?:string,) {
        this.productName = productName;
        this.minBid = minBid;
        this.endDate = endDate;
        this.sellerId = sellerId;
        this.endDate = endDate;
        this.createdAt = updatedAt;
        this.id = id;
    }

}