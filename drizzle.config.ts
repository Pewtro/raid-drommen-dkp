import type { Config } from 'drizzle-kit';
import { environment } from '~/environment';

const schemaPath = (path: string, extension = '.ts') => `./src/server/database/${path}${extension}`;

export default {
  schema: [schemaPath('users'), schemaPath('characters')],
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: environment.DATABASE_URL,
    authToken: environment.DATABASE_AUTH_TOKEN,
  },
  tablesFilter: ['raid-drommen-dkp_*'],
  // Print all statements
  verbose: true,
  // Always ask for my confirmation
  strict: true,
} satisfies Config;
