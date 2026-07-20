import { IsDateString, IsNotEmpty, IsObject, IsString } from "class-validator";

export class CreateWebhookDatumDto {
    @IsNotEmpty()
    @IsString()
    eventType!: string
    
    @IsNotEmpty()
    @IsObject()
    payload!: object
    
    @IsDateString()
    timestamp!: string
}
