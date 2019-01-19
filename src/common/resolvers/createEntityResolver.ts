import * as Pluralize from "pluralize"
import { Arg, ClassType, Int, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { BaseEntity, Repository } from "typeorm"
import { InjectRepository } from "typeorm-typedi-extensions"
import { EntityResolverInterface } from './EntityResolverInterface'

export function createEntityResolver<Entity extends BaseEntity>(
    ResourceCls: ClassType,
): any {
    const resourceName = ResourceCls.name.toLocaleLowerCase()
    const pluralResourceName = Pluralize.plural(resourceName)

    @Resolver(() => ResourceCls, { isAbstract: true })
    @Service()
    abstract class AbstractEntityResolver implements EntityResolverInterface<Entity> {
        @InjectRepository(ResourceCls)
        private repository: Repository<Entity>

        @Query(() => ResourceCls, { nullable: true, name: resourceName })
        async findOne(@Arg("id", () => Int) id: number) {
            return this.repository.findOne(id)
        }

        @Query(() => [ResourceCls], { nullable: true, name: pluralResourceName })
        async findAll() {
            return this.repository.find({
                cache: {
                    id: pluralResourceName,
                    milliseconds: 300000,
                },
            })
        }
    }

    return AbstractEntityResolver as any
}
