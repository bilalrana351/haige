import { Hono } from "hono";
import { cors } from "hono/cors";
import { requireAuth, type AuthVariables, type TokenVerifier } from "./lib/auth.js";
import { meRoutes } from "./routes/me.js";
import type { UserStore } from "./users.js";

export type AppDeps = {
  verifyToken: TokenVerifier;
  users: UserStore;
  corsOrigins: string[];
};

export function createApp(deps: AppDeps) {
  const app = new Hono<{ Variables: AuthVariables }>();

  app.use("*", cors({ origin: deps.corsOrigins, allowHeaders: ["Authorization", "Content-Type"] }));

  /* No database or WorkOS call, so a host's health check never wakes the database. */
  app.get("/health", (c) => c.json({ ok: true }));

  /* Everything under /v1 needs a valid access token. */
  app.use("/v1/*", requireAuth(deps.verifyToken));
  app.route("/v1/me", meRoutes(deps.users));

  app.notFound((c) => c.json({ error: "not_found" }, 404));
  app.onError((err, c) => {
    console.error(err);
    return c.json({ error: "internal_error" }, 500);
  });

  return app;
}
