import { integer, text } from 'drizzle-orm/sqlite-core';
import { createTable } from './helpers';
import { users } from './users';

export const characters = createTable('character', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  createdById: text('createdById', { length: 255 })
    .notNull()
    .references(() => users.id),
  name: text('name', { length: 256 }).notNull(),
  class: text('class', {
    enum: ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'],
  }).notNull(),
  role: text('role', { enum: ['Tank', 'Healer', 'Damage'] }).notNull(),
});
