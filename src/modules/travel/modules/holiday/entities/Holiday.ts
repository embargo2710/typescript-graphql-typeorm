import { ObjectType } from 'type-graphql'
import { Entity } from "typeorm"
import { DictionaryEntity } from "../../../../../common/entities/DictionaryEntity"

@ObjectType({ implements: DictionaryEntity })
@Entity("holiday")
export class Holiday extends DictionaryEntity {
}
