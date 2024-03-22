import type { Config } from 'drizzle-kit';
import { environment } from '~/environment';

export default {
  schema: './src/server/database/schema.ts',
  driver: 'turso',
  dbCredentials: {
    url: environment.DATABASE_URL,
    authToken: environment.DATABASE_AUTH_TOKEN,
  },
  tablesFilter: ['raid-drommen-dkp_*'],
} satisfies Config;
