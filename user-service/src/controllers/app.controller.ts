import { Body, Controller, Get, Inject, Post, Res } from '@nestjs/common';
import { Client, ClientKafka, Ctx, EventPattern, KafkaContext, MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { Kafka } from 'kafkajs';
import { AuctionDto } from 'src/dto/AuctionDto';
import { AppService } from 'src/services/app.service';

@Controller()
export class AppController {

  constructor (private appService:AppService) {}

  @Post()
  async createAuction(@Body() auction: AuctionDto, @Res() res) {
    
    await this.appService.createAuction(auction);

    res.status(200).json({
      message: 'Auction created successfully',
      data: auction
    });
  }

  
  // constructor(
  //   private readonly appService: AppService,
  //   @Inject('MY_APP_SERVICE') private readonly client: ClientKafka,
  // ) {}
  

  // async onModuleInit() {
  //   this.client.subscribeToResponseOf('hero.kill.dragon'); // generate topic hero.kill.dragon.reply
  //   await this.client.connect();
  // }

  // @Get()
  // getHello(): string {
  //   this.client.emit('my-event', 'Hello World!');
  //   this.client.emit('hero.kill.dragon', 'Hello World dragon !');
  //   return this.appService.getHello();
  // }

  // @MessagePattern('hero.kill.dragon') //pub/sub
  // killDragon(@Payload() message) {
  //   console.log("FROM TOPIC kill dragon ! ",message);
  //   return 'dragon killed';
  // }

  // @EventPattern('my-event') // event bus
  // async handleMyEvent(@Payload() data: string, @Ctx() context: KafkaContext) {
  //   console.log('my-event', data);
  // }

}
