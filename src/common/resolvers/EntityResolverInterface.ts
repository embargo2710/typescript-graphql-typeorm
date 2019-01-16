import { GetAllArgs } from './Args'

export interface EntityResolverInterface<T> {
    findOne(id: number): Promise<T | undefined>

    findAll(args: GetAllArgs): Promise<T[]>
}
