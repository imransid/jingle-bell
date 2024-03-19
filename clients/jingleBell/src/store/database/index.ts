import { appSchema, Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { Buyer, Order, Style, Variance } from './model/buyerStyleOrderTable.model';
import { Count, Organization_name, Transaction } from './model/othersTable.model';
import {
  buyerSchema,
  oderSchema,
  styleSchema,
  varianceSchema
} from './schema/buyerStyleOrderTable.scheme';
import { CountSchema, orgTreeSchema, transactionSchema } from './schema/othersTable.scheme';
const version = 1.4;

const schema = appSchema({
  version,
  tables: [
    buyerSchema,
    styleSchema,
    oderSchema,
    varianceSchema,
    orgTreeSchema,
    transactionSchema,
    CountSchema
  ]
});

const adapter = new SQLiteAdapter({
  schema
});

const database = new Database({
  adapter,
  modelClasses: [Style, Buyer, Order, Variance, Organization_name, Transaction, Count]
});

const initializeData = async (): Promise<void> => {
  await database.write(async (): Promise<void> => {
    const countCollection = database.collections.get('count');

    // Check if there are any existing records in the count table
    const existingCount = await countCollection.query().fetchCount();

    // If no records exist, insert initial data
    if (existingCount === 0) {
      await countCollection.create((count: any) => {
        count.total = 0;
        count.pass = 0;
        count.alter = 0;
        count.reject = 0;
        count.offlinePass = 0;
        count.created_at = Date.now();
        count.updated_at = Date.now();
      });
    }
  });
};

const initializeDatabase = async (): Promise<void> => {
  await initializeData(); // Initialize initial data
};

initializeDatabase().catch(console.error);

export default database;
