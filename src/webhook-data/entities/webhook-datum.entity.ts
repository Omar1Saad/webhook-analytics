import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('webhook_data')
export class WebhookDatum {

    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    eventType!: string

    @Column({type:"jsonb"})
    payload!: object

    @Column({type:"date", nullable:true})
    timestamp!: string 

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}
