# HAIGE landing page — design token research (Firecrawl scrapes, 2026-09-21)

Method: `firecrawl scrape <url> --format markdown,rawHtml` for 14 homepages, then a second
Firecrawl pass on the linked stylesheets (`--format rawHtml` on the `.css` URLs) so the real
`:root` variables, `@font-face` families, radii and container widths could be grepped rather
than guessed. Local greps only — no other web tool was used.

Raw artifacts (this scratchpad): `fc/*.json` (markdown + rawHtml per site), `css/*.css`
(fetched stylesheets), `srch/s1..s3.txt` (search results).

Scrape status: 13/14 captured. **mintlify.com blocked every Firecrawl engine** (index,
chrome-cdp, retry) — no data. Cursor's marketing CSS chunks return a 227-byte stub, so Cursor
tokens come from its inline `<style>` + Tailwind arbitrary classes in the rendered HTML.

---

## 1. Token table

| Site | Theme | Font (primary / mono·display) | Accent hex | Body bg hex | Radius | Container | Primary CTA |
|---|---|---|---|---|---|---|---|
| [linear.app](https://linear.app) | Dark | InterVariable / `var(--font-monospace)` | `#5E6AD2` (+ pastels `#8FA4FF` `#55CDFF` `#F79CE0` `#FFC47C` `#89D196`) | `#08090A` (meta theme-color); text `#E2E4E7` | `--button-corner-radius: var(--radius-rounded)`; base `8px`, `4px`, `6px`, `1rem` | prose `640px`; grid `1024/1280px` | "Sign up" / "Get started" |
| [attio.com](https://attio.com) | Light | Inter + **Inter Display** / Tiempos Text (serif pull-quotes) | `#266df0`; mint `#e0fced`, `#cbf7e1`, green `#007d53` | `#fff`; text `#242629`, muted `#75777C` | `rounded-lg` (168×), `full` (121×), literal `4/6/8/10px` | text col `560px`, cards `352px`/`22em` | "Start for free" + "Talk to sales" + "Send me a demo" |
| [clay.com](https://clay.com) | Light warm ("oat") | Roobertvf / **Canela Web** (serif secondary) | blueberry `#3859f9`, ube `#7934f0`, lemon `#fcbe11`, dragonfruit `#cc089e`, tangarine `#fa6900` | oat-100 `#f9f8f6` / oat-200 `#f3f2ed` | button `.5rem`; **card `0rem`** | fluid: `--fluid--min: 20rem` → `--fluid--max: 90rem` (1440px) | "Start free trial" + "Get a demo" |
| [tryprofound.com](https://tryprofound.com) | Dark | Inter Variable (`font-feature-settings:"cv01","ss03","cv05"`) / Tailwind mono | panel `#1B1B1B`, `#232323`; blue `#3569FA` | `#08090A` | Tailwind `--radius-xs .125rem` → `3xl`; `rounded-lg` dominant (164×) | `40/48/64/80rem` scale; hero `704px` | "Get a demo" + "Get started" |
| [withgauge.com](https://withgauge.com) | Dark teal | **Switzer** (body) / **Px Grotesk** + Px Grotesk Mono (headings) | **neon lime `#e8ff3f`**; ice `#b8e6f6`, glacier `#bbe6f6`, olive `#92a501` | `#051b23` (deep-ocean-blue); surface `#23232a`, charcoal `#1a1a1f` | **near-zero**: `0`, `2px`, `.25rem`, `.3125rem`, `.375rem`; `rounded-full` only for pills | `max-w-[80rem]` (1280px, 26×) | "Start for free" + "Book a demo" |
| [athenahq.ai](https://athenahq.ai) | Light | Space Grotesk + Open Sans | `#335cff` (`--button-primary`), focus `#476cff` | `#fbfbfb` (meta theme-color); text `#171717`, muted `#5c5c5c`, line `#ebebeb` | button `.375rem`, card/dialog `1.25rem`, accordion `.625rem`, pill `9999px` | 480 / 740 / 800 / 1280px | "Get Free Audit (10m)" + "Book a Demo" |
| [resend.com](https://resend.com) | Dark | **ABC Favorit** (display) + Inter / **Commit Mono**, Domaine (serif) | near-monochrome; green `#00c758`, blue `#3080ff` used sparingly | `#000000` | `rounded-full` (199×), `2xl` (65×), `md` (58×) | `5xl 64rem` / `7xl 80rem` | "Get started" + "Documentation" |
| [cursor.com](https://www.cursor.com) | Light warm / dark warm | custom sans + `CursorIcons16` | selection `#8BC4F8`; blue `#3b82f6` | `#f7f7f4` light / `#14120b` dark (both in meta) | `rounded-sm` (67×) + `full` (65×) — deliberately tight | body copy `max-w-[580px]`, `[48ch]` | "Get started →" + "Request a demo →" + platform download |
| [vercel.com](https://vercel.com) | Light (dual) | **Geist Sans** / Geist Mono + Geist Pixel (display) | monochrome inversion (no hue); `--ds-gray-1000 #171717`/`#ededed` | `--ds-background-100: #fff` (dark `#000`), `-200: #fafafa`; meta `#FAFAFA` | `md .375rem` (130×), `sm .25rem` (81×), `6px`, `12px` | `960px` (62×) and `600px` (53×) dominate | "Deploy now" + "Talk to sales" |
| [sierra.ai](https://sierra.ai) | Light warm | **GT America** / GT America Mono | green `#006838`, red `#e94e2a`; black is `#222` not `#000` | `#ffffff`; greys `#f6f5f3`, `#e4e0dc`, `#302e2d` | `2xl` (1rem, 37×) + `full` (32×) only | `max-w-[1160px]`; measure `max-w-[50ch]` (30×) | "Learn more" (single CTA) |
| [decagon.ai](https://decagon.ai) | Dark | `--font-family--body` (Helvetica Neue stack) | indigo `#272591` / `#5754FF`, tint `#C3C2FF` | `#0A0A0B` | `3px`, `6px`, `28px` | `1232px` / `1200px` | "Contact Sales" + inline work-email capture in hero |
| [posthog.com](https://posthog.com) | Light warm | **RoundHog** (custom) + Squeak (display) + IBM Plex Sans / Source Code Pro | orange `#f54e00`; teal `#53FFCB`, blue `#0079FF` | `#E5E7E0` (meta); dark surface `#1e1f23` | `.25rem` (13×), `9999px`, `4px`, `2px` | `80rem`/`7xl`; prose `42rem` | "Get started – free" + "Talk to a human" |
| [raycast.com](https://www.raycast.com) | Dark | Inter / **Geist Mono** (+ JetBrains Mono, VT323 for accents) | blue `#63A1FF` / `#143CA3`; red `#FF6363` | `#07080A`, panel `#0F1013`; text `#D8D8D8` | `var(--rounding-sm/md/lg)` → literal `4px`, `6px`, `12px`, `16px` | page `1204px`/`1064px`; **body copy `720px`** | "Download for Mac" |
| mintlify.com | — | — | — | — | — | — | blocked by anti-bot |

### Nav heights actually measured
`h-11` = 44px (Vercel), `h-10` = 40px (Sierra, Gauge, Attio, Resend), `h-12` = 48px (Profound),
`64px` (AthenaHQ header), `104px` (Decagon, oversized). **40–48px is the modern default**;
anything ≥64px reads as 2021.

### Type-scale evidence
- **Profound / Gauge / Resend / Sierra** ship stock Tailwind v4 scale: `--text-xs .75rem`,
  `sm .875rem`, `base 1rem`, `lg 1.125rem`, `xl 1.25rem`, `2xl 1.5rem`, `3xl 1.875rem`,
  `4xl 2.25rem`, `5xl 3rem`, `7xl 4.5rem`, `9xl 8rem`, with computed line-heights
  (`calc(1.25 / .875)` etc.) and `--tracking-tight -.025em`, `--tracking-tighter -.05em`.
- **Gauge** overrides with fluid clamps instead of breakpoints:
  `clamp(2.75rem, 5.5vw, 4.75rem)` hero, `clamp(2.5rem, 6vw, 3.6rem)` section H2,
  `clamp(2rem, 4.5vw, 3rem)`, `clamp(1.4rem, 2.6vw, 2.2rem)`, base `clamp(16px, .833vw + 4px, 20px)`.
- **Gauge body rule** (worth copying verbatim):
  `letter-spacing:-.02em; -webkit-font-smoothing:antialiased; line-height:1.5`.
- **Profound body rule**: `font-feature-settings:"cv01","ss03","cv05"` — Inter's single-storey
  `a`/straight `l`, which is why Profound's Inter doesn't look like everyone else's Inter.
- **Clay** spacing token ladder: `.25 / .5 / 1 / 1.25 / 1.5 / 2 / 3 / 4 / 5 / 6rem`;
  section padding `4rem` (md) → `6rem` (lg); grid gaps `8 / 24 / 40px`.
- **Raycast body rule**: `max-width:720px; font-size:16px; font-weight:500; line-height:1.7;
  letter-spacing:.2px; text-align:center` — the one site in this set that centres its prose and
  goes *positive* on tracking, because it is consumer-facing rather than B2B.
- Base body size is `14px`/`.875rem` on the dense B2B sites (Attio's most common size class is
  `text-[14px]`, 218×; AthenaHQ's `--button-font-size: .875rem`) and `16px` on the marketing-led
  ones (Clay `--button--font-size: 1rem`).

---

## 2. Hero copy, verbatim

| Site | H1 | Subhead | CTAs |
|---|---|---|---|
| Linear | "The product development system for teams and agents" | "Purpose-built for planning and building products. Designed for the AI era." | Sign up · (announcement pill "New — Loops →") |
| Attio | "Welcome to agentic revenue." | "Attio is the CRM that builds pipeline, advances deals, and grows accounts around the clock." | Start for free · Talk to sales · Send me a demo |
| Clay | "Build systems to grow revenue" | "Infrastructure to get any data, run agentic workflows, and launch GTM plays." | Start free trial · Get a demo ("or install directly with" → agent install snippet) |
| Profound | "The AI marketing platform to win in **[ChatGPT / Perplexity / Claude / Gemini / Grok / Copilot / DeepSeek / AI Overviews]**" (rotating word) | "Multiply what you can accomplish with an AI Marketer trained on what consumers prompt, what agents cite, and the context only your teams have." | Get a demo · Get started |
| Gauge | "Be the Answer for AI" | "Reach the millions of users exploring ChatGPT, Gemini, Perplexity, Claude Code, and more." | Start for free · Book a demo |
| AthenaHQ | "Become the Brand AI Trusts" | H2 "See, Act, and Win on AI Search and Beyond" | Get Free Audit (10m) |
| Resend | "Email for developers" | "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale." | Get started · Documentation |
| Cursor | "Cursor is your coding agent for building ambitious software." | — (goes straight to CTAs) | Download for <OS> · Get started → · Request a demo → |
| Vercel | "Agentic Infrastructure" | "To ship apps and agents / For coding agents … automated by agents." (three-clause rotator) | Deploy now · Talk to sales |
| Sierra | "Better outcomes. Built on Sierra." | — (live agent conversation is the subhead) | Learn more |
| Decagon | "The AI concierge for every customer" | "Build, optimize, and scale AI agents that treat every customer like the only one." | Work-email field inline + Contact Sales |
| PostHog | "Give your agents product context" | "PostHog combines and stores your analytics, errors, replays, and business data so you and your agents can understand and act on it." | Get started – free · Talk to a human |
| Raycast | "Your shortcut to everything." | "A collection of powerful productivity tools all within an extendable launcher. Fast, ergonomic and reliable." | Download for Mac (+ "Install via Homebrew") |

---

## 3. Section-order patterns

**The shape almost everyone uses (13/13 variations of it):**

1. Announcement pill / ticker above the nav (Linear "New — Loops", Clay event bar, Gauge
   "Selling to coding agents instead?", Attio "Orchestrate revenue agents with Workflows",
   AthenaHQ "State of AI Search 2026"). Cheap, dated, and every single one of them ships it.
2. Hero: H1 + one-sentence subhead + 1–2 CTAs. Never three visual weights of CTA — the second
   is always a ghost/text link.
3. **Product surface immediately after the hero, not a feature grid.** Linear renders a real
   issue view; Profound renders the AI Marketer workspace; Attio renders the CRM sidebar;
   Sierra renders a live agent conversation; Cursor an interactive editor demo. This is the
   single strongest shared pattern and it is HAIGE's biggest problem — pre-launch, no screenshots.
4. Logo wall ("Trusted by…", "Empowering Next-Gen Marketing Teams at"). Row 2 or 3, never later.
5. Problem framing — only the AI-visibility companies do this, and they do it hard.
   Gauge stacks three full-width H2 statements: *"Millions of buying questions are answered by
   AI every day." → "In most of those answers, your brand is missing." → "Gauge finds every gap
   and fills it."* AthenaHQ uses a stat quote: *"50% of traditional search traffic will be
   replaced with generative AI by 2028 — Gartner."*
6. Capability sections, 3–5 of them, each a verb: Gauge "Track / Understand / Act";
   Linear "Intake and integrations / Planning and monitoring / AI and automations /
   Build, review, and ship"; Vercel three "Build … / Ship … / Host …" H2s.
7. Proof: numbers or customer stories ("The results speak for themselves" — Sierra;
   "Trusted by 30,000+ customers" — Attio; "Instant ROI on the metrics that matter" — Decagon).
8. Platform/trust section (Attio "Run at any scale", Sierra "Trust and reliability",
   Profound "Enterprise capabilities trusted by a third of the Fortune 100").
9. Changelog / velocity proof — Linear "Changelog", Cursor "Recent highlights",
   Vercel "Recently shipped", Attio "Better as you grow. New features every week."
10. FAQ — only on the newer AI-native sites (Gauge, AthenaHQ). The established ones skip it.
11. Closing CTA as a short declarative sentence, not a question:
    Linear "Built for the future. Available today." · Resend "Email reimagined. Available today." ·
    Attio "Agentic revenue runs on Attio." · Cursor "Try Cursor now." ·
    Raycast "Take the short way." · Gauge "Stop Prompting and Start Measuring".

**Directly relevant for HAIGE:** the three AI-visibility comparables (Profound, Gauge, AthenaHQ)
all put the *category-shift argument* before the product. HAIGE's differentiator —
human-approval-before-publish — has no analogue in any of them; none of the three sells
supervision. That gap is the positioning wedge and it should be a named section, not a bullet.

---

## 4. Anti-slop learnings

Sources: [prg.sh — Why Your AI Keeps Building the Same Purple Gradient Website](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website) ·
[dev.to — Blame Tailwind's Indigo-500](https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p) ·
[Medium — Why AI-Built Websites All Look the Same](https://medium.com/@ketanmk26/why-ai-built-websites-all-look-the-same-and-what-to-do-about-it-5b7576590a13) ·
[r/vibecoding thread](https://www.reddit.com/r/vibecoding/comments/1oskop4/is_it_just_me_or_are_all_aigenerated_components/) ·
[The AI Purple Problem (YouTube, w/ Adam Wathan)](https://www.youtube.com/watch?v=AG_791Y-vs4)

The origin story is documented: Adam Wathan used `bg-indigo-500` in the original Tailwind UI
demos, that became the highest-frequency button colour in the training corpus, and every model
now reaches for violet/indigo by default. The tells that follow are all defaults, not decisions.

**Rules derived, each backed by what the scrapes actually show:**

1. **No violet/indigo, and no gradient hero.** Of 13 sites, the accents are: indigo-ish only at
   Linear `#5E6AD2` and Decagon `#272591` — both muted and both paired with near-black. The rest
   are lime `#e8ff3f`, orange `#f54e00`, blue `#266df0`/`#335cff`, green `#006838`, or literally
   no hue at all (Vercel, Resend). For HAIGE, a signal/measurement product, a saturated
   non-purple accent on a dark neutral is the honest read of the field.
2. **One accent, everything else neutral.** Gauge is the cleanest example: `#e8ff3f` against
   `#051b23` and nothing else competing. Vercel goes further and ships zero brand hue — its
   "accent" is background inversion.
3. **Warm your neutrals.** Sierra's black is `#222`, its greys `#f6f5f3`/`#e4e0dc`. Cursor is
   `#f7f7f4`/`#14120b`. PostHog is `#E5E7E0`. Nobody premium ships `#ffffff` on `#000000` with
   `gray-500` text — that combination is the giveaway.
4. **Tighten the radius.** Modal AI output is `rounded-xl`/`2xl` everywhere. Real sites:
   Vercel `.375rem`, Gauge `0`–`2px`, Cursor `rounded-sm`, Sierra one value (`1rem`) plus pills.
   Pick one radius and one pill, not a ladder.
5. **Pay for the typeface, or configure the free one.** Custom faces are near-universal:
   Geist (Vercel), GT America (Sierra), ABC Favorit + Commit Mono (Resend), Roobert + Canela
   (Clay), Switzer + Px Grotesk (Gauge), RoundHog (PostHog), Inter Display (Attio). Where Inter
   is used it is *tuned* — Profound's `cv01/ss03/cv05`, Clay's `ss03/ss10/ss11/ss12`. Stock Inter
   at default settings is itself a slop tell.
6. **Negative tracking on display sizes.** `--tracking-tight -.025em` / `-.05em` in every
   Tailwind build; Gauge applies `-.02em` to `body` globally.
7. **Four type sizes on the page, max** ([Unbounce](https://unbounce.com/landing-page-typography/)).
   Desktop hero 35–50px is the conversion-tested range
   ([Reform](https://www.reform.app/blog/font-size-impacts-landing-page-conversions));
   the scraped heroes sit at 44–76px (Gauge clamps 44→76px, Resend `text-[3.5rem]`).
8. **One primary CTA above the fold.** The
   [Orbix self-check](https://www.orbix.studio/blogs/saas-landing-page-examples) calls
   "Start free + Book demo + See pricing" a fail; Attio and Cursor each ship exactly one filled
   button with the rest as text links. Sierra ships one CTA, full stop.
9. **Constrain the measure.** Sierra `max-w-[50ch]` used 30×; Cursor `max-w-[580px]`; Linear
   prose `640px`. Full-width paragraphs read as template output.
10. **Container 1160–1280px, nav 40–48px.** Sierra 1160, Gauge/Linear 1280, Vercel 960 for
    content bands. Full-bleed 1536px containers are a tell.
11. **Replace the missing screenshot with structured truth, not a stock illustration.**
    Every comparable leads with product surface; HAIGE has none. The defensible substitutes
    visible in this set: a rendered artifact (Clay's install snippet, PostHog's
    `npx @posthog/wizard` line), a scripted conversation (Sierra), or a diagram of the loop
    (monitor → diagnose → draft → **human approves** → publish → measure). The approval gate is
    the one frame no competitor can show.
12. **Skip the announcement pill** unless there is genuinely something to announce. It is the
    most-copied element in this set and the least load-bearing.
13. **Motion that reports, not decorates.** Rotating nouns are used by both Profound
    (the engine list) and Vercel (the three-clause hero) because the rotation *is* the claim.
    Fade-in-on-scroll everywhere is the thing reviewers flag as AI-generated.

Additional search notes:
[SaaSFrame 2026 trends](https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples),
[DesignKey](https://www.designkey.studio/post/saas-website-design-patterns-that-convert-2026)
("hero illustrations are out"), and
[Digital Applied](https://www.digitalapplied.com/blog/design-systems-2026-scale-ui-without-chaos-methodology)
("the opportunity in 2026 is not to start using tokens — most teams already do — it is to make the
token graph the single source of truth"). None of these add anything the scraped CSS doesn't show
more precisely; the scrapes are the better source.

---

## 5. Suggested starting token set for HAIGE

Derived from Gauge (closest category + best dark-tech execution), Vercel (neutral discipline)
and Sierra (warm greys, single radius):

```
--bg:            #0B0F10   /* warm-cooled near-black, not #000 */
--surface:       #14191B
--hairline:      #ffffff14 /* Gauge's exact alpha hairline token */
--text:          #E6E8E7
--text-muted:    #8A928F
--accent:        <one saturated signal hue, not violet — e.g. #E8FF3F, #00C758 or #FF6B2C>
--radius:        4px       /* single value */
--radius-pill:   9999px
--container:     1200px
--nav-h:         44px
--measure:       58ch
--font-sans:     <licensed grotesk>, Inter, system-ui
--font-mono:     <mono for metrics/evidence readouts>
letter-spacing:  -0.02em on body, -0.035em on display
line-height:     1.5 body / 1.05 display
type:            clamp(2.75rem, 5.5vw, 4.5rem) h1 · 3rem h2 · 1.25rem lead · 1rem body · .875rem meta
```

Mono is doing real work here: HAIGE's content is evidence — citations, deltas, prompt strings,
visibility scores. Gauge and Vercel both use a mono face for exactly that class of data.
