import { PartialType } from '@nestjs/mapped-types';
import { CreateWebhookDatumDto } from './create-webhook-datum.dto';

export class UpdateWebhookDatumDto extends PartialType(CreateWebhookDatumDto) {}
