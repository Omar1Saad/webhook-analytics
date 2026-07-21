import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWebhookDatumDto } from './dto/create-webhook-datum.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WebhookDatum } from './entities/webhook-datum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WebhookDataService {
  constructor(
    @InjectRepository(WebhookDatum) private webhookDatumRepo: Repository<WebhookDatum>
  ){}
  async create(createWebhookDatumDto: CreateWebhookDatumDto) {
    try{
      const webhook = await this.webhookDatumRepo.create(createWebhookDatumDto)
      return await this.webhookDatumRepo.save(webhook);
    }catch(error:any){
      throw new Error(error.message)
    }
  }

  async findAll() {
    return await this.webhookDatumRepo.find({
      order: { created_at: 'DESC' }
    });
  }

  async findOne(id: string) {
    const webhook = await this.webhookDatumRepo.findOne({ where: { id }});
    if(!webhook) throw new NotFoundException(`Webhook with ID ${id} not found`);
    return webhook;
  }
}
