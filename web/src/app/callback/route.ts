import { handleAuth } from "@workos-inc/authkit-nextjs";

/* The site's public address. Behind a proxy or tunnel the server sees its internal host, so the
   post-sign-in redirect is built from the configured redirect URI, not from the request. */
const redirectUri = process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI;
const baseURL = redirectUri ? new URL(redirectUri).origin : undefined;

/* WorkOS redirects here after sign-in or sign-up. Must match NEXT_PUBLIC_WORKOS_REDIRECT_URI and
   the redirect URI configured in the WorkOS dashboard. */
export const GET = handleAuth({ returnPathname: "/app", baseURL });
