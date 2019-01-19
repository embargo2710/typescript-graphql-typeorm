import { Field, ID, ObjectType } from 'type-graphql'
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"
import { StatusEnum } from '../../../common/entities/StatusEnum'
import { Activity } from "../modules/activity/entities/Activity"
import { Duration } from "../modules/duration/entities/Duration"
import { Holiday } from "../modules/holiday/entities/Holiday"
import { Location } from "../modules/location/entities/Location"

@ObjectType()
@Entity("travel")
export class Travel extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number

    @Field()
    @CreateDateColumn()
    createdAt: Date

    @Field()
    @UpdateDateColumn()
    updatedAt: Date

    @Field()
    @Column("varchar", { length: 100, nullable: false })
    @Index()
    name: string

    @Field()
    @Column("text")
    description: string

    @Column()
    startedAt: Date

    @Column()
    finishedAt: Date

    @Column("enum", { enum: StatusEnum, default: StatusEnum.Active })
    status: StatusEnum

    @ManyToOne(() => Duration)
    duration: Duration

    @ManyToOne(() => Holiday)
    holiday: Holiday

    @ManyToOne(() => Location)
    location: Location

    @ManyToMany(() => Activity)
    @JoinTable()
    activities: [Activity]
}
