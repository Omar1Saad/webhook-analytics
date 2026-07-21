import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebhookDataService } from './webhook-data.service';
import { CreateWebhookDatumDto } from './dto/create-webhook-datum.dto';
import { UpdateWebhookDatumDto } from './dto/update-webhook-datum.dto';

@Controller('webhook-data')
export class WebhookDataController {
  constructor(private readonly webhookDataService: WebhookDataService) {}

  @Post()
  create(@Body() createWebhookDatumDto: CreateWebhookDatumDto) {
    return this.webhookDataService.create(createWebhookDatumDto);
  }

  @Get()
  findAll() {
    return this.webhookDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webhookDataService.findOne(id);
  }
}
