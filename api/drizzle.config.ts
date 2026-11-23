import { existsSync } from "node:fs";
import { defineConfig } from "drizzle-kit";

/* drizzle-kit runs in Node on your machine, not in the Worker, so it reads the same local
   settings file `wrangler dev` uses. */
if (!process.env.DATABASE_URL && existsSync(".dev.vars")) process.loadEnvFile(".dev.vars");

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: { url: process.env.DATABASE_URL ?? "" },
});
