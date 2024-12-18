/* eslint-disable node/prefer-global/process */
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL)
  throw new Error("DATABASE_URL is not set");

export default defineConfig({
  out: "./src/lib/server/db/migrations",
  schema: "./src/lib/server/db/schema.ts",

  dbCredentials: {
    url: process.env.DATABASE_URL,
  },

  strict: true,
  verbose: true,
  breakpoints: true,

  dialect: "sqlite",
  casing: "snake_case",
});
