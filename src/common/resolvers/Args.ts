import { ArgsType, Field, Int } from "type-graphql"

@ArgsType()
export class GetAllArgs {
    @Field(() => Int)
    skip: number = 0

    @Field(() => Int)
    take: number = 10
}
