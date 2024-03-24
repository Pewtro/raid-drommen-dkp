import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { environment } from '~/environment';

const client = createClient({ url: environment.DATABASE_URL, authToken: environment.DATABASE_AUTH_TOKEN });

export const database = drizzle(client);
