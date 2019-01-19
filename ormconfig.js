const NamingStrategy = require('./src/database/NamingStrategy').NamingStrategy

module.exports = [
  {
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'graphql',
    synchronize: true,
    logging: true,
    entities: ['src/modules/**/entities/*.ts'],
    subscribers: ['src/modules/**/subscribers/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
    namingStrategy: new NamingStrategy(),
    migrationsRun: true,
    cache: {
      duration: 300000,
    },
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  }
]
