import { Resolver } from "type-graphql"
import { createEntityResolver } from '../../../../../common/resolvers/createEntityResolver'
import { Location } from '../entities/Location'

const EntityResolver = createEntityResolver(Location)

@Resolver(() => Location)
export class LocationResolver extends EntityResolver<Location> {

}
