import { sql } from 'drizzle-orm';
import { text, integer, index, primaryKey } from 'drizzle-orm/sqlite-core';
import type { AdapterAccount } from 'next-auth/adapters';
import { createTable } from './helpers';

export const users = createTable('user', {
  id: text('id', { length: 255 }).notNull().primaryKey(),
  name: text('name', { length: 255 }),
  email: text('email', { length: 255 }).notNull(),
  emailVerified: integer('emailVerified', {
    mode: 'timestamp',
  }).default(sql`CURRENT_TIMESTAMP`),
  image: text('image', { length: 255 }),
  killPoints: integer('killPoints', { mode: 'number' }).default(0),
});

export const sessions = createTable(
  'session',
  {
    sessionToken: text('sessionToken', { length: 255 }).notNull().primaryKey(),
    userId: text('userId', { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: integer('expires', { mode: 'timestamp' }).notNull(),
  },
  (session) => ({
    userIdIdx: index('session_userId_idx').on(session.userId),
  }),
);

export const accounts = createTable(
  'account',
  {
    userId: text('userId', { length: 255 })
      .notNull()
      .references(() => users.id),
    type: text('type', { length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: text('provider', { length: 255 }).notNull(),
    providerAccountId: text('providerAccountId', { length: 255 }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type', { length: 255 }),
    scope: text('scope', { length: 255 }),
    id_token: text('id_token'),
    session_state: text('session_state', { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index('account_userId_idx').on(account.userId),
  }),
);
