require('dotenv/config'); // load everything from `.env` file into the `process.env` variable

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    entities: ['src/**/*.entity.ts'],
    subscribers: ['src/**/*.subscriber.ts'],
    migrations: ['src/migrations/*.ts'],
    seeds: ['src/seeds/**/*{.ts,.js}'],
    factories: ['src/factories/**/*{.ts,.js}'],
  },
];
