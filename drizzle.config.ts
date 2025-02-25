import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({
    path: '.env.local'
});

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
}

export default {
    schema: './server/schema.ts',
    out: './server/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL
    },
} satisfies Config;