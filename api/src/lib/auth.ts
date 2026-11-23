import { createMiddleware } from "hono/factory";
import { createRemoteJWKSet, jwtVerify, type JWTVerifyGetKey } from "jose";

/* Who is calling, as stated by a verified WorkOS access token. Organization fields are absent
   until the user has picked or created a workspace. */
export type AuthContext = {
  userId: string;
  sessionId: string | null;
  organizationId: string | null;
  role: string | null;
  permissions: string[];
};

export type TokenVerifier = (token: string) => Promise<AuthContext>;

export type AuthVariables = { auth: AuthContext };

/* Checks the token's signature against WorkOS's published keys, plus issuer and expiry. Nothing
   in the token is trusted before that. */
export function createTokenVerifier(options: { jwksUrl: string; issuer: string }): TokenVerifier {
  const keys: JWTVerifyGetKey = createRemoteJWKSet(new URL(options.jwksUrl));
  return async (token) => {
    const { payload } = await jwtVerify(token, keys, { issuer: options.issuer });
    if (typeof payload.sub !== "string" || payload.sub === "") {
      throw new Error("Token has no subject");
    }
    return {
      userId: payload.sub,
      sessionId: typeof payload.sid === "string" ? payload.sid : null,
      organizationId: typeof payload.org_id === "string" ? payload.org_id : null,
      role: typeof payload.role === "string" ? payload.role : null,
      permissions: Array.isArray(payload.permissions)
        ? payload.permissions.filter((p): p is string => typeof p === "string")
        : [],
    };
  };
}

/* Requires `Authorization: Bearer <access token>`. The reason a token failed is logged, not
   returned, so the response does not help someone probing with forged tokens. */
export function requireAuth(verify: TokenVerifier) {
  return createMiddleware<{ Variables: AuthVariables }>(async (c, next) => {
    const header = c.req.header("authorization") ?? "";
    const token = header.match(/^Bearer\s+(.+)$/i)?.[1];
    if (!token) return c.json({ error: "unauthorized" }, 401);
    try {
      c.set("auth", await verify(token));
    } catch (err) {
      console.warn("Rejected access token:", err instanceof Error ? err.message : err);
      return c.json({ error: "unauthorized" }, 401);
    }
    await next();
  });
}
