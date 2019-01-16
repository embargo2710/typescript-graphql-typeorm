import { Resolver } from "type-graphql"
import { createEntityResolver } from '../../../../../common/resolvers/EntityResolver'
import { Activity } from '../entities/Activity'

const EntityResolver = createEntityResolver(Activity)

@Resolver(() => Activity)
export class ActivityResolver extends EntityResolver<Activity> {

}
