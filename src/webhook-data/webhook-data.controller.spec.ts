import { Test, TestingModule } from '@nestjs/testing';
import { WebhookDataController } from './webhook-data.controller';
import { WebhookDataService } from './webhook-data.service';

describe('WebhookDataController', () => {
  let controller: WebhookDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookDataController],
      providers: [WebhookDataService],
    }).compile();

    controller = module.get<WebhookDataController>(WebhookDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create',()=>{
    it('should be return object', () => {
      expect(controller.create({eventType:'ddd', payload:{d:'dd'}, timestamp:''}))
    })
  })
});
