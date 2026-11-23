import { authkitProxy } from "@workos-inc/authkit-nextjs";

/* Session handling for the signed-in area only. The marketing page stays static and never runs
   this. Pages under /app decide for themselves whether a signed-in user is required. */
export default authkitProxy();

export const config = { matcher: ["/app", "/app/:path*"] };
