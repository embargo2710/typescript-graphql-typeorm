import { MaxLength } from 'class-validator'
import { Field, InputType } from "type-graphql"
import { Holiday } from '../entities/Holiday'

@InputType({ description: "New Holiday data" })
export class AddHolidayInput implements Partial<Holiday> {
    @MaxLength(100)
    @Field()
    name: string
}
