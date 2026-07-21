import { Test, TestingModule } from '@nestjs/testing';
import { WebhookDataController } from './webhook-data.controller';
import { WebhookDataService } from './webhook-data.service';
import { CreateWebhookDatumDto } from './dto/create-webhook-datum.dto';
import { NotFoundException } from '@nestjs/common';

describe('WebhookDataController', () => {
  let controller: WebhookDataController;
  let service: WebhookDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookDataController],
      providers: [
        WebhookDataService,
        { provide: WebhookDataService, useValue: {
          create: jest.fn(),
          findAll: jest.fn(),
          findOne: jest.fn(),
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

  describe("create",() =>{

    it("should return Webhook Data object", async()=>{
      let mockData:CreateWebhookDatumDto = {
        eventType:'pre',
        payload:{
          text:'ssss'
        },
        timestamp:'2222-10-2'
      };

      jest.spyOn(service, 'create').mockResolvedValue({
        id:'mock-uuid-821',
        ...mockData,
        created_at:new Date(),
        updated_at:new Date(),
      });

      const result = await controller.create(mockData);
      expect(result).toMatchObject(mockData);

      expect(service.create).toHaveBeenCalledTimes(1);
      expect(service.create).toHaveBeenCalledWith(mockData);
    });

    it("should throw an error if service fails", async()=>{
      let mockData:CreateWebhookDatumDto = {
        eventType:'pre',
        payload:{
          text:'ssss'
        },
        timestamp:'2222-10-2'
      };

      jest.spyOn(service, 'create').mockRejectedValueOnce(new Error('Database error'));
      await expect(controller.create(mockData)).rejects.toThrow('Database error');
    })
  });

  describe("findAll",()=>{
    it("should return an array of Webhook Data object", async()=>{
      let mockData = [
        {
          id:'mock-uuid-821',
          eventType:'pre',
          payload:{
            text:'ssss'
          },
          timestamp:'2222-10-2',
          created_at:new Date(),
          updated_at:new Date(),
        },{
          id:'mock-uuid-1281',
          eventType:'progre',
          payload:{
            text:'test'
          },
          timestamp:'2222-10-2',
          created_at:new Date(),
          updated_at:new Date(),
        }];
      jest.spyOn(service, 'findAll').mockResolvedValue(mockData);

      const result = await controller.findAll();
      expect(result).toMatchObject(mockData);
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });

    it("should throw an error if Service fails",()=>{
      jest.spyOn(service, 'findAll').mockRejectedValue(new Error('Database error'))
      expect(controller.findAll()).rejects.toThrow('Database error')
    })
  });

  describe("findOne",()=>{
    it("should return an Webhook Data object",async ()=>{
      let mockData = {
        id:'mock-uuid-821',
        eventType:'pre',
        payload:{
          text:'ssss'
        },
        timestamp:'2222-10-2',
        created_at:new Date(),
        updated_at:new Date(),
      }
      jest.spyOn(service, 'findOne').mockResolvedValue(mockData)
      const result = await controller.findOne("mock-uuid-821")
      expect(result).toMatchObject(mockData)
    });

    it("should throw an error if Webhook Data Not Found",()=>{
      jest.spyOn(service, 'findOne').mockRejectedValue(new NotFoundException("Webhook not found"))
      expect(controller.findOne("mock-uuid")).rejects.toThrow(NotFoundException)
    })

    it("should throw an error if Service fails",()=>{
      jest.spyOn(service, 'findOne').mockRejectedValue(new Error('Database error'))
      expect(controller.findOne("mock-uuid")).rejects.toThrow('Database error')
    })

  });
});
