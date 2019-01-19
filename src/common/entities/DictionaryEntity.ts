import { Field, ID, InterfaceType } from "type-graphql"
import { BaseEntity, Column, CreateDateColumn, Index, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm"
import { StatusEnum } from './StatusEnum'

@InterfaceType()
@Unique(['name'])
export abstract class DictionaryEntity extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number

    @Field()
    @Column("varchar", { length: 100, nullable: false })
    @Index({ unique: true })
    name: string

    @Field()
    @CreateDateColumn({ readonly: true })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ readonly: true })
    updatedAt: Date

    @Field()
    @Column("enum", { enum: StatusEnum, default: StatusEnum.Active })
    status: StatusEnum
}
