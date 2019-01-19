import { createConnection, getConnectionOptions } from "typeorm"

export const createDBConnection = async () => {
    const connectionOptions = await getConnectionOptions()
    return createConnection({
        ...connectionOptions,
    })
}
