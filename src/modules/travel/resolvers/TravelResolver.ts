import { Resolver } from "type-graphql"
import { createEntityResolver } from '../../../common/resolvers/createEntityResolver'
import { Travel } from '../entities/Travel'

const EntityResolver = createEntityResolver(Travel)

@Resolver(() => Travel)
export class TravelResolver extends EntityResolver<Travel> {

}
