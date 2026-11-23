import { eq } from "drizzle-orm";
import type { WorkOS } from "@workos-inc/node";
import type { Db } from "./db/client.js";
import { users, type User } from "./db/schema.js";

export type UserStore = { getOrCreate(userId: string): Promise<User> };

/* The access token carries only the user's ID. The first time we see an ID, the profile is read
   from WorkOS once and stored; after that the API answers from its own database. */
export function createUserStore(db: Db, workos: WorkOS): UserStore {
  return {
    async getOrCreate(userId) {
      const [existing] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
      if (existing) return existing;

      const profile = await workos.userManagement.getUser(userId);
      const [created] = await db
        .insert(users)
        .values({
          id: profile.id,
          email: profile.email,
          firstName: profile.firstName,
          lastName: profile.lastName,
        })
        /* Two first requests can race; the loser keeps the winner's row. */
        .onConflictDoNothing()
        .returning();
      if (created) return created;

      const [row] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
      if (!row) throw new Error(`User ${userId} could not be created`);
      return row;
    },
  };
}
