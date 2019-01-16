import { ObjectType } from "type-graphql"
import { Entity } from "typeorm"
import { DictionaryEntity } from "../../../../../common/entities/DictionaryEntity"

@ObjectType({ implements: DictionaryEntity })
@Entity("activity")
export class Activity extends DictionaryEntity {
}
