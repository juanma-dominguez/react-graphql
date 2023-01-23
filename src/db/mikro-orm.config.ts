import { MikroORM, PostgreSqlDriver, Options } from '@mikro-orm/postgresql';

const dataBaseConfig: Options = {
  entities: ['./dist/db/entities'],
  entitiesTs: ['./src/db/entities'],
  dbName: 'lireddit',
  type: 'postgresql',
  user: 'postgres',
  password: 'postgres',
  debug: true,
  migrations: {
    path: './dist/db/migrations',
    pathTs: './src/db/migrations',
  },
  allowGlobalContext: true,
};

export const orm = async (config = dataBaseConfig): Promise<MikroORM> => {
  return await MikroORM.init<PostgreSqlDriver>(config);
};

export default dataBaseConfig;
