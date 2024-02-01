import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class AuctionEntity extends Model {
  @Column
  name: string;
}