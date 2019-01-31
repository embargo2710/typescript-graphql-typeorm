import { ApolloServer } from "apollo-server-express"
import * as Express from "express"
import * as glob from "glob"
import "reflect-metadata"
import * as TypeGraphQL from "type-graphql"
import { buildSchema, formatArgumentValidationError } from "type-graphql"
import { Container } from "typedi"
import * as TypeORM from "typeorm"
import { createDBConnection } from './database/createDBConnection'

const environment = process.env.NODE_ENV || 'development'

const isDev = () => environment === 'development'

TypeGraphQL.useContainer(Container)
TypeORM.useContainer(Container)

const startServer = async () => {
    try {
        const schema = await buildSchema({
            resolvers: glob.sync(`${__dirname}/modules/**/resolvers/*.{ts,js}`),
        })

        const apolloServer = new ApolloServer({
            schema,
            formatError: formatArgumentValidationError,
            tracing: isDev(),
            debug: isDev(),
            cacheControl: true,
            playground: true,
            introspection: true,
        })

        const app = Express()

        await createDBConnection(environment)

        apolloServer.applyMiddleware({ app })

        app.listen(80, () => {
            console.log("server started on http://localhost:4000/graphql")
        })
    } catch (exception) {
        console.error(exception)
    }
}

startServer()
