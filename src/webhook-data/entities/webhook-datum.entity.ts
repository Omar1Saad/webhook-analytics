import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('webhook_data')
export class WebhookDatum {

    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column()
    eventType!: string

    @Column({type:"jsonb"})
    payload!: object

    @Column({type:"date", nullable:true})
    timestamp!: string 

    @CreateDateColumn({nullable:true})
    created_at!:Date|null

    @UpdateDateColumn({nullable:true})
    updated_at!:Date|null
}
