import { createConnection, getConnectionOptions } from "typeorm"

export const createDBConnection = async env => {
    const connectionOptions = await getConnectionOptions(env)
    return createConnection({
        ...connectionOptions,
    })
}
