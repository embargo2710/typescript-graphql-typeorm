let NamingStrategy;

if (!process.env.NODE_ENV) {
  NamingStrategy = require('./src/database/NamingStrategy').NamingStrategy
} else {
  NamingStrategy = require('./dist/database/NamingStrategy').NamingStrategy
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
    host: 'graphql.cpi34eitgeyn.eu-central-1.rds.amazonaws.com',
    port: 3306,
    username: 'graphql',
    password: 'graphql123',
    database: 'graphql',
    synchronize: true,
    logging: true,
    entities: ['dist/modules/**/entities/*.js'],
    subscribers: ['dist/modules/**/subscribers/*.js'],
    migrations: ['dist/migrations/**/*.js'],
    namingStrategy: new NamingStrategy(),
    migrationsRun: false,
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
