import { Injectable } from '@nestjs/common';
import { CreateWebhookDatumDto } from './dto/create-webhook-datum.dto';
import { UpdateWebhookDatumDto } from './dto/update-webhook-datum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WebhookDatum } from './entities/webhook-datum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WebhookDataService {
  constructor(
    @InjectRepository(WebhookDatum) private whDatumRepo: Repository<WebhookDatum>
  ){}
  async create(createWebhookDatumDto: CreateWebhookDatumDto) {
    const webhook = await this.whDatumRepo.create(createWebhookDatumDto)
    return await this.whDatumRepo.save(webhook);
  }

  findAll() {
    return `This action returns all webhookData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webhookDatum`;
  }

  update(id: number, updateWebhookDatumDto: UpdateWebhookDatumDto) {
    return `This action updates a #${id} webhookDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} webhookDatum`;
  }
}
