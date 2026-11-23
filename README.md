# HAIGE

AI growth engine with an agentic loop to monitor search and AI visibility, diagnose gaps, draft fixes, publish with human approval, and measure results.

HAIGE helps B2B companies get found when buyers search Google or ask ChatGPT, Gemini, and Claude who to buy from. The goal is to turn visibility research into completed, measurable work: identify where a company is missing, investigate the evidence, prepare a change, get approval, publish it, and use the next round of measurements to decide what to do next.

## The agentic loop

The intended workflow is a recurring loop, with a person approving the exact content before it goes live.

| Stage | Desired behavior |
| --- | --- |
| **Monitor** | Repeatedly run buyer questions across supported AI engines and check Google rankings for the same topics. Record dated answers, brand mentions, competitors, citations, and ranking observations. |
| **Diagnose** | Investigate visibility gaps. Identify relevant pages, passages, and cited sources, and propose explanations grounded in that evidence. |
| **Draft** | Prepare a complete proposed change: a website update, a blog post, or a reply for a relevant conversation. Include supporting evidence and the intended outcome. |
| **Approve** | Let a team member review, edit, approve, or reject the exact version. An edited draft needs approval of its new version. |
| **Publish** | Apply the approved version through a connected publishing destination and record what changed, where, and when. |
| **Measure and repeat** | Run the same questions and ranking checks again, compare dated observations, and use the findings to prioritize the next action. |

The agent should carry the work from observation through a proposed action and follow-up measurement. Human feedback and measured outcomes should inform subsequent runs.

## Intended functionality

- **Company onboarding:** Capture the website, products, buyers, competitors, and questions the company wants to be found for.
- **Search and AI monitoring:** Track Google rankings and how often supported AI engines name the company or its competitors for a stable set of buyer questions.
- **Evidence-backed opportunities:** Show the observations and sources behind each proposed change, including what remains uncertain.
- **Content and distribution:** Prepare website and blog improvements, plus relevant contributions for channels such as Reddit, LinkedIn, and X. Publishing depends on available integrations and the accounts the team connects.
- **A review queue:** Present proposed content, destination, and rationale so a person can approve, request changes, or reject it before publication.
- **Action and outcome history:** Connect observations, drafts, approvals, publications, and subsequent measurements so the team can inspect the full loop.

### Product principles

- Nothing publishes without explicit human approval of the exact version.
- Use only the sources and publishing accounts the team connects; connections should be revocable.
- Preserve dated, repeated observations rather than reducing AI visibility to one unexplained score.
- Separate observed changes from claims about what caused them. AI answers vary, and a ranking change alone does not prove an action worked.

## Current implementation

This repository contains the initial web and API foundation. **The agentic growth loop described above is the intended product; it is not implemented yet.**

| Area | Present in the code |
| --- | --- |
| Public website | HAIGE landing page, product explanation, FAQs, and visual assets. |
| Authentication | WorkOS AuthKit sign-up, sign-in, callback, protected app page, and sign-out. |
| API | Hono on Cloudflare Workers with `GET /health` and authenticated `GET /v1/me`. |
| User storage | Neon Postgres and a Drizzle migration for local user records, created on the first authenticated API request. |
| Workspace and growth loop | Still to build: onboarding, monitoring jobs, diagnosis, drafting, approval records, publishing integrations, and outcome tracking. |

## Repository layout

```text
haige/
├── README.md
├── api/                    # Hono API, Cloudflare Worker, Drizzle schema and migrations
└── web/                    # Next.js website and authenticated app foundation
    └── docs/               # Design system and website research
```

Both applications retain their own package manifests and lockfiles. Install and run them from their respective directories.

## Local development

Use Node.js 22 or newer and pnpm 10.33.0. WorkOS credentials and a Postgres database, such as Neon, are required for the authenticated flow.

### API

```sh
cd api
corepack pnpm install
cp .dev.vars.example .dev.vars
# Fill in DATABASE_URL, WORKOS_CLIENT_ID, WORKOS_API_KEY, and CORS_ORIGINS.
corepack pnpm db:migrate
corepack pnpm dev
```

The API runs at `http://localhost:8787`. Migrations apply to the database named by `DATABASE_URL`.

### Web app

In a second terminal, starting from the repository root:

```sh
cd web
corepack pnpm install
cp .env.example .env.local
# Fill in the WorkOS settings and set HAIGE_API_URL=http://localhost:8787.
corepack pnpm dev
```

The web app runs at `http://localhost:3000`. Use the same WorkOS client ID in both applications, configure `http://localhost:3000/callback` as a WorkOS redirect URI, and set a cookie password of at least 32 characters. Keep real credentials in the ignored local environment files.

See [api/README.md](api/README.md) for API settings, endpoints, migrations, and deployment, and [web/README.md](web/README.md) for web configuration and checks.

## Development checks

Run these from the repository root after installing each application's dependencies:

```sh
corepack pnpm --dir api typecheck
corepack pnpm --dir web lint
corepack pnpm --dir web build
```

## Deployment

The intended deployment keeps the web app on Vercel and the API on Cloudflare Workers, with Neon for Postgres and WorkOS for identity. When connecting this consolidated repository, use `web/` as the Vercel project root and run Worker deployment commands from `api/`. Configure production environment variables, allowed origins, and WorkOS redirects for the deployed URLs.
