import { Test, TestingModule } from '@nestjs/testing';
import { WebhookDataService } from './webhook-data.service';

describe('WebhookDataService', () => {
  let service: WebhookDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhookDataService],
    }).compile();

    service = module.get<WebhookDataService>(WebhookDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
