import { Module } from '@nestjs/common';
import { WebhookDataService } from './webhook-data.service';
import { WebhookDataController } from './webhook-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookDatum } from './entities/webhook-datum.entity';

@Module({
  imports:[TypeOrmModule.forFeature([WebhookDatum])],
  controllers: [WebhookDataController],
  providers: [WebhookDataService],
})
export class WebhookDataModule {}
