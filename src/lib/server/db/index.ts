import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';

if (!env.DATABASE_URL)
  throw new Error('DATABASE_URL is not set');

export const db = drizzle({
  connection: env.DATABASE_URL,
  casing: 'snake_case',
  logger: true,
  schema,
});
