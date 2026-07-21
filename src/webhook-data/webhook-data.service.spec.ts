import { Test, TestingModule } from '@nestjs/testing';
import { WebhookDataService } from './webhook-data.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WebhookDatum } from './entities/webhook-datum.entity';
import { Repository } from 'typeorm';
import { CreateWebhookDatumDto } from './dto/create-webhook-datum.dto';
import { NotFoundException } from '@nestjs/common';

describe('WebhookDataService', () => {
  let service: WebhookDataService;
  let webhookRepoMock: Repository<WebhookDatum>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WebhookDataService,
        {
          provide: getRepositoryToken(WebhookDatum),
          useValue:{
            create: jest.fn((dto: CreateWebhookDatumDto) => dto ),
            save: jest.fn((dto: CreateWebhookDatumDto)=> Promise.resolve({
              id:"mock-uuid-11",
              ...dto
            })),
            find: jest.fn(),
            findOne: jest.fn()
          }
        },
      ],
    }).compile();

    service = module.get<WebhookDataService>(WebhookDataService);
    webhookRepoMock = module.get<Repository<WebhookDatum>>(getRepositoryToken(WebhookDatum));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should 'webhookRepoMuck' be defined", () => {
    expect(webhookRepoMock).toBeDefined();
  });

  describe("Create", ()=>{
    
    it("should call 'create' method once", async ()=>{
      let webhookMock:CreateWebhookDatumDto = {
        eventType:"www",
        payload:{},
        timestamp:"2222-12-2"
      };
      await service.create(webhookMock);
      expect(webhookRepoMock.create).toHaveBeenCalledWith(webhookMock);
    });

    it("should call 'save' method once", async ()=>{
      let webhookMock = {
        eventType:"www",
        payload:{},
        timestamp:"2222-12-2",
      };
      await service.create(webhookMock);
      expect(webhookRepoMock.save).toHaveBeenCalledWith(webhookMock);
    });

    it("should be return an Webhook object", async () =>{
      let webhookMock:CreateWebhookDatumDto = {
        eventType:"www",
        payload:{},
        timestamp:"2222-12-2"
      };
      const result = await service.create(webhookMock);
      expect(result).toMatchObject(webhookMock);
    });

    it("should return an Database Error", async ()=>{
      let webhookMock:CreateWebhookDatumDto = {
        eventType:"www",
        payload:{},
        timestamp:"2222-12-2"
      };
      const spy = jest.spyOn(webhookRepoMock, 'save').mockRejectedValueOnce(new Error('Database error'));
      await expect(service.create(webhookMock)).rejects.toThrow('Database error');
    });
  });

  describe("findAll",()=>{

    it("should call 'find' method once", async () =>{
      jest.spyOn(webhookRepoMock, 'find').mockResolvedValue([]);
      await service.findAll();
      expect(webhookRepoMock.find).toHaveBeenCalledTimes(1);
    });

    it("should return an array of Webhook Data", async () =>{
      let mockData = [
        {
          id:'mock-uuid-231',
          eventType:'da',
          payload:{},
          timestamp:'2222',
          created_at:null,
          updated_at:null
        },
        {
          id:'mock-uuid-143',
          eventType:'dasa',
          payload:{},
          timestamp:'2223',
          created_at:null,
          updated_at:null
        }
      ];
      jest.spyOn(webhookRepoMock, 'find').mockResolvedValue(mockData);
      const result = await service.findAll();
      expect(result).toEqual(mockData);
    })
  })

  describe("findOne",()=>{

    it("should return webhook Data object", async()=>{
      let mock: WebhookDatum = {
        id:'mock-uuid-441',
        eventType:'dqea',
        payload:{},
        timestamp:'2222',
        created_at:null,
        updated_at:null
      };
      jest.spyOn(webhookRepoMock, 'findOne').mockResolvedValue(mock);

      const result = await service.findOne('mock-uuid-441');
      expect(result).toEqual(mock);
      expect(webhookRepoMock.findOne).toHaveBeenCalledTimes(1);
    })

    it("should return an error not found exciption", async()=>{
      jest.spyOn(webhookRepoMock, 'findOne').mockResolvedValue(null);
      await expect(service.findOne('111111')).rejects.toThrow(NotFoundException);
      expect(webhookRepoMock.findOne).toHaveBeenCalledTimes(1);
    });
  });
  
});
