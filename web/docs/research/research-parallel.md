# HAIGE landing page — research findings

Research run 2026-09-21 via Parallel (search + extract). All claims carry a source URL.
Context: HAIGE, a pre-launch B2B SaaS "human-supervised visibility agent". Web app + Slack.
No product screenshots exist and none will be fabricated. Constraints that follow are written
with that in mind.

---

## 1. B2B SaaS / AI-product landing page best practices, 2025–2026

### 1.1 The canonical structure

The oldest and still most-cited framework is Julian Shapiro's, which reduces the whole page to
one equation:

> **Purchase Rate = Desire − (Labor + Confusion)**
> — [Julian Shapiro, Landing Page Copywriting](https://www.julian.com/guide/growth/landing-pages)

His template, deliberately conservative ("the more you detour from the template, the more
confused the average visitor becomes"):

1. Navbar
2. Hero (header, subheader, imagery)
3. Social proof (logos / press / customer count)
4. Call-to-action
5. Features and objections
6. Repeated call-to-action
7. Footer

The 2026 SaaS-specific expansion of the same spine adds diagnosis and mechanism sections in the
middle: **nav → hero → initial social proof → problem & solution → how it works → features &
benefits → deep proof / case studies → pricing preview → FAQ → final CTA & footer**
([SaaS Hero, Effective SaaS Landing Page Structure](https://www.saashero.net/design/effective-saas-landing-page-structure);
[2026 Conversion Playbook](https://www.saashero.net/content/effective-saas-landing-page-structure/)).
The stated logic — each section resolves one objection before the visitor consciously names it —
is the useful part, not the section count.

**Prescription for HAIGE (pre-launch, no pricing, no logos yet):**

```
1  Nav (logo, 2–3 links max, one CTA: "Join the waitlist")
2  Hero — headline / subhead / single CTA / one-line credibility strip
3  The problem, stated as a measurable loss (visibility drop nobody noticed)
4  How it works — the 5-step agent loop: monitor → diagnose → draft → YOU approve → measure
5  What it watches — Google, ChatGPT/Gemini/Claude, LinkedIn/X/Reddit (a surface map, not icon cards)
6  The approval gate — the differentiator, given its own full section
7  Evidence / "what a diagnosis looks like" — a typographic work-item, not a fake dashboard
8  Who it's for + who it's not for (substitutes for missing case studies)
9  FAQ — 6–8 questions, accordion, objection-killers
10 Final CTA + footer
```

Sections 6 and 8 are the deviations from the template and both are earned: human approval is the
product's actual claim, and an explicit "not for you if…" buys credibility that a pre-launch
product cannot buy with logos.

### 1.2 Hero formula

Shapiro's litmus test is the one to design against: *if the visitor reads only the header, will
they know exactly what you sell?* He names the exact failure mode HAIGE is at risk of — and names
it in almost the product's own words:

> "Bad headers—found all over the web—are those that read like slogans instead of descriptions.
> For example, 'Improve your workflow!' or **'Supercharge your collaboration!'** are useless."
> — [julian.com](https://www.julian.com/guide/growth/landing-pages)

His construction process:

1. **Value prop** — what bad alternative do people resort to without you? How are you better?
   Turn that into an action statement.
2. **Hook** — either (a) a bold, *specific* claim, or (b) a pre-emptive answer to the single
   biggest buying objection.
3. **Subheader** — one or two sentences only, doing two jobs: what the product *is*, and why the
   header's bold claim is *believable*.

Working numbers from the 2026 sources: headline under ~10 words, one sentence of subhead, one
high-contrast button ([SERP Blocks](https://blocks.serp.co/blog/saas-landing-page-sections)); a
visitor should be able to restate the value proposition within five seconds without scrolling
([SaaS Hero benchmarks](https://www.saashero.net/google-ppc/landing-page-conversion-rate-benchmarks)).

Two copy frameworks cover nearly every strong hero: **PAS** (Problem–Agitate–Solution) and
**BAB** (Before–After–Bridge); BAB suits the subhead, where there is room for exactly one
sentence of contrast ([Orbix, SaaS Hero Section Design](https://www.orbix.studio/blogs/saas-hero-section-design)).
That source also names the failure mode of designing the composition in Figma first and writing
the headline into whatever space is left — write the headline first, then lay out around it.

**HAIGE hero, concretely.** Header must name the thing, the surfaces, and the human gate.
Candidate shapes (not final copy):

- "Find out why you stopped showing up in ChatGPT — and fix it, with your approval on every change."
- "Your visibility across Google and AI answers, watched daily. Nothing ships without you."

Both pass the litmus test read alone. Both contain the objection-handling hook ("with your
approval") rather than a bold claim, which is the correct choice for a category where the buyer's
real fear is an autonomous agent publishing on their behalf.

Avoid: "AI Growth Engine", "Supercharge your visibility", "The AI-powered growth platform for
modern teams" — the last is literally the mad-lib pattern flagged in §2.

### 1.3 CTA count

The consensus is unambiguous: **one offer, repeated**.

- Single-CTA pages convert at a median **2.3× higher** rate than pages with three or more CTAs
  ([SaaS Hero design best practices](https://www.saashero.net/design/saas-landing-page-best-practices/)).
- Pages with one link average **13.5% CVR vs 10.5%** for pages with five or more links
  ([SaaS Hero benchmarks](https://www.saashero.net/google-ppc/landing-page-conversion-rate-benchmarks)).
- One offer, repeated at least three times (hero, mid-page, final), because a single bottom CTA
  loses everyone who never scrolls
  ([SaaS Hero structure](https://www.saashero.net/design/effective-saas-landing-page-structure)).

For HAIGE that means exactly one action — join the waitlist — appearing in nav, hero, after the
approval-gate section, and at the page foot. No secondary "Book a demo" / "Read the docs" /
"View on GitHub" competing above the fold.

### 1.4 Social proof placement

This is the highest-leverage variable in the 2026 data, and it is about *placement*, not volume:

- Proof placed immediately below the CTA produced a **+68% conversion lift**; only 46% of SaaS
  sites put any proof in the hero
  ([SaaS Hero, Best SaaS Landing Pages of 2026](https://www.saashero.net/content/b2b-saas-landing-page-examples/)).
- A testimonial version beat a logos-only version by **35%** in A/B testing (same source).
- Above-fold proof lifts B2B SaaS conversion **15–30%**; moving proof from a standalone band to
  *inline beside the CTA* is described as the single highest-leverage change available without a
  redesign ([design best practices](https://www.saashero.net/design/saas-landing-page-best-practices/)).

**HAIGE has no logos and no testimonials.** Shapiro's advice for that exact case is to give the
product away to people at recognisable companies and use their logos later
([julian.com](https://www.julian.com/guide/growth/landing-pages)). Until then, substitute
*proof-of-work* for proof-of-customers, placed in the same slot (immediately under the hero CTA):

- A concrete, checkable claim about the mechanism ("we query 12 engines daily and keep the raw
  answer text, not an API summary" — this is the axis Profound markets on, see §3.3).
- Named surfaces with counts rather than logos: "Google · ChatGPT · Gemini · Claude · LinkedIn · X · Reddit".
- Founder byline with a real name and face. A pre-launch page with an accountable human on it
  outperforms an anonymous one on exactly the trust axis the product sells.
- Waitlist count *only once it is not embarrassing*. A visible "#247 in line" is strong; "#3" is not.

### 1.5 "How it works"

The 2026 shift is from feature lists to outcome-driven demonstration of transformation
([Genesys Growth](https://genesysgrowth.com/blog/designing-b2b-saas-landing-pages)). Hero visuals
should be real product, not stock imagery
([SaaS Hero examples](https://www.saashero.net/content/b2b-saas-landing-page-examples/)) — which,
for HAIGE, means no visual rather than a fake one (§3).

Shapiro's rule for the features block is the one worth following: 3–6 features, each being **a
value prop + the objection that arises on hearing it**, and each tying back to the hero's dominant
claim in a running narrative. Feature headers should bluntly state the value prop
("Cooks and sears", "No clean up") rather than "Empower your sales."

For HAIGE, the "how it works" section *is* the product demo. Five numbered steps, each one
sentence, each with the objection answered inline:

| Step | Line | Objection handled inline |
|---|---|---|
| 01 Monitor | Queries your terms daily across search, AI answers and social | "Is this just a scraper?" → says what is queried, how often |
| 02 Diagnose | Attributes the drop to a cause, with the source text as evidence | "How do I know it's not guessing?" → evidence |
| 03 Draft | Writes the fix in the format the channel needs | "Generic AI copy?" → channel-specific |
| 04 Approve | Nothing publishes until you say so, in Slack | The whole fear, answered |
| 05 Measure | Re-checks the same terms and reports what moved | "Does it actually work?" → closes the loop |

### 1.6 FAQ and final CTA

FAQ: 6–8 questions, accordion, placed after pricing (for HAIGE: after "who it's for"), worth A/B
testing because visitors who scroll that far are more engaged than average
([Leadfeeder](https://www.leadfeeder.com/blog/conversion-optimization/saas-landing-pages-that-convert);
[SERP Blocks](https://blocks.serp.co/blog/saas-landing-page-sections)).

Write the FAQ as the objection list, not as a help-centre. For HAIGE the real six are: *Does it
post anything without me? · What exactly can it see inside ChatGPT? · How is this different from
an SEO tool? · What happens to my brand voice? · When does it launch and what does it cost? ·
What do you do with my data?*

Final CTA: standalone section, the same single offer, restated benefit, no new links
([SERP Blocks](https://blocks.serp.co/blog/saas-landing-page-sections)).

### 1.7 Benchmarks and performance

| Metric | Poor | Average | Good | Excellent |
|---|---|---|---|---|
| Conversion rate | <1% | 2–4% | 7–10% | 10%+ |
| Bounce rate | >70% | 50–60% | 35–45% | <35% |
| Page load | >5s | 3–5s | 2–3s | <2s |

From 10,247 analysed pages ([LandingScore](https://landingscore.dev/saas-b2b-conversion-rate-benchmarks)).
Median B2B SaaS 3.0–3.8%, top decile 11–15%
([SaaS Hero](https://www.saashero.net/design/saas-landing-page-best-practices/)); Unbounce's
all-industry median across 464M visits is 6.6%, so traffic source dominates industry
([SaaS Hero benchmarks](https://www.saashero.net/google-ppc/landing-page-conversion-rate-benchmarks)).

Waitlist pages specifically: **2–5% average, 8–20% for the best, 25%+ elite**
([Flowjam](https://www.flowjam.com/blog/waitlist-landing-page-examples-10-high-converting-pre-launch-designs-how-to-build-yours)).

Performance: target under 2.5s; each second of delay costs ~7% of conversions
([LandingScore](https://landingscore.dev/saas-b2b-conversion-rate-benchmarks)); bounce probability
rises 123% going from 1s to 10s ([Genesys Growth](https://genesysgrowth.com/blog/designing-b2b-saas-landing-pages)).
By mid-2026, **71% of B2B SaaS landing-page sessions were mobile or tablet**
([SaaS Hero](https://www.saashero.net/design/saas-landing-page-best-practices/)) — design the
mobile column first.

Test order: headline first (largest lifts), then CTA text/placement, then form fields, then proof
type/placement, then hero layout
([SaaS Hero](https://www.saashero.net/design/effective-saas-landing-page-structure);
[Genesys Growth](https://genesysgrowth.com/blog/designing-b2b-saas-landing-pages)).

---

## 2. What makes a page read as AI slop — and what to do instead

### 2.1 The ranked evidence

The single best source is a Reddit-mined study: **3,214,533 posts scanned across 47 subreddits
(2020–2026)**, 46,971 on-topic, plus 3,033 comments from 125 canonical threads, with every top
tell adversarially verified (11 of 12 held; "mesh/blob/aurora backgrounds" was rejected as a
keyword artifact) ([JCarterJohnson/vibecoded-design-tells](https://github.com/JCarterJohnson/vibecoded-design-tells)).

Ranked by share of on-topic comments
([comment_tell_counts.csv](https://raw.githubusercontent.com/JCarterJohnson/vibecoded-design-tells/main/unslop-ai-ui/comment_tell_counts.csv)):

| Tell | % of comments | neg. sentiment |
|---|---|---|
| "Screams AI" / soulless / slop | 6.4% | 135 |
| "All looks the same" / template / cookie-cutter | 6.1% | 126 |
| shadcn / Tailwind default kit | 2.5% | 16 |
| Purple / violet ("AI purple") | 2.3% | 29 |
| Gradients everywhere / gradient text | 2.0% | 21 |
| Too many animations / Framer fade-ins | 1.1% | 6 |
| Rounded corners / pill buttons | 0.8% | 10 |
| Dark mode + neon glow | 0.7% | 3 |
| Emoji / ✨ / 🚀 in copy | 0.5% | 4 |
| Generic sans (Inter / Geist) | 0.4% | 7 |
| Three-column feature cards | 0.4% | 1 |
| Mesh / blob / aurora backgrounds | 0.3% | 3 |
| Glassmorphism / frosted glass | 0.2% | 2 |
| Same hero: huge headline + 2 buttons | 0.2% | 3 |
| Stock illustrations / clipart | 0.2% | 1 |
| Centered everything / endless whitespace | 0.2% | 3 |
| Bento grid | 0.1% | 1 |

**Two findings matter more than the list.** First, the loudest complaint is not any single
feature — it is *recognisability on sight*; "they all look the same" and "screams AI" each appear
in ~13% of on-topic posts. Second, the Twitter-meme tells (bento grids, glassmorphism, aurora
gradients) rank **near the bottom or were rejected**. The real signal is the **default component
kit + the purple**, not the exotic effects everyone jokes about. Designing to avoid glassmorphism
while shipping stock shadcn in indigo misses the actual problem.

Share of the conversation jumped roughly **150× from 2023 to 2024** — this is a 2024-onward
phenomenon and buyers are now literate in it.

### 2.2 The tells, as designers name them

Converging lists from 2025–2026:

- **The recipe:** Inter for everything, Lucide/Heroicons, blue-to-purple gradient, centered cards
  with excessive padding, rounded buttons, subtle shadows, blur
  ([thecrit.co](https://thecrit.co/resources/vibe-coding-design-guide)).
- **Six tells, a 60-second audit** — four or more means you have an average page
  ([Superdesign](https://superdesign.dev/blog/fix-generic-ai-landing-page)):
  1. The mad-lib headline: *"The AI-powered [X] for modern [Y]"* — describes a category, not a promise.
  2. The centered hero with a gradient blob: big centered H1, subhead, two buttons, purple-to-indigo glow.
  3. The three-feature-card row: always three, always an emoji or thin-line icon, two-word title, lorem-ish sentence.
  4. The default palette: indigo/violet on white, one accent, subtle gradients — "the AI startup uniform".
  5. Stock section order: hero, logos, three features, testimonial, pricing, CTA — in that exact order every time.
  6. Benefit copy that could belong to anyone: "Save time."
- **Purple-to-cyan gradient, glassmorphism with neon glow, six identical cards in a row each with
  icon + heading + two lines, a bounce on every hover**
  ([smoothui.dev](https://smoothui.dev/blog/ai-design-slop)). That piece also makes the point that
  slop is often not merely ugly but *unusable* — missing focus states, failing contrast, empty and
  error states never designed.
- **Emoji as icons, bullets and nav items**, applied everywhere the model absorbed it
  ([Fountain Institute](https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui)). Same piece
  on why purple: purple-to-blue gradients dominate Notion/Linear/Vercel-era marketing material, so
  "forward-looking and technical" resolves to that gradient in training data.
- **Root cause is statistical, not aesthetic.** Tailwind's default starting colour was indigo-500,
  which appears in the corpus more than any other choice; absent constraints the model returns the
  median of its training data ([925studios](https://www.925studios.co/blog/ai-slop-design-tells)).
- The tells "are not ugly, they are generic, **and generic is worse than ugly** because it makes
  your product forgettable" (same source).
- Also flagged by name: **card soup, decorative gradients, fake dashboards, generic SaaS heroes,
  rounded panels with thick borders** ([Design Slop](https://github.com/wpgaurav/design-slop) via
  [gauravtiwari.org](https://gauravtiwari.org/stop-slop-ai-slop/)); **glowing blobs, abstract
  neural networks, decorative gradients**
  ([Anti-AI-Design-Slop](https://github.com/dtransla-maker/Anti-AI-Design-Slop)); **boxes nested
  inside boxes** ([Beaver Builder masterclass](https://www.wpbeaverbuilder.com/avoid-ai-slop-in-web-design/));
  **lazy selected states, oversized eyebrows, random status pills, glow lights, weak pricing
  sections, and visuals that do not match the product**
  ([video breakdown, Jun 2026](https://www.youtube.com/watch?v=M4DNgmI7MIM)).
- Reddit designers' own summary of the look to escape: "dark gradients, glass cards, glowing blobs,
  random 3D shapes… looks nice at first, but generic"
  ([r/vibecoding](https://www.reddit.com/r/vibecoding/comments/1ubewk8/any_advice_to_escape_the_ai_slop_web_design_look)).

**The trap worth naming:** the unslop-ui skill explicitly warns that the *new* default — "cream
plus serif plus sage" — is itself just another default, and swapping one for the other is not
taste ([vibecoded-design-tells](https://github.com/JCarterJohnson/vibecoded-design-tells)). HAIGE
should not simply invert into warm-cream-and-Instrument-Serif and call it done.

### 2.3 What designers recommend instead

- **Constrain before generating.** Give real brand decisions — named hex values, a named type
  pairing, a named layout logic — because specificity removes the model's need to fill gaps with
  averages ([Monet](https://www.monet.design/blog/posts/ai-design-pro-strategies-avoid-slop);
  [925studios](https://www.925studios.co/blog/ai-slop-design-tells)).
- **Asymmetry and varied weight.** Replace three identical cards with **2–4 sections of different
  sizes**, each tied to a concrete job the buyer is trying to finish, each led by a real specific
  (a number, a before/after, a named workflow) rather than a two-word title. Drop emoji icons
  ([Superdesign](https://superdesign.dev/blog/fix-generic-ai-landing-page)).
- **Left-aligned hero, no gradient blob, one accent drawn from the product, show the product
  rather than decorate around it** (same).
- **One display face for headings, one readable sans for body; no purple, no gradients, one accent
  used sparingly** (same).
- **Vary spacing intentionally** — uniform padding everywhere reads mechanical; tight grouping for
  related items, large gaps between sections ([thecrit.co](https://thecrit.co/resources/vibe-coding-design-guide)).
- **Design the unglamorous states** — focus, empty, error — since their absence is a reliable tell
  ([smoothui.dev](https://smoothui.dev/blog/ai-design-slop)).
- **Audit in a loop, not once**: build → critique → fix the highest-impact issue → re-check (same).
  Tooling exists if useful: a CI-gating scanner in
  [vibecoded-design-tells](https://github.com/JCarterJohnson/vibecoded-design-tells), and
  [Hallmark](https://github.com/Nutlope/hallmark)'s 57 "slop-test gates"
  ([writeup](https://rohitraj.tech/notes/anti-ai-slop-design-skill-hallmark-guide-2026)).

### 2.4 HAIGE-specific do-not list

Because the product is an AI product, every AI-slop tell it uses will be read as *the product
itself is generic*. This is not a style question; it is a credibility question.

Banned outright:
- Any purple, violet, indigo or blue-to-purple gradient. No indigo-500 accent.
- Gradient text on the H1. Aurora / mesh / blob backgrounds. Glow behind anything.
- Glassmorphism, frosted cards, cards nested inside cards.
- A row of three (or six) equal icon cards.
- Emoji in headings, bullets or nav. Sparkles and rockets anywhere.
- Stock "AI" imagery: neural-net meshes, glowing brains, abstract 3D blobs, floating orbs.
- Fade-up-on-scroll applied to every element; bounce on every hover.
- Any fabricated dashboard, chart, "visibility score" gauge or screenshot. Non-negotiable given
  the product sells *evidence*.
- "Supercharge", "Unlock", "Revolutionize", "The AI-powered X for modern Y", "10x your Z".

Deliberate opposites to choose instead (pick one direction and hold it):
- Palette: near-black ink on warm off-white, with **one** non-purple accent. A signal/instrument
  palette fits the product's meaning — e.g. a single saturated amber or signal-orange used only for
  the state that needs human attention, with a muted green reserved for "approved / shipped". Colour
  then carries information rather than decoration, which is itself the anti-slop move.
- Layout: left-aligned, asymmetric, a visible grid with intentional column-span variation.
- Type doing the work instead of illustration (see §3 and §5).

---

## 3. Pre-launch / waitlist pages for a product that isn't built

### 3.1 What the waitlist literature says

The five-part anatomy plus a sharing mechanic is the whole game; pages convert 2–5% average,
8–20% best, 25%+ elite ([Flowjam](https://www.flowjam.com/blog/waitlist-landing-page-examples-10-high-converting-pre-launch-designs-how-to-build-yours)).
The mechanics that actually carried the famous examples, from that teardown:

- **Visible queue position + a way to move up it** — "the single strongest sharing loop in existence".
- **Batched access** ("you're in batch 2") — scarcity does the work; the ChatGPT launch playbook.
- **The manifesto** — Arc collected ~350K names behind a long-form point-of-view letter rather than
  a feature list. For a bold product, a point of view converts better than a spec sheet.
- **Linear, aesthetic-as-proof** — a stripped single-screen page, one line of copy, one field.
  *For developer and design tools, craft on the landing page is itself the credibility signal.*
- **Borrowed audience** — Product Hunt "coming soon" if you have no traffic of your own.

The CTA must make the nature of the offer explicit: the button signs you up for a *waitlist*, not
for access ([Moosend](https://moosend.com/blog/waitlist-landing-page/)). Give the waitlist itself a
value proposition — beta access, founding-customer pricing, an audit
(same source).

For HAIGE the Linear and Arc lessons stack: a design-literate, skeptical B2B marketing/founder
audience, buying a product whose pitch is *restraint and evidence*. The page's craft and its
refusal to fake anything are the proof.

### 3.2 How to show an unbuilt product without lying

Options, ranked by how well they fit HAIGE:

1. **The workflow diagram as the hero visual.** A real system diagram of the agent loop — monitor,
   diagnose, draft, approve, measure — drawn honestly as a diagram, not disguised as a UI. This is
   the strongest option: it is the product's actual mechanism, it is true, and diagrams read as
   engineering rather than marketing. Developer-tool pages routinely lead with mechanism rather
   than chrome ([nakora.ai on developer landing pages](https://nakora.ai/blog/developer-landing-page)).
2. **The typographic work item.** Render one diagnosis as text in a monospaced, terminal-plain
   block — the query, the engine, the answer excerpt, the attribution, the proposed fix, and an
   explicit `awaiting approval` state. It is clearly a *specimen*, not a screenshot; it is
   honest; and it demonstrates the evidence claim directly. Label it so no one can mistake it for a
   UI capture ("Example work item").
3. **The Slack message.** The product genuinely lives partly in Slack. A faithful, plainly-styled
   rendering of the approval message — with Approve / Edit / Reject — shows the interaction model
   with almost no invented UI surface. Flag it as an illustration.
4. **Before / after narrative.** Two columns: how the drop is handled today (noticed six weeks
   late, nobody knows why, someone writes a blog post and hopes) vs with HAIGE (day one, with
   evidence, drafted, approved, measured). Explicit before/after results are the pattern B2B
   sources recommend for proof ([Heyflow](https://heyflow.com/blog/b2b-landing-page-best-practices)).
5. **Annotated surface map.** Instead of a three-icon row, one wide diagram listing the monitored
   surfaces with what is actually checked on each — concrete and asymmetric, replacing a card grid
   with information.

What *not* to do: a mocked dashboard in a browser chrome with invented percentages. "Fake
dashboards" is on the named slop list ([Design Slop](https://github.com/wpgaurav/design-slop)), and
for a product selling verifiable evidence it is self-refuting. The general advice that "hero
visuals should be real product, annotated screenshots or screen recordings, not stock imagery"
([SaaS Hero](https://www.saashero.net/content/b2b-saas-landing-page-examples/)) resolves, in the
pre-launch case, to *diagram or nothing* — and pages without product images are a recognised,
workable genre ([Jeff Edmondson, 10 SaaS landing pages without product images](https://www.jeffedmondson.dev/10-great-saas-landing-pages-without-product-images/)).

Say the quiet part in copy, once, somewhere near the visual: *"We haven't shipped yet, so there
are no screenshots here. Here's exactly how it works instead."* Turning the constraint into a
statement of integrity aligns with the product's entire pitch.

### 3.3 Competitor framing (what the category already looks like)

Profound is the closest analogue and worth studying for language, not layout. Their site already
uses the human-approval framing HAIGE will use:

> "It identifies the work worth doing, drafts it, and pings you for approval."
> — [tryprofound.com](https://www.tryprofound.com/)

Other Profound positioning to differentiate against, from
[Answer Engine Insights](https://www.tryprofound.com/features/answer-engine-insights):
daily visibility runs because "AI platforms don't return the same answer twice"; capture from the
browser rather than the API, "what you see in Profound is what your customers see"; tracking
visibility score, share of voice, sentiment, citation sources, competitor rankings. They raised a
$20M Series A in June 2025 ([announcement](https://www.tryprofound.com/blog/series-a)).

Peec AI supplies category statistics that can be quoted (with attribution) as problem-framing:
pages with 60+ links delivered only **33% actual content** to an AI agent's first read vs **78%**
for light-navigation pages; ~**1 in 10 citations** in AI search came from a vendor's own
self-promotional listicle across 232,000 citations; Grok ran `site:` searches in **18.3%** of chats
in April 2026 ([Peec AI GEO statistics](https://peec.ai/ai-search-geo-statistics)). Their framing —
"track citations rather than rankings" — is the language the market already uses
([Peec AI GEO guide](https://peec.ai/blog/the-complete-guide-to-generative-engine-optimization-%28geo%29)).

**HAIGE's wedge against both:** they are analytics that increasingly draft; HAIGE is a supervised
loop that closes — diagnose *with evidence*, draft, **human gate**, measure the same terms again.
Say "human-supervised" in the hero, not in a feature card.

---

## 4. Design-system fundamentals for a 2026 marketing site

### 4.1 Type scale

Ratios between **1.200 and 1.333** are the practical sweet spot for UI. Below 1.125, adjacent steps
are too close and hierarchy goes ambiguous; above 1.414, a scale from 16px hits 42px in four steps
and leaves no room for fine hierarchy ([FontFYI, Building a Type Scale](https://fontfyi.com/blog/building-type-scale-design-system)).
The corroborating rule of thumb: 1.25 (major third) or 1.333 (perfect fourth) for body-led pages;
1.5 or 1.618 only where you need large hero/display type; below 1.2 feels muddy
([AllTools calculator notes](https://alltools.dev/tools/design/spacing-scale-calculator)).

**Recommended for HAIGE:** base 17–18px body, ratio **1.25** for the UI/body range, with the
display step set *off-scale and deliberately large* (a jump to ~clamp(3rem, 6vw, 5.5rem)). Keeping
the working scale tight and letting exactly one display size break it is a reliable editorial move
and the opposite of the uniform-everything look.

Name the steps, don't hardcode pixels — engineers reference `--font-size-lg`, and the base or ratio
changes in one place ([FontFYI](https://fontfyi.com/blog/building-type-scale-design-system)).

### 4.2 Fluid type with clamp()

`clamp(min, preferred, max)` scales smoothly between bounds and removes the breakpoint ladder
([Smashing Magazine, Modern Fluid Typography Using CSS Clamp](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp)).

**The accessibility constraint most implementations get wrong** (same source): pixel values for min
and max are not accessible — they do not respond when a user changes their preferred font size —
and a pure viewport unit for the preferred value is also not accessible. Use **rem for the bounds
and a rem + vw sum for the preferred value**:

```css
--step-0:  clamp(1rem,    0.95rem + 0.25vw, 1.125rem);
--step-1:  clamp(1.25rem, 1.15rem  + 0.5vw,  1.5rem);
--step-2:  clamp(1.5rem,  1.35rem  + 0.8vw,  2rem);
--display: clamp(3rem,    2.2rem   + 4vw,    5.5rem);
```

Target viewport range roughly **640px → 1536px**. Test at **200% zoom**
([robustbranding](https://robustbranding.com/fluid-typography-tools-best-practices)).
Generate the set with [Utopia](https://utopia.fyi/) or the
[Fluid Type Scale Calculator](https://www.fluid-type-scale.com/) rather than by hand — Utopia is
described as the production standard for fluid scales in 2026
([research note](https://github.com/legioncodeinc/vibe-coding-tools/blob/main/.agents/skills/typography-font-stinger/research/external/2026-05-20-utopia-fluid-type.md)).

**Apply fluid scaling to type and to page-level spacing (page padding, large section gaps), not to
component-internal spacing**, which should stay fixed rem so components look consistent at any
viewport ([nexus tokens issue](https://github.com/nexuslabs-ai/nexus/issues/104)).

### 4.3 Spacing

The classic 8pt scale: **4, 8, 16, 24, 32, 48, 64, 96, 128**, where 4 is the half-step for
component-internal fine adjustment ([AllTools, Spacing Scales Explained](https://alltools.dev/reference/design/spacing-scales-explained)).
8 stays sharp at 1×, 1.5×, 2× and 3× display densities, and is coarse enough to avoid
one-pixel-off bugs while fine enough for most needs (same).

The useful hybrid: **4pt grid for component-internal spacing (padding, gap), 8pt grid for
page-level layout (section margins, container gutters)** (same). Tailwind's default scale is
multiples of 4 and aligns with this
([Breakdance](https://breakdance.com/the-8-point-grid-system-a-practical-guide/)).
Also standard: 8pt for layout/components plus a 4pt baseline grid for text rhythm
([wpdean](https://wpdean.com/what-is-the-8-point-grid-system)).

For a marketing page, the thing that separates it from a generic one is **section rhythm**, not the
unit. Use a small number of large section paddings (e.g. `clamp(4rem, 8vw, 9rem)` block padding) and
deliberately vary them — a tight pairing between a claim and its evidence, a big gap before a new
argument. Uniform padding everywhere is a named tell (§2.3).

### 4.4 Color tokens

Three layers, and the middle one is the theming boundary:

- **Primitive** — raw values (`--blue-500`). Never referenced by components.
- **Semantic** — meaning (`--surface-primary`, `--text-secondary`, `--border-subtle`,
  `--accent-action`). **This is where light/dark swaps happen: reassign the semantic layer to
  different primitives and components never change**
  ([SeedFlip, Token Architecture Layers](https://seedflip.co/blog/token-architecture-layers)).
- **Component** — optional, component-scoped aliases of semantic tokens.

Semantic tokens represent meaning rather than colour — Surface Primary, Text Secondary, Success
Background ([Design Systems Collective](https://www.designsystemscollective.com/dark-mode-is-not-an-inversion-building-it-right-from-the-token-layer-up-f2094136c038)).
Broader naming-convention reading list at
[The Design System Guide](https://thedesignsystem.guide/knowledge-base/naming-design-tokens).

For HAIGE, add **state-semantic** tokens that match the product's own vocabulary, so the page and
the eventual app speak the same language: `--state-watching`, `--state-needs-approval`,
`--state-approved`, `--state-dropped`. Reserving the accent for `needs-approval` makes the palette
mean something.

### 4.5 Border radius

- **Nested radius rule:** inner radius = outer radius − padding. Using the same radius on nested
  elements is the most common amateur mistake. Implement as
  `calc(var(--radius) - var(--padding))` ([92learns](https://blog.92learns.com/border-radius-rules)).
  The simpler rule of thumb sometimes quoted is outer = 2 × inner
  ([uidesign.tips](https://www.uidesign.tips/ui-tips/border-radius-consistency)).
- **Build a scale grouped by the element's shortest side** — tiny (<16px), small (16–32), medium
  (32–56), large (56–100), XL (100+) — with semantic names XS…XL plus Full for pills
  ([92learns](https://blog.92learns.com/border-radius-rules)).
- Radius communicates personality; sharp corners read as serious/technical.

Given that "rounded corners / pill buttons" is the 7th-ranked slop tell (§2.1), HAIGE should run a
**restrained radius scale**: `--radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px`, no pill
buttons, no `rounded-2xl` cards. Sharp-ish corners plus real typography is a deliberate signal in
2026 precisely because the default is soft.

### 4.6 Motion

Material 3's easing/duration pairs remain the most concrete public reference
([M3, Easing and duration](https://m3.material.io/styles/motion/easing-and-duration)):

| Easing | Duration | Transition type |
|---|---|---|
| Emphasized | 500ms | begin and end on screen |
| Emphasized decelerate | 400ms | enter the screen |
| Emphasized accelerate | 200ms | exit the screen |
| Standard | 300ms | begin and end on screen |
| Standard decelerate | 250ms | enter |
| Standard accelerate | 200ms | exit |

CSS curves: emphasized decelerate `cubic-bezier(0.05, 0.7, 0.1, 1.0)`, emphasized accelerate
`cubic-bezier(0.3, 0.0, 0.8, 0.15)`; emphasized itself has no CSS equivalent, so use Standard as
the web fallback ([M3 tokens & specs](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs)).
Scale duration with the distance travelled so perceived speed stays constant
([M3](https://m3.material.io/styles/motion/easing-and-duration)); Carbon uses a non-linear duration
scale for the same reason, with tokens at 240ms for expansion/toast, 400ms for large expansion,
700ms for background dimming ([Carbon Motion](https://carbondesignsystem.com/elements/motion/overview)).
M3 has since moved to a spring-based physics system for component motion
([M3 motion overview](https://m3.material.io/styles/motion/overview/how-it-works)), but for a
marketing page easing + duration is the right level.

**Marketing-page budget for HAIGE**, given "too many animations / Framer fade-ins" is the 6th
tell: durations 150–250ms for hover/focus, 300–400ms for anything entering. **At most two scroll
-triggered reveals on the whole page**, both on sections that earn it (the approval gate, the
loop diagram). No fade-up on every block. No hover bounce.

`prefers-reduced-motion` is mandatory, and Carbon's framing is the right bar: *there must always be
a way to communicate the same message statically*
([Carbon](https://carbondesignsystem.com/elements/motion/overview)). Implement as a blanket
override, then re-enable only opacity changes:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 4.7 Accessibility — WCAG 2.2 AA

WCAG 2.2 was published 5 October 2023, remains current in 2026, and is purely additive to 2.1:
**9 new success criteria, 3 at A and 6 at AA, none removed**
([W3C WAI, What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22);
[AllAccessible](https://www.allaccessible.org/blog/wcag-22-complete-guide-2025)).

The ones that bite a marketing page:

- **2.4.11 Focus Not Obscured (Minimum) — AA.** A focused element must not be entirely hidden by a
  sticky header, banner or cookie bar. Fix: `scroll-padding-top` equal to the sticky header height
  ([AccessProof](https://access-proof.com/blog/wcag-2-2-new-criteria-explained)). A sticky nav is
  the single most likely way HAIGE's page fails 2.2.
- **2.5.8 Target Size (Minimum) — AA.** Pointer targets at least **24×24 CSS px**, unless spaced so
  that 24px-diameter circles centred on each do not intersect, or the target is inline in a sentence
  ([W3C Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)).
  Footer social icons are the most common failure
  ([AccessProof](https://access-proof.com/blog/wcag-2-2-new-criteria-explained)).
- **2.5.7 Dragging Movements — AA.** Any drag interaction needs a single-pointer alternative
  ([GetWCAG](https://getwcag.com/en/wcag-2-2-guidelines)). Relevant only if a carousel or slider
  appears — another reason not to add one.
- **Focus appearance** (2.4.13 is AAA, but the practice is the AA-level bar in every audit
  checklist): indicator at least 2 CSS px thick, 3:1 contrast against both adjacent colours and the
  unfocused state; killing the default outline without replacing it fails
  ([W3C Understanding 2.4.13](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance);
  [AllAccessible](https://www.allaccessible.org/blog/wcag-22-complete-guide-2025)). Note the W3C
  warning that **shadow and glow effects outside the component's border do not count** toward the
  indicator — a glow is not a focus ring.

Baseline AA carries over unchanged: **4.5:1** for body text, **3:1** for large text and for UI
component/graphical boundaries. Only 2.5.8 and part of 2.4.11 are reliably caught by automated
tooling (axe-core 4.9+); the rest need manual review
([AccessProof](https://access-proof.com/blog/wcag-2-2-new-criteria-explained)).

Two extra notes for HAIGE's chosen aesthetic: the W3C explicitly flags **gradient backgrounds** as
creating a near-infinite number of colour combinations that make contrast unverifiable
([W3C 2.4.13](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance)) — one more reason to
drop them; and the low-contrast muted-grey body text that accompanies the minimal look is the most
common real-world AA failure. Set body text at full ink, and reserve muted only for genuinely
secondary metadata that still clears 4.5:1.

### 4.8 Dark mode

Dark mode is not an inversion: inverting ignores hierarchy, contrast balance and component
behaviour ([Design Systems Collective](https://www.designsystemscollective.com/dark-mode-is-not-an-inversion-building-it-right-from-the-token-layer-up-f2094136c038)).
Build it at the semantic-token layer, with an explicit **surface hierarchy** — elevation expressed
as progressively lighter surfaces rather than shadows, since shadows barely read on dark
([muz.li, Dark Mode Design Systems](https://muz.li/blog/dark-mode-design-systems-a-complete-guide-to-patterns-tokens-and-hierarchy);
[framingui](https://framingui.com/blog/dark-mode-implementation-design-tokens)).

**Recommendation for HAIGE:** ship the marketing page in a **single, committed theme** rather than
supporting both. A pre-launch page does not need a theme toggle, and "dark mode + neon glow" is
itself a slop tell. Pick the direction that suits the brand — a warm paper-light page is the more
contrarian choice in this category, where every competitor is dark — and build the tokens in three
layers anyway, so the eventual app inherits a system that can add dark later without touching
components.

### 4.9 Container widths

Standard desktop content containers land at **1200 / 1280 / 1440px**; a 1440px artboard with a
12-column grid, 24px gutters and 60px side margins is the common baseline
([UX Planet](https://uxplanet.org/everything-you-should-know-about-8-point-grid-system-in-ux-design-b69cb945b18d)).

For a text-led marketing page use **two widths, not one**:

- **Prose measure:** 60–75 characters (`max-width: 65ch`, roughly 680–720px). Everything that is a
  paragraph lives here.
- **Layout container:** 1200–1280px for diagrams, the surface map and the work-item specimen.
- Side gutter: 16px minimum on phones, no horizontal scroll at 320px.

Deliberately letting a diagram break out past the prose column, while body text stays narrow, is the
cheapest way to get editorial rhythm rather than a uniform centered column (the "centered everything"
tell).

---

## 5. Typography — what reads premium in 2026

### 5.1 The landscape

The most-used SaaS faces, with who uses them
([Orbix, 15 Best SaaS Typography Examples](https://www.orbix.studio/blogs/saas-typography-examples)):
**Inter** (Linear, Stripe, Vercel), **Geist** (Next.js, v0 — "a favourite among AI startups,
developer tools, and modern SaaS brands"), **Satoshi**, **General Sans**, **Neue Montreal**,
**Manrope**, **IBM Plex Sans**, **Plus Jakarta Sans**, **DM Sans**, **Graphik**, **Circular**,
**Avenir Next**, **Work Sans**, **TT Hoves**, **Söhne**.

**The problem is that list.** Inter is named as the single most reliable "an AI made this" signal
([Hallmark writeup](https://rohitraj.tech/notes/anti-ai-slop-design-skill-hallmark-guide-2026)),
and "generic sans (Inter / Geist)" ranks in the Reddit tells table (§2.1). Orbix's own praise —
Inter "feels clean and modern **without being overly distinctive**" — is exactly the property that
now reads as default. Geist is heading the same way: it is the Vercel house face and now the
second-most-common AI-startup choice.

So: Inter and Geist are not *bad*; they are *unmarked*. For a product whose entire pitch is
distinctiveness in a sea of generated sameness, that is a positioning cost.

### 5.2 Which premium faces the reference sites actually use

From Typewolf's site archive: **Söhne** (Klim) appears alongside Signifier and Founders Grotesk;
**GT America** (Grilli Type, 2016, Swiss + American grotesque) pairs repeatedly with GT Alpina, GT
Super and GT America Mono, and shows up on Help Scout, Inverse and Pirate Wires
([Typewolf, GT America](https://www.typewolf.com/gt-america); [Söhne](https://www.typewolf.com/sohne)).
**Neue Montreal** (Pangram Pangram, 2018, Helvetica-derived but tighter, excels in display) is
paired almost always with a contrasting serif — Editorial New, Signifier, GT Alpina, Domaine
Display, Bradford ([Typewolf, Neue Montreal](https://www.typewolf.com/neue-montreal)).
**Saans** (Displaay) is on Retool, paired with Px Grotesk; elsewhere with Editorial Old and Tobias
([Typewolf, Saans](https://www.typewolf.com/saans)).

**The pattern across every premium example: a neutral grotesque for text, paired with a
high-contrast serif or a distinctive display face for headings.** Almost nothing premium is one
sans used at every size. That single observation is the most actionable finding in this section.

### 5.3 Free alternatives that hold up

Similarity rankings ([fontalternatives.com](https://fontalternatives.com/)):

**For Söhne** ([source](https://fontalternatives.com/fonts-like/sohne/)): Inter 90%, Geist 85%,
Work Sans 82%, DM Sans 78%, Satoshi 78% (Fontshare), Plus Jakarta Sans 76%, Source Sans 3 74%,
Public Sans 72%.

**For Neue Montreal** ([source](https://fontalternatives.com/fonts-like/neue-montreal)): Inter 88%,
Geist 85%, DM Sans 82%, Work Sans 80%, Space Grotesk 78%, Plus Jakarta Sans 76%, Source Sans 3 72%.

Best-match notes for the other premium grotesques (same site): Aeonik → Inter 88%, Founders Grotesk
→ Inter 82%, Graphik → Inter 88%, ABC Diatype → Inter 85%, Calibre → Inter 85%, Basis Grotesque →
Work Sans 85%, Aktiv Grotesk → Inter 90%.

Read that honestly: **the tooling's answer to every premium grotesque is Inter**, which is precisely
why everything converges. If you want the premium *feel* without the premium licence, the move is
not to find a closer Inter — it is to change the *structure* of the pairing (§5.4).

Typewolf's curated free list includes DM Sans, Inter, Space Mono, **Space Grotesk**, Work Sans,
Syne, Libre Franklin, Cormorant, Fira Sans, Source Serif 4, Roboto, **Fraunces**
([Typewolf, 40 Best Google Fonts](https://www.typewolf.com/google-fonts)). Their paid guide maps
1,000+ premium faces to free alternatives and includes a vetted serif+sans combinations section —
$39, and the only comprehensive mapping that exists
([Typewolf, Definitive Guide to Free Fonts](https://www.typewolf.com/free-fonts)).

**Instrument Serif** (Google Fonts, Rodrigo Fuenzalida & Jordan Egstad, 2023) is a condensed display
serif explicitly intended for large sizes
([Google Fonts](https://fonts.google.com/specimen/Instrument+Serif)). Its canonical partner is
**Instrument Sans** — same designer, described as "Instrument Serif's italic energy meets
Instrument Sans's Swiss calm"
([TypePairs](https://typepairs.com/pairs/instrument-serif-instrument-sans)); documented pairings
also include Inter, DM Sans and IBM Plex Mono
([maxibestof](https://maxibestof.one/typefaces/instrument-serif);
[TypographySmith](https://typographysmith.com/best-font-pairings/instrument-serif)).

Caveat already noted in §2.2: Instrument Serif over cream **is itself becoming the new default**,
flagged by name in the unslop-ui skill as "the cream-plus-serif-plus-sage 'tasteful default'"
([vibecoded-design-tells](https://github.com/JCarterJohnson/vibecoded-design-tells)). Use it, if at
all, at genuinely large display sizes and against a non-cream ground.

### 5.4 Recommended stacks for HAIGE

All three are free and self-hostable. Pick one and commit.

**A — Editorial instrument (recommended).** Display: **Instrument Serif** at the H1 and one or two
pull-quote moments only, set tight and large. Body/UI: **Instrument Sans** or **Schibsted
Grotesk**. Data/evidence: **JetBrains Mono** or **IBM Plex Mono** for the work-item specimen, the
engine names and any query string. The mono is not decoration — it marks *machine-observed
evidence* and distinguishes it from HAIGE's own prose, which is the product's central distinction.
Avoid cream; put it on warm off-white or a deep ink ground.

**B — Swiss instrument.** Display and body both **Space Grotesk** (78% Neue Montreal match, and
distinctly not Inter), with **Newsreader** or **Source Serif 4** for a single long-form
manifesto section, and **Geist Mono** or **JetBrains Mono** for evidence. Reads engineered and
Swiss; lower risk, lower distinctiveness than A.

**C — Signal.** Body **Public Sans** or **Libre Franklin** (grotesques with more character than
Inter and a civic, documentary feel that suits an evidence product), **Fraunces** at one display
moment with its variable axes pulled toward the wonky end, **IBM Plex Mono** for evidence.

Rules that apply to all three:
- Two families plus one mono. Never three sans.
- Set the H1 tight: `letter-spacing: -0.02em` to `-0.03em`, `line-height: 0.95–1.05`.
- Body line-height 1.55–1.65, measure 60–75ch.
- Do not use a variable font's full weight range — pick three weights and stop.
- Self-host with `font-display: swap` and subset; the page's 2.5s budget (§1.7) is real.

---

## Source list

**Landing page / conversion**
- https://www.julian.com/guide/growth/landing-pages (Julian Shapiro, Landing Page Copywriting — canonical)
- https://www.julian.com/guide/startup/landing-pages (same content, startup handbook path)
- https://www.saashero.net/design/effective-saas-landing-page-structure
- https://www.saashero.net/content/effective-saas-landing-page-structure/ (Apr 2026)
- https://www.saashero.net/design/saas-landing-page-best-practices/ (Jan 2026)
- https://www.saashero.net/google-ppc/landing-page-conversion-rate-benchmarks
- https://www.saashero.net/content/b2b-saas-landing-page-examples/ (Jan 2026)
- https://www.orbix.studio/blogs/saas-hero-section-design (Aug 2026)
- https://genesysgrowth.com/blog/designing-b2b-saas-landing-pages
- https://landingscore.dev/saas-b2b-conversion-rate-benchmarks
- https://blocks.serp.co/blog/saas-landing-page-sections (Mar 2026)
- https://www.leadfeeder.com/blog/conversion-optimization/saas-landing-pages-that-convert (Sep 2026)
- https://directiveconsulting.com/blog/blog-b2b-landing-page-best-practices-examples (Aug 2026)
- https://heyflow.com/blog/b2b-landing-page-best-practices

**AI slop**
- https://github.com/JCarterJohnson/vibecoded-design-tells (3.2M-post Reddit study; ranked tells)
- https://raw.githubusercontent.com/JCarterJohnson/vibecoded-design-tells/main/unslop-ai-ui/comment_tell_counts.csv
- https://superdesign.dev/blog/fix-generic-ai-landing-page (Jul 2026 — the six tells)
- https://smoothui.dev/blog/ai-design-slop (Jun 2026)
- https://thecrit.co/resources/vibe-coding-design-guide (Jun 2026)
- https://www.925studios.co/blog/ai-slop-design-tells
- https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui (May 2026)
- https://rohitraj.tech/notes/anti-ai-slop-design-skill-hallmark-guide-2026 (Jul 2026)
- https://www.wpbeaverbuilder.com/avoid-ai-slop-in-web-design/ (Sep 2026)
- https://www.monet.design/blog/posts/ai-design-pro-strategies-avoid-slop (Dec 2025)
- https://www.monet.design/blog/posts/escape-ai-slop-landing-page-design (Dec 2025)
- https://github.com/dtransla-maker/Anti-AI-Design-Slop
- https://github.com/wpgaurav/design-slop · https://gauravtiwari.org/stop-slop-ai-slop/ (Aug 2026)
- https://www.reddit.com/r/vibecoding/comments/1ubewk8/any_advice_to_escape_the_ai_slop_web_design_look
- https://www.youtube.com/watch?v=M4DNgmI7MIM (Jun 2026)
- https://impeccable.style/slop

**Pre-launch / waitlist / category**
- https://www.flowjam.com/blog/waitlist-landing-page-examples-10-high-converting-pre-launch-designs-how-to-build-yours (Jul 2026)
- https://moosend.com/blog/waitlist-landing-page/ (Jan 2026)
- https://www.jeffedmondson.dev/10-great-saas-landing-pages-without-product-images/
- https://www.getresponse.com/blog/waitlist-landing-page (Apr 2026)
- https://nakora.ai/blog/developer-landing-page (Oct 2025)
- https://saaspo.com/page-types/saas-landing-page-examples (inspiration library)
- https://www.tryprofound.com/ · https://www.tryprofound.com/features/answer-engine-insights · https://www.tryprofound.com/blog/series-a
- https://peec.ai/ai-search-geo-statistics · https://peec.ai/blog/the-complete-guide-to-generative-engine-optimization-%28geo%29

**Design system fundamentals**
- https://fontfyi.com/blog/building-type-scale-design-system (Aug 2026)
- https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp
- https://utopia.fyi/ · https://www.fluid-type-scale.com/
- https://robustbranding.com/fluid-typography-tools-best-practices
- https://github.com/nexuslabs-ai/nexus/issues/104 (fluid vs fixed token rule)
- https://alltools.dev/reference/design/spacing-scales-explained (Jul 2026)
- https://wpdean.com/what-is-the-8-point-grid-system (Jul 2026)
- https://breakdance.com/the-8-point-grid-system-a-practical-guide/ (Jun 2026)
- https://uxplanet.org/everything-you-should-know-about-8-point-grid-system-in-ux-design-b69cb945b18d
- https://alltools.dev/tools/design/spacing-scale-calculator
- https://blog.92learns.com/border-radius-rules · https://www.uidesign.tips/ui-tips/border-radius-consistency
- https://seedflip.co/blog/token-architecture-layers
- https://thedesignsystem.guide/knowledge-base/naming-design-tokens
- https://www.designsystemscollective.com/dark-mode-is-not-an-inversion-building-it-right-from-the-token-layer-up-f2094136c038
- https://muz.li/blog/dark-mode-design-systems-a-complete-guide-to-patterns-tokens-and-hierarchy
- https://framingui.com/blog/dark-mode-implementation-design-tokens
- https://m3.material.io/styles/motion/easing-and-duration · .../tokens-specs · https://m3.material.io/styles/motion/overview/how-it-works
- https://carbondesignsystem.com/elements/motion/overview
- https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance
- https://access-proof.com/blog/wcag-2-2-new-criteria-explained
- https://www.allaccessible.org/blog/wcag-22-complete-guide-2025
- https://getwcag.com/en/wcag-2-2-guidelines

**Typography**
- https://www.orbix.studio/blogs/saas-typography-examples (Aug 2026)
- https://www.typewolf.com/google-fonts (Jan 2026) · https://www.typewolf.com/free-fonts (Dec 2025)
- https://www.typewolf.com/gt-america · /sohne · /neue-montreal · /saans
- https://fontalternatives.com/fonts-like/sohne/ (Aug 2026) · https://fontalternatives.com/fonts-like/neue-montreal (Apr 2026)
- https://fonts.google.com/specimen/Instrument+Serif
- https://typepairs.com/pairs/instrument-serif-instrument-sans
- https://maxibestof.one/typefaces/instrument-serif
- https://typographysmith.com/best-font-pairings/instrument-serif
- https://www.fontfabric.com/blog/top-typography-trends-for-2026/ (Jan 2026)

Raw search JSON: `scratchpad/pr/*.json`
