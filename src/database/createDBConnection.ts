import { createConnection, getConnectionOptions } from "typeorm"
import { NamingStrategy } from "./namingStrategy"

export const createDBConnection = async environment => {
    const connectionOptions = await getConnectionOptions(environment)
    return createConnection({
        ...connectionOptions,
        namingStrategy: new NamingStrategy(),
        name: 'default',
    })
}
