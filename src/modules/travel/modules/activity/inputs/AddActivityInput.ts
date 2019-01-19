import { InputType } from "type-graphql"
import { AddDictionaryInput } from '../../../../../common/inputs/AddDictionaryInput'

@InputType({ description: "New Activity data" })
export class AddActivityInput extends AddDictionaryInput {
}
