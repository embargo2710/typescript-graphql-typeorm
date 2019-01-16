import { Resolver } from "type-graphql"
import { createEntityResolver } from '../../../../../common/resolvers/EntityResolver'
import { Duration } from '../entities/Duration'

const EntityResolver = createEntityResolver(Duration)

@Resolver(() => Duration)
export class DurationResolver extends EntityResolver<Duration> {

}
