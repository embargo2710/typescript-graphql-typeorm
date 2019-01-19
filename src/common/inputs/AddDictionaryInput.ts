import { MaxLength } from 'class-validator'
import { Field } from "type-graphql"
import { DictionaryEntity } from '../entities/DictionaryEntity'

export class AddDictionaryInput implements Partial<DictionaryEntity> {
    @MaxLength(100)
    @Field()
    name: string
}
