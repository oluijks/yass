import { dev } from "$app/environment";
import { DATABASE_URL } from "$env/static/private";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema.js";

if (!DATABASE_URL)
  throw new Error("DATABASE_URL is not set");

export const db = drizzle({
  connection: DATABASE_URL,
  casing: "snake_case",
  logger: dev,
  schema,
});
