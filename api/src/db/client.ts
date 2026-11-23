import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema.js";

/* Each query is one HTTPS request to Neon. A Worker cannot hold a connection pool open between
   requests, and this also lets the database sleep as soon as the query returns. */
export function createDb(url: string) {
  return drizzle(neon(url), { schema });
}

export type Db = ReturnType<typeof createDb>;
