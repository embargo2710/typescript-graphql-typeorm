import { Field, ID, ObjectType } from 'type-graphql'
import { Entity, Tree, TreeChildren, TreeParent } from "typeorm"
import { DictionaryEntity } from "../../../../../common/entities/DictionaryEntity"

@ObjectType({ implements: DictionaryEntity })
@Entity("location")
@Tree("closure-table")
export class Location extends DictionaryEntity {
    @Field(() => [Location])
    @TreeChildren()
    children: Location[]

    @Field(() => ID)
    @TreeParent()
    parent: Location
}
