import { InputType } from "type-graphql"
import { AddDictionaryInput } from '../../../../../common/inputs/AddDictionaryInput'

@InputType({ description: "New Duration data" })
export class AddDurationInput extends AddDictionaryInput {
}
