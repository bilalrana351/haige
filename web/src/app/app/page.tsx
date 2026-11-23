import { signOut, withAuth } from "@workos-inc/authkit-nextjs";
import { Container, Wordmark, buttonStyles } from "@/components/ui";

/* Tells the API who just signed in, so it creates its own record for them. A failure here must
   not block the page: the API retries the same step on the user's next request. */
async function registerWithApi(accessToken: string) {
  const base = process.env.HAIGE_API_URL;
  if (!base) return;
  try {
    const res = await fetch(`${base}/v1/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
      /* Never hold the page for a slow or unreachable API. */
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) console.error(`HAIGE API /v1/me responded ${res.status}`);
  } catch (err) {
    console.error("HAIGE API is unreachable:", err);
  }
}

/* Where to land after logging out: the site that handled sign-in. Falls back to the default
   sign-out address configured in WorkOS when the variable is missing. */
function siteOrigin() {
  const redirect = process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI;
  return redirect ? new URL(redirect).origin : undefined;
}

/* The signed-in landing spot. Workspace setup will replace this once onboarding is built. */
export default async function AppHome() {
  const { user, accessToken } = await withAuth({ ensureSignedIn: true });
  await registerWithApi(accessToken);

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header>
        <Container className="flex h-16 items-center justify-between">
          <Wordmark />
          <form
            action={async () => {
              "use server";
              await signOut({ returnTo: siteOrigin() });
            }}
          >
            <button type="submit" className={buttonStyles.ghost}>
              Log out
            </button>
          </form>
        </Container>
      </header>

      <main className="flex flex-1 items-center">
        <Container className="flex flex-col items-center py-20 text-center">
          <h1 className="max-w-[14em] text-balance text-h2">
            {user.firstName ? `Welcome, ${user.firstName}.` : "Welcome."}{" "}
            <span className="text-ink-2">Your account is ready.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-pretty text-lead text-ink-2">
            You are signed in as <span className="text-ink">{user.email}</span>. Setting up your
            workspace is the next step, and it is not built yet.
          </p>
        </Container>
      </main>
    </div>
  );
}
