import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

/* Local record for a signed-in person. WorkOS owns identity; `id` is the WorkOS user ID, so there
   is no second identifier to keep in step. Created the first time the user calls the API. */
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export type User = typeof users.$inferSelect;
