import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('webhook_data')
export class WebhookDatum {

    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    eventType!: string

    @Column({type:"jsonb"})
    payload!: object

    @Column({type:"date"})
    timestamp!: string 

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}
