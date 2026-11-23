# haige-api

Backend for HAIGE. Hono on Cloudflare Workers, TypeScript, Drizzle and Neon Postgres. Sign-in is handled by WorkOS AuthKit in the web app; this service verifies the access tokens it issues.

## Run it locally

```sh
corepack pnpm install
cp .dev.vars.example .dev.vars   # then fill in the values
corepack pnpm db:migrate         # creates the tables in DATABASE_URL
corepack pnpm dev                # http://localhost:8787
```

## Settings

| Name | Where it lives | What it is |
|---|---|---|
| `DATABASE_URL` | secret | Neon connection string (pooled). |
| `WORKOS_API_KEY` | secret | WorkOS secret key. Used to read a user's profile the first time they call the API. |
| `WORKOS_CLIENT_ID` | `vars` in `wrangler.jsonc` | Same client ID the web app uses. |
| `CORS_ORIGINS` | `vars` in `wrangler.jsonc` | Comma-separated browser origins allowed to call the API. |

Locally, all four are read from `.dev.vars`. In production, set the secrets once:

```sh
corepack pnpm wrangler secret put DATABASE_URL
corepack pnpm wrangler secret put WORKOS_API_KEY
```

## Deploy

```sh
corepack pnpm run deploy
```

## Endpoints

| Route | Auth | Returns |
|---|---|---|
| `GET /health` | none | `{ ok: true }`. Touches neither the database nor WorkOS. |
| `GET /v1/me` | bearer token | The signed-in user, plus organization ID, role and permissions from the token. |

Everything under `/v1` requires `Authorization: Bearer <WorkOS access token>`. The token's signature, issuer and expiry are checked against WorkOS's published keys (`src/lib/auth.ts`).

## Layout

- `src/index.ts` is the Worker entry. It builds the app from Cloudflare's bindings on the first request.
- `src/app.ts` builds the Hono app from its dependencies.
- `src/lib/auth.ts` verifies tokens and exposes `requireAuth`.
- `src/users.ts` keeps the local `users` row for a WorkOS user.
- `src/db/client.ts` connects to Neon over HTTPS, one request per query.
- `src/db/schema.ts` is the Drizzle schema; migrations are generated into `drizzle/`.

## Database changes

Migrations run from your machine with drizzle-kit, not from the Worker. Edit `src/db/schema.ts`, then:

```sh
corepack pnpm db:generate  # writes a SQL migration into drizzle/
corepack pnpm db:migrate   # applies it
```
