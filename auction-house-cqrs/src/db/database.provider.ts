
import { Sequelize } from 'sequelize-typescript';
import { AuctionEntity } from './entities/auction/auction.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST as string,
        port: process.env.DB_PORT as unknown as number,
        username: process.env.DB_USERNAME as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_DATABASE as string,
      });
      sequelize.addModels(
        [
          AuctionEntity  
        ]
      );
      await sequelize.sync();
      return sequelize;
    },
  },
];