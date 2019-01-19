import { Resolver } from "type-graphql"
import { createEntityResolver } from '../../../../../common/resolvers/createEntityResolver'
import { Duration } from '../entities/Duration'

const EntityResolver = createEntityResolver(Duration)

@Resolver(() => Duration)
export class DurationResolver extends EntityResolver<Duration> {

}
