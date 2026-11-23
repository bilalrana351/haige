import { Hono } from "hono";
import type { AuthVariables } from "../lib/auth.js";
import type { UserStore } from "../users.js";

/* The signed-in user and their current workspace context. */
export function meRoutes(users: UserStore) {
  return new Hono<{ Variables: AuthVariables }>().get("/", async (c) => {
    const auth = c.get("auth");
    const user = await users.getOrCreate(auth.userId);
    return c.json({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      organizationId: auth.organizationId,
      role: auth.role,
      permissions: auth.permissions,
    });
  });
}
