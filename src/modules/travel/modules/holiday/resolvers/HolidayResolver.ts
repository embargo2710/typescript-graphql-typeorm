import { Resolver } from "type-graphql"
import { createEntityResolver } from '../../../../../common/resolvers/EntityResolver'
import { Holiday } from '../entities/Holiday'

const EntityResolver = createEntityResolver(Holiday)

@Resolver(() => Holiday)
export class HolidayResolver extends EntityResolver<Holiday> {

}
