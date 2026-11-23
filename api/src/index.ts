import { WorkOS } from "@workos-inc/node";
import { createApp } from "./app.js";
import { createDb } from "./db/client.js";
import { loadEnv, type Bindings } from "./env.js";
import { createTokenVerifier } from "./lib/auth.js";
import { createUserStore } from "./users.js";

function buildApp(bindings: Bindings) {
  const env = loadEnv(bindings);
  const workos = new WorkOS(env.WORKOS_API_KEY, { clientId: env.WORKOS_CLIENT_ID });
  return createApp({
    verifyToken: createTokenVerifier({
      jwksUrl: workos.userManagement.getJwksUrl(env.WORKOS_CLIENT_ID),
      issuer: env.WORKOS_ISSUER ?? `https://api.workos.com/user_management/${env.WORKOS_CLIENT_ID}`,
    }),
    users: createUserStore(createDb(env.DATABASE_URL), workos),
    corsOrigins: env.CORS_ORIGINS,
  });
}

/* Built on the first request and reused while Cloudflare keeps this instance warm, so WorkOS's
   signing keys are fetched once per instance, not once per request. */
let app: ReturnType<typeof buildApp> | undefined;

export default {
  fetch(request: Request, bindings: Bindings, ctx: ExecutionContext) {
    try {
      app ??= buildApp(bindings);
    } catch (err) {
      console.error(err);
      return Response.json({ error: "misconfigured" }, { status: 500 });
    }
    return app.fetch(request, bindings, ctx);
  },
};
