# HAIGE web

The public website and authenticated web app foundation for HAIGE. Built with Next.js 16, React 19, Tailwind CSS v4, Motion, Phosphor Icons, and WorkOS AuthKit.

See the [root README](../README.md) for the intended product and agentic growth loop. The current signed-in page confirms the user's account; workspace onboarding and the growth workflow are still to be built.

## Run locally

From this directory:

```sh
corepack pnpm install
cp .env.example .env.local
# Fill in the settings below before starting.
corepack pnpm dev
```

Open `http://localhost:3000`.

## Configuration

| Variable | Purpose |
| --- | --- |
| `WORKOS_CLIENT_ID` | WorkOS application client ID; use the same value as the API. |
| `WORKOS_API_KEY` | WorkOS secret API key. |
| `WORKOS_COOKIE_PASSWORD` | Session encryption password of at least 32 characters. |
| `NEXT_PUBLIC_WORKOS_REDIRECT_URI` | Callback URL registered in WorkOS; locally, `http://localhost:3000/callback`. |
| `HAIGE_API_URL` | API base URL, locally `http://localhost:8787`. When unset, the app skips API registration. |

Keep real credentials in `.env.local`, which is ignored by Git. The protected `/app` page calls `GET /v1/me` with the WorkOS access token to create or retrieve the API's local user record. A failed API call does not block that page.

## Checks

```sh
corepack pnpm lint
corepack pnpm build
```

## Design

[docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) documents the design tokens, typography, and component rules. Supporting website research is in `docs/research/`; CSS tokens are in `src/app/globals.css`.

## Deployment

For Vercel, set the project root to `web/` in the consolidated repository. Configure the environment variables above, register the production callback URL in WorkOS, and allow the web origin in the API's CORS settings.
