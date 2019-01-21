let NamingStrategy;

if (!process.env.NODE_ENV) {
  NamingStrategy = require('./src/database/NamingStrategy').NamingStrategy
} else {
  NamingStrategy = require('./database/NamingStrategy')
}

module.exports = [
  {
    name: 'development',
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
  },
  {
    name: 'production',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'graphql',
    synchronize: true,
    logging: true,
    entities: ['modules/**/entities/*.js'],
    subscribers: ['modules/**/subscribers/*.js'],
    migrations: ['migrations/**/*.js'],
    namingStrategy: new NamingStrategy(),
    migrationsRun: true,
    cache: {
      duration: 300000,
    },
    cli: {
      entitiesDir: 'entity',
      migrationsDir: 'migration',
      subscribersDir: 'subscriber',
    },
  }
]
