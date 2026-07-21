import { Test, TestingModule } from '@nestjs/testing';
import { WebhookDataController } from './webhook-data.controller';
import { WebhookDataService } from './webhook-data.service';

describe('WebhookDataController', () => {
  let controller: WebhookDataController;
  let service: WebhookDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookDataController],
      providers: [
        WebhookDataService,
        { provide: WebhookDataService, useValue: {
          create: jest.fn()
        }}
      ],
    }).compile();

    controller = module.get<WebhookDataController>(WebhookDataController);
    service = module.get<WebhookDataService>(WebhookDataService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it("should 'service' be defined", () => {
    expect(service).toBeDefined();
  });

});
