import * as path from 'path';
import { remote } from 'electron';
import * as knex from 'knex';
import 'sqlite3';

const { app } = remote;

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: path.join(app.getPath('userData'), 'loggd.sqlite'),
  },
  useNullAsDefault: true,
});

database.schema.hasTable('logs').then(exists => {
  if (!exists) {
    return database.schema.createTable('logs', t => {
      t.increments('id').primary();
      t.text('content');
    });
  }
  return;
});

export default database;
