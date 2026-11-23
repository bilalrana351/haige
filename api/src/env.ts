import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  WORKOS_CLIENT_ID: z.string().min(1, "WORKOS_CLIENT_ID is required"),
  WORKOS_API_KEY: z.string().min(1, "WORKOS_API_KEY is required"),
  /* Only needed with a custom WorkOS authentication domain. Defaults to the standard issuer. */
  WORKOS_ISSUER: z.string().url().optional(),
  CORS_ORIGINS: z
    .string()
    .default("http://localhost:3000")
    .transform((v) => v.split(",").map((o) => o.trim()).filter(Boolean)),
});

export type Env = z.infer<typeof schema>;

/* The settings Cloudflare passes to the Worker: `vars` from wrangler.jsonc plus its secrets. */
export type Bindings = {
  DATABASE_URL: string;
  WORKOS_CLIENT_ID: string;
  WORKOS_API_KEY: string;
  WORKOS_ISSUER?: string;
  CORS_ORIGINS?: string;
};

/* Fails with every missing or malformed setting listed, so a bad deploy is obvious on the first
   request instead of failing somewhere deep in a handler. */
export function loadEnv(source: Bindings): Env {
  const parsed = schema.safeParse(source);
  if (!parsed.success) {
    const problems = parsed.error.issues.map((i) => `  ${i.path.join(".")}: ${i.message}`).join("\n");
    throw new Error(`Invalid environment:\n${problems}`);
  }
  return parsed.data;
}
