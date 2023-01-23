import {
  EntityManager,
  PostgreSqlDriver,
  SqlEntityManager,
} from '@mikro-orm/postgresql';

export type MyContext = {
  em: SqlEntityManager<PostgreSqlDriver> & EntityManager;
};
