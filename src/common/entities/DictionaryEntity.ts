import { IsEnum, Length } from "class-validator"
import { Field, ID, InterfaceType } from "type-graphql"
import { BaseEntity, Column, CreateDateColumn, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { StatusEnum } from './StatusEnum'

@InterfaceType()
export abstract class DictionaryEntity extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Length(1, 100)
    @Column("varchar", { length: 100, unique: true, nullable: false })
    @Index({ unique: true })
    name: string

    @Field()
    @CreateDateColumn({ readonly: true })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ readonly: true })
    updatedAt: Date

    @Field()
    @IsEnum(StatusEnum)
    @Column("enum", { enum: StatusEnum, default: StatusEnum.Active })
    status: StatusEnum
}
