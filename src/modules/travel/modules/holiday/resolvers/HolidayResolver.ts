//import { validate } from 'class-validator'
import { Arg, Mutation, Resolver } from "type-graphql"
import { createEntityResolver } from '../../../../../common/resolvers/createEntityResolver'
import { Holiday } from '../entities/Holiday'
import { AddHolidayInput } from '../inputs/AddHolidayInput'

const EntityResolver = createEntityResolver(Holiday)

@Resolver(() => Holiday)
export class HolidayResolver extends EntityResolver<Holiday> {
    @Mutation(() => Holiday, { name: "addHoliday" })
    async add(@Arg("holiday") { name } : AddHolidayInput): Promise<Holiday> {
        const exists = await Holiday.findOne({ name })

        if (exists) {
            throw Error('Already exists')
        }

        const entity = new Holiday()

        entity.name = name

        return entity.save()
    }
}
