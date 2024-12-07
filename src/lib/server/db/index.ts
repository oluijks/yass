import { DATABASE_URL } from "$env/static/private";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

if (!DATABASE_URL)
  throw new Error("DATABASE_URL is not set");

export const db = drizzle({
  connection: DATABASE_URL,
  casing: "snake_case",
  logger: true,
  schema,
});
