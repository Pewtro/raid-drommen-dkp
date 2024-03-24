import { sqliteTableCreator } from 'drizzle-orm/sqlite-core';

export const createTable = sqliteTableCreator((name) => `raid-drommen-dkp_${name}`);
