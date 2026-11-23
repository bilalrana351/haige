# Landing-page research for HAIGE (AI Growth Engine)

Research date: 2026-09-21. All web research via Exa (`web_search_exa`, `web_fetch_exa`, `agent_run`).

Confidence key used throughout:
- **[src]** = taken from the site's own brand page, design tokens, or loaded font files.
- **[ref]** = reconstructed from a third-party design-reference index (shadcn.io/design, duply.ai, refero.design, fonttoolbox). Directionally right, not an official token.
- **[obs]** = observed from the fetched page content only.

---

## 1. Per-site teardowns

### Direct competitors (AI-visibility / AEO category)

#### tryprofound.com — Profound
- **Hero H1:** "Marketing agents to win in **[AI search / rotating word]**" — rotating-word hero, ~6 words. [obs]
- **Sub:** "Reach millions of consumers who are using AI to discover new products and brands."
- **CTA:** "Analyze my brand" (free AEO report) as the hook; sales CTA secondary. Lead-magnet-first, not demo-first.
- **Theme:** light white marketing shell with full-bleed **black** product sections. [src]
- **Type:** Inter (`font-inter` token in their Tailwind token doc). [src]
- **Accent:** Profound Blue **#376CFF**; bg **#FFFFFF** / **#000000**. Radius token `rounded-8` = **8px**. [src]
- **Section order:** hero → logo bar ("Used by the best marketers in the world") → stat/problem statement ("Over 100 million people search with AI every day…") → platform overview ("Scale your presence, not your workload") → 5 named product modules (Prompt Volumes, Answer Engine Insights, Agents, Agent Analytics, Aim) → testimonial → **free AEO report lead magnet** → agents-by-channel grid → interactive "Try a Profound Agent" → events strip → final CTA → status-page line ("All services are online") → footer.
- **Notable:** the free-report block sits mid-page as a second hero. A live "all services online" line in the footer is a cheap, high-credibility trust signal.
- Sources: https://tryprofound.com, https://www.tryprofound.com/brand, https://cms.docs.tryprofound.com/blog/tailwind-token

#### withgauge.com — Gauge
- **Hero H1:** "**Be the Answer for AI**" — 5 words, category-claim + outcome. Strongest short headline in the set.
- **Sub:** "Reach the millions of users exploring ChatGPT, Gemini, Perplexity, Claude Code, and more."
- **CTA:** dual — "Book a demo" (cal.com) + "Start for free". Both visible.
- **Theme:** light / near-white, flat editorial. Typeface and hex **not exposed** in source; do not guess. [obs]
- **Section order:** hero → logo bar (Mezmo, MotherDuck, Braintrust, Supabase, Resend, Mintlify) → **three-verb model: Track / Understand / Act** → offer block ("See how your AI visibility stacks up") → toolkit section → **7 case studies with hard numbers** → "Connect Measurement to Execution" → footer.
- **Notable:** Gauge is the closest structural analogue to HAIGE. Its whole middle is numeric case studies: "2.5% → 45% of the answers", "1% to 17% in four weeks", "41x LLM-referred traffic". It also states the approval loop explicitly: "Gauge publishes the **approved** work."
- Source: https://withgauge.com

#### athenahq.ai — AthenaHQ
- **Hero H1:** "See, Act, and Win on AI Search and Beyond" — triad verb pattern, 8 words.
- **Theme:** dark-first hero (**#080808**) with light surfaces below. [src]
- **Type:** **Space Grotesk** display + **Open Sans** body. [src]
- **Accent:** **#4F39F6** primary indigo, **#615FFF** gradient accent. [src]
- **Section order:** hero → "Featured on" press bar → logo bar → **persona blocks** (AEO Manager / Executive / PR / Content), each with a literal **Before → After + metric** three-column card → supported-model logo wall (ChatGPT, Perplexity, AI Overviews, AI Mode, Gemini, Claude, Copilot, Grok) → two feature explainers → industry tabs → results/quote cards with big stat numbers.
- **Notable and reusable:** the **Before / After / metric** card is the single most transferable component here for a diagnosis-and-fix product. Also: listing the supported AI engines as a logo wall is a category convention you should copy.
- Sources: https://athenahq.ai, https://athenahq.ai/brand-assets

#### airops.com — AirOps
- **Hero H1:** "Run the strategy that wins AI discovery" — 7 words, outcome promise.
- **Sub:** "AirOps works with you to set and execute the right AI discovery strategy to earn an agent's trust and drive growth for your brand."
- **Theme:** mixed — dark-green hero bands, light sections. [src]
- **Type:** **Serrif VF** headlines (a serif!) + **Saans** body + **Saans Mono** labels. [src]
- **Accent:** neon **#00FF64** on dark brand green **#002910**. [src]
- **Geometry:** `border-radius: 0` by rule, except primary buttons; pill labels 5px; primary CTA ~58px radius; 1px pale-green borders; deliberately **flat fills, no gradients**. [src]
- **Section order:** hero → a full-width **manifesto paragraph** set large ("The buyer journey used to unfold across touchpoints you could optimize one by one. Now it happens in a single AI recommendation.") → "The next phase of marketing needs a new playbook" with 4 numbered capability blocks → testimonials (Chime, Sanity, Venn) → **original research section** (Reality Index, citation studies) → platform CTA.
- **Notable:** the most distinctive brand in this set precisely because it breaks the uniform — serif headlines, sharp corners, a color nobody else uses. Also the only one leading with an argument paragraph instead of features.
- Source: https://www.airops.com, https://airops-style-guide.vercel.app/

### GTM / CRM adjacents

#### clay.com
- **Hero H1:** "Build systems to grow revenue" — 5 words.
- **Sub:** "Infrastructure to get any data, run agentic workflows, and launch GTM plays."
- **CTA:** "Start free trial" + "Get a demo" + a third, very 2026 option: **"or install directly with — paste in your coding agent"** with a copy-to-clipboard prompt string. Copy that idea; HAIGE has a Slack app.
- **Theme:** light, warm off-white **#FEFDFB** canvas, oat surface **#F3F2ED**. [ref]
- **Type:** **Roobert VF**. [ref] Accent: black actions, bright cyan **#AAEBFD** for active tabs. Radius 12px controls / 18px logo cards. [ref]
- Claymation-style 3D imagery instead of gradients. Flat paper surfaces, transparent borders, restrained shadow.
- **Section order:** dense mega-nav → hero → "Trusted by more than 500,000 GTM teams" → testimonial carousel with named CRO/RevOps titles → product pillars → customer logos → community/university → footer.
- Source: https://www.clay.com

#### attio.com
- **Hero H1:** "The CRM for agentic revenue" — 5 words, pure category claim.
- **Theme:** light, achromatic. Near-black **#000000** primary action, no chromatic accent. [ref]
- **Type:** **Inter Display** headlines + **Inter** body. Radius ~8–12px. Thin borders, no heavy shadows, flat. [ref]
- **The important lesson:** Attio's homepage is almost entirely **typographic mock UI**. Fetching it returns fake-but-plausible product text — a call transcript with timestamps, a Slack thread (`#pipeline / Marcus 10:24 / @Attio what deals should I focus on today?`), an agent tool-call log (`● Ran 3 commands ⎿ search-emails-by-metadata ⎿ update-record`), lead scores (98, 97, 96), deal rows with currency and dates, a "Deals at Risk" text block. None of it is a screenshot; it's all HTML text in product-shaped cards.
- **Section order:** hero with live-feeling UI → capability sections each led by a one-sentence italic-weight statement ("Your team, amplified.", "Speed to lead, every time.", "For the people who own the number.") → "Universal Context™" named-concept section → signals/ecosystem grid → footer.
- **This is the single best model for HAIGE's no-screenshot problem.** See §5.
- Source: https://attio.com

### Craft benchmarks

#### linear.app
- **Hero H1:** "The product development system for teams and agents" — 8 words.
- **Theme:** supports light and dark; surfaces **#F4F5F8** / **#222326**. [src] Type: Inter family / Linear's UI sans. Subtle elevation, mostly flat, occasional gradient hero treatment.
- **Section order:** hero with an animated real-issue mock (`ENG-2085`, activity feed, "Draft PR awaiting your review") → "Powering the companies building the future" logo bar → three-pillar thesis with **Fig 0.1 / Fig 0.2 / Fig 0.3 captions** → four capability sections (Intake and integrations / Planning and monitoring / AI and automations / Build, review, and ship), each with a **feature chip row** ("Linear Agent + Customer Requests + Triage + Linear Asks +") → changelog entries with dates → testimonials with real names and companies → footer.
- **Steal:** the `Fig 0.1` caption device; the chip row that names sub-features under each section so the page stays short but feels deep; using real-looking issue IDs and relative timestamps ("2min ago").
- Source: https://linear.app

#### resend.com
- **Theme:** **dark-mode first**, black **#000000** / iron grays. [src]
- **Type:** **ABC Favorit** display + **Inter** product + **Domaine Display** editorial. [src] Monochrome system, tonal gradients rather than flat black.
- **Hero device:** the code snippet *is* the value proposition — four lines to send an email. Page weight ~280KB.
- Source: https://resend.com, https://resend.com/handbook/design/what-are-our-brand-guidelines.md

#### vercel.com
- **Hero H1:** "Agentic Infrastructure" — 2 words.
- **Sub, and this is the clever bit:** "For coding agents to ship apps and agents automated by agents." Then three bullets that each **expand one clause of the subheadline**: "For coding agents: …", "To ship apps and agents: …", "Automated by agents: …".
- **CTA:** "Deploy now" + "Talk to sales".
- **Type:** **Geist Sans / Geist Mono**. [src] Mostly flat high-contrast white with black; grid/mesh and soft glow in marketing bands only. Restrained radii, Geist materials system.
- **Section order:** hero → three audience sections each anchored by a **named-customer proof line** ("Notion powers millions of agent conversations daily on Vercel", "Zapier serves over 100 million monthly visits", "Mintlify powers documentation for over 20,000 companies") with a 4-item feature list under each → "Recently shipped" changelog cards → final CTA.
- **Steal:** the "proof sentence per section" pattern. Each capability claim carries one named customer and one number.
- Source: https://vercel.com, https://vercel.com/geist/introduction

#### cursor.com
- **Hero H1:** "Cursor is your coding agent for building ambitious software." — 9 words, brand-as-subject.
- **Theme:** light marketing canvas with dark product/demo surfaces. **Cursor Gothic** display + system UI + **Berkeley Mono Variable** for technical text. [ref] Monochrome, painted-landscape wallpapers behind demos instead of gradients.
- **Section order:** hero with interactive multi-surface demo → company manifesto paragraph → **research timeline table** (year / topic / Published) → capability sections ("Agents turn ideas into code", "Works autonomously, runs in parallel", "In every tool, at every step", "Hand work to AI teammates") → testimonials from named individuals (Diana Hu/YC, Andrej Karpathy) → model picker demo → "Trusted by over half of the Fortune 500" → changelog.
- **Steal:** the alt text is written for the visual — "The interface is displayed over a scenic painted landscape wallpaper." They treat the demo backdrop as art direction, not a gradient.
- Source: https://cursor.com

#### lovable.dev
- **Hero:** "Create apps and websites by chatting with AI" with a **prompt box as the CTA** — no button.
- **Type:** **Camera Plain Variable**. [src, from loaded woff2] Palette cream **#f7f4ed**, charcoal **#1c1c1c**, off-white **#fcfbf8**, gray **#5f5f5d**, border **#eceae4**. [ref]
- **Section order:** prompt hero → logo bar → three numbered steps (Start with an idea / Watch it come to life / Refine and ship) → template gallery → counter stats (projects built, per week, monthly visits) → footer.
- Source: https://lovable.dev

#### intercom.com/fin
- **Hero H1:** "Perfect customer experiences made possible with Fin." CTA: "View demo" + "Start free trial".
- **The structural gimmick, and it is excellent:** the entire page is **"22 reasons to hire Fin"**, numbered 01–22, each a short argued paragraph with evidence, plus bracketed figure references like `[ 01.A ]` and `[ 06.A ]` pointing to embedded videos.
- **Type:** Saans / SaansMono / Serrif. [ref] Accent **Fin Orange #ff5600** on a light cream canvas with a glossy 3D hero object. [ref]
- **Steal:** numbered-argument structure is a strong alternative to a feature grid when you have a lot to prove and no screenshots. Every reason carries a number: "76% average resolution across 12,000+ customers", "226 product updates in 2025", "99.8% SLA".
- Source: https://www.intercom.com/fin

#### decagon.ai
- **Hero H1:** "The AI concierge for every customer" — 6 words. Sub: "Build, optimize, and scale AI agents that treat every customer like the only one."
- **Type:** **Circularxx / Circularxx Book** + **FK Grotesk Neue** for buttons. [ref]
- **Accent:** **#5754FF** indigo + **#FF6F22** orange glow; white canvas with **#131313 / #222222** bands; explicit indigo→lavender→peach gradient hero and an orange edge-glow on the CTA; pill CTAs, large-radius cards. [ref]
- **Section order:** hero with floating outcome messages ("I've applied your membership perks.") → enterprise logo bar → 4 case-study cards each with a quote + a single big metric (70% resolution, 80% deflection, 95% cost reduction) → "The Decagon difference" three-step (Build / Optimize / Scale your agent) → channel tabs (Voice/Chat/Email) → ROI metric grid → resource hub.

#### sierra.ai
- **Hero H1:** "Better outcomes. Built on Sierra." — 4 words. Almost no product description above the fold; category-leader confidence.
- Light/neutral canvas, dark green brand mark, image-led split compositions. No hex published. [src: https://www.sierra.ai/using-our-brand]
- **Section order:** hero → "Leading brands succeed with Sierra" logo bar → four benefit blocks including the commercially distinctive **"Pay for a job well done — outcome-based pricing"** → results → four testimonials with C-level names/titles → "The agent-building agent (Ghostwriter)" Build/Optimize tabs → four AI-improves-AI tools → four outcome capabilities → **Trust and reliability** section.
- **Steal:** a dedicated "Trust and reliability" section, and putting the pricing philosophy in the top four benefits.

#### 11x.ai
- **Hero H1:** "Digital Workers, Human Results" — 4 words, contrast pattern.
- **Type:** **ES Allianz**. [ref] Palette: white canvas, deep teal band **#0B252A**, muted teal **#406E7A**, black actions. Pastel feature cards at 16px radius, smaller cards 8–12px, pill CTAs, no heavy shadows, flat fills. [ref]
- **Section order:** hero → logo bar → **live interactive demo ("Talk to Julian, live" — pick a scenario and voice, opens a real browser call)** → testimonial wall with case-study links → "Meet Alice" → five capability cards → enterprise/security.
- **Steal:** the live playable demo as the mid-page centerpiece. If HAIGE can offer "run a free visibility scan on your domain", that is the same move — and it is exactly what Profound does with "Analyze my brand".

#### artisan.co
- **Positioning:** "Hire Ava, the autonomous AI BDR." Character/persona-led branding.
- **Type:** **Helvetica Now Text** + **Intrinseca**, with **Corinthia** loaded for decorative display. [src, loaded font files] No reliable color token exposed.
- Ships a full machine-readable layer: `llms.txt`, `llms-full.txt`, an MCP server, and `Accept: text/markdown` content negotiation. Worth mirroring for a product whose entire pitch is AI discoverability — **HAIGE's own site should be the proof of the product.**
- Source: https://www.artisan.co/llms.txt

---

## 2. Common section order for this category

Synthesized from the 16 sites plus the teardown literature. The top 10, in the order they actually appear:

1. **Hero** — H1 (4–8 words) + one-sentence sub + one primary CTA (+ one secondary). A product-shaped visual, not an illustration.
2. **Logo bar / proof strip** — immediately below the fold, grayscale, one line. If you have no customer logos, use **integration/engine logos** instead ("Works with ChatGPT, Gemini, Claude, Google AI Overviews") — this is standard practice in this category and Athena does it explicitly.
3. **The shift / problem statement** — one large-set paragraph naming the change in the world. Profound: "Over 100 million people search with AI every day. Brands that aren't recommended get left behind." AirOps runs a full manifesto block here.
4. **How it works, 3 verbs** — Gauge's Track / Understand / Act is the category-standard triad. For HAIGE: **Monitor → Diagnose → Draft → Approve → Measure** (five is defensible because the approval step is the differentiator).
5. **Capability surfaces** — 3–4 deep sections, each one capability rendered as product-shaped UI plus a one-sentence claim. Not a 6-up icon grid. Linear, Attio and Vercel all do this.
6. **Human-in-the-loop / control section** — see §4. Only 22% of AI agent pages have one; it is HAIGE's wedge.
7. **Evidence** — case studies or testimonials with names, titles, companies and **specific numbers**. Gauge's entire midsection; Athena's Before/After cards.
8. **Channel / integration wall** — which engines and channels are covered, grouped by category.
9. **Trust, security, and limits** — SOC2/data handling, plus explicitly what the agent will *not* do without approval.
10. **Pricing (or a clear pricing philosophy) → FAQ → final CTA → footer.**

Notes on ordering: social proof above or immediately below the fold lifts conversion 15–25% (designrevision). Pricing visibility correlates with ~17% higher conversion for PLG products. A second CTA at 60–75% scroll depth outperforms the hero CTA on click-through.

Sources: https://socialanimal.dev/blog/saas-landing-page-examples-2026-conversion-teardowns/, https://designrevision.com/blog/b2b-saas-landing-pages, https://www.pages.report/blog/saas-landing-page-examples

---

## 3. Headline copy patterns that work

Quantified pattern from an analysis of 15 category-defining AI products (themarketingfix.substack.com, Jun 2026):
- **10 of 15 headlines are 6 words or fewer**; median 5. Sweet spot 4–6.
- 13 of 15 use short H1 + explanatory subheadline. The sub carries the literal description.
- **Zero** use "AI-powered". Only 5 of 15 say "AI" or "agent" in the H1 at all; category leaders skip it entirely.
- Six recurring angles: brand-as-subject, category claim, new-category, contrast, outcome promise, question.

Verbatim examples worth modeling:

1. "**Be the Answer for AI**" — Gauge. Category claim + outcome in 5 words. Best-in-class for this exact category.
2. "**Better outcomes. Built on Sierra.**" — Sierra. Two fragments, 4 words, no product noun. Only works with leader-level confidence.
3. "**The CRM for agentic revenue**" — Attio. Pure category definition, 5 words.
4. "**Run the strategy that wins AI discovery**" — AirOps. Outcome promise, 7 words, verb-first.
5. "**Digital Workers, Human Results**" — 11x. Contrast pattern, 4 words.
6. "**Cursor is your coding agent for building ambitious software.**" — brand-as-subject; note "**your** coding agent", which reframes software as a hire.
7. "**See, Act, and Win on AI Search and Beyond**" — AthenaHQ. Verb triad; the closest structural match to a monitor/diagnose/fix product.

For HAIGE, the unexploited angle is **supervision**, because nobody else claims it. Directions in the observed patterns:
- Contrast: "Every fix, reviewed by you." / "Autonomous research. Human approval."
- Outcome: "Get found where buyers are actually looking."
- Category: "The supervised visibility agent."
- Verb triad (Athena/Gauge pattern): "Watch. Diagnose. Fix — with your approval."

Subheadline rule from the data: the H1 is for the human, the sub is increasingly written for machine extraction. Make the sub literal and complete: who it's for, which surfaces, what it produces.

---

## 4. Visual conventions

**Light vs dark.** The split has genuinely flipped. In this sample, **light or light-dominant: Profound, Gauge, Clay, Attio, Cursor, Lovable, Fin, Decagon, Sierra, 11x, Vercel, Artisan. Dark-first: Resend, AthenaHQ (hero). Mixed bands: AirOps, Linear.** Dark-with-purple-glow now reads as template. The teardown literature still recommends "dark-first for AI products" (thekitbase) while the design-criticism literature (setproduct, Sep 2026) argues the opposite — that near-black #0A0A0A plus a purple radial glow is the uniform, and light mode is the loudest differentiator. The sites with the best craft in this sample are light. **Recommendation for HAIGE: light, warm-neutral canvas with one or two deep full-bleed dark bands for the evidence/product sections.** That is the AirOps and 11x structure, and it gives you contrast without joining the black-page cohort.

**Typography pairings actually observed:**
- Serif display + neutral sans body + mono labels: **AirOps** (Serrif VF / Saans / Saans Mono), **Resend** (ABC Favorit / Inter / Domaine Display), **Intercom** (Serrif / Saans / SaansMono). This is the most credible pairing for a product that sells evidence and judgment.
- Geometric/grotesk display + plain sans body: AthenaHQ (Space Grotesk / Open Sans), Decagon (Circularxx / FK Grotesk Neue).
- Single-family display+text pair: Attio (Inter Display / Inter), Vercel (Geist Sans / Geist Mono), Clay (Roobert VF), 11x (ES Allianz), Lovable (Camera Plain Variable), Cursor (Cursor Gothic + Berkeley Mono).
- Named on the awards/gallery indexes as current: ABC Diatype, FK Grotesk, Suisse Int'l, Roobert, PP Mori, Uncut Sans, Hedvig Letters, Source Serif, IBM Plex Mono, Geist Mono, Martian Mono, Neue Haas Grotesk (maxibestof.one).
- **Plain Inter alone is now a tell.** "Inter is a fine interface font, and that is the problem. It is the default, so it carries no information." (setproduct). Use a mono for data/labels at minimum; it buys technical credibility cheaply and suits a product that reports metrics.

**Accent colors observed:** #376CFF (Profound blue) · #4F39F6 / #615FFF (Athena indigo) · #00FF64 on #002910 (AirOps neon-on-green) · #5754FF + #FF6F22 (Decagon indigo/orange) · #ff5600 (Fin orange) · #0B252A / #406E7A (11x teals) · #AAEBFD (Clay cyan) · monochrome black (Attio, Vercel, Cursor, Resend). Chartreuse-on-monochrome won a 2026 MUSE award for an AI B2B site (Hypha). **Blue-violet and indigo are saturated in this category — three of the four direct competitors use them.** Pick outside that band: a deep green, amber/ochre, teal, or a single chartreuse strike.

**Gradients/glow vs flat.** Flat dominates among the well-crafted: AirOps mandates flat fills and `border-radius: 0`; Clay uses paper surfaces; 11x uses flat pastel fills; Attio is border-driven with no decorative color; ElevenLabs-style restraint is repeatedly cited as the counter-move. Gradient/glow is used by Decagon (indigo→peach hero, orange CTA glow) and Athena. The purple radial glow behind the headline is explicitly named as trope #2 of the uniform.

**Border and card treatment.** 1px hairline borders over shadows, almost universally. Radii cluster at **8px (Profound, Attio), 12px (Clay controls), 16px (11x feature cards)**; AirOps goes to 0 except buttons; Decagon goes large/pill. Bento grids are named as trope #7 — still usable, but not as the only feature device. Glassmorphism panels over a glow are called out as the most dated element in the stack.

Sources: https://www.setproduct.com/blog/why-every-ai-startup-looks-the-same, https://maxibestof.one/websites/saas, https://museaward.com/winner-info.php?id=238818, https://www.aalpha.net/blog/ai-startup-website-design/

---

## 5. What the tasteful ones do that the slop ones don't

The most useful single source here is an audit of **60 AI agent landing pages** (ofspace.co, Jun 2026):

| Element | % of pages |
|---|---|
| Big promise in the headline | 85% (51/60) |
| Abstract AI visual in the hero | 72–85% |
| Shows a clear task | 73% |
| Logos for trust | 60% |
| Trust badges near the top | 58% |
| "Book a demo" as the main CTA | 45% |
| Feature-card grid next | 38% |
| **Shows where people stay in control** | **22% (13/60)** |
| **Shows the price** | **14% (8/60)** |
| **Says what the agent cannot do** | **12% (7/60)** |
| **Shows full flow: input → action → result** | **15% (9/60)** |
| System-level trust beyond logos/badges | 7% |

45 of 60 pages used at least three of the five defaults together. Only 4 of 60 avoided the template entirely.

**What the good ones do:**
- **Show the approval point.** Where the user checks work before it happens, visibly, on the page — not buried in a help center.
- **Make the responsibility split explicit.** What the user sets up / what the agent handles / what comes back for review.
- **Show the trigger before the output.** Makes it clear the user controls when and why the system runs.
- **State one limit.** "Nothing publishes without approval." Limits make an autonomous product read as considered, not less capable.
- **One specific task, one specific role, one specific outcome** in the hero rather than the full capability surface.
- **Real numbers with tabular numerals** (`font-variant-numeric: tabular-nums`), explicit timestamps ("Updated 14 minutes ago" over "Real-time"), and labeled-as-illustrative sample data. Placeholder data on an AI-native site reads as "the AI doesn't work yet." (ecrin.digital)
- **Capability surfaces, not feature grids.** Large editorial blocks where the visual *is* the feature, rendered as real product output. This eats 4–6× the vertical space of a feature grid and converts better.
- **Named, titled testimonials with metrics.** Anonymous quotes have near-zero measured impact.
- **Performance as design.** Resend 280KB, Dub 240KB, Linear <400KB / 1.1s on 4G. LCP <1.8s correlates with +15–22% vs pages over 3s.

**What the slop does:** near-black #0A0A0A + top-center purple radial glow + four-point sparkle icon + "Introducing X" pill above the H1 + Inter/Geist only + bento grid of rounded tiles + gradient-border cards with 1px glow + scrolling grey logo marquee + "Meet your AI copilot" H1 + glassmorphism panels + "Backed by YC" line + animated typing effect. Plus: competing CTAs above the fold, hidden pricing, generic "trusted by thousands", rotating testimonial carousels, and 90-second hero videos (both declining in effectiveness).

Self-audit questions worth running against any HAIGE draft (ofspace):
1. Hide the headline and logos — can a stranger still say what the agent does and what starts it?
2. Where, visibly, can the user approve, pause, edit or correct?
3. Can a visitor state who does what — user vs agent?
4. What is one thing the agent will not do without approval, stated on the page?
5. Would a simple trigger→action→result workflow explain more than your current hero visual?

Source: https://www.ofspace.co/blog/ai-agent-landing-page, https://www.ecrin.digital/newsroom/how-we-design-for-ai-native-b2b-saas-startups

---

## 6. Showing the product when there are no screenshots

**The best existing model is attio.com**, whose homepage is almost entirely typographic mock UI written as HTML text in product-shaped containers, not images: a timestamped call transcript, a Slack thread with an `@Attio` mention and an agent reply, a tool-call log (`● Ran 3 commands / ⎿ search-emails-by-metadata / ⎿ update-record`), scored lead rows, deal rows with dates and currency, and a text "Deals at Risk" briefing. Linear does the same with issue IDs (`ENG-2085`), an activity feed ("Triage Intelligence added the labels Performance and iOS · 2min ago") and a real diff. Cursor does it with a plan document, a task list and a Slack channel.

Six reusable devices, ranked for HAIGE:

1. **Trigger → action → result work item (top recommendation for the hero).** Three connected cards with status chips and connectors, no fake dashboard chrome. For HAIGE: *"Visibility on 'best AEO tool' dropped 12 points on ChatGPT (Tue 09:14)"* → *"Diagnosed: competitor page now cited in 7/10 answers; your /pricing page has no comparison section"* → *"Drafted: comparison page + 1 LinkedIn carousel — awaiting your approval."* This is the single highest-value component, because the third card is where the approval differentiator lives. Animate one state transition only.
2. **Text work-item cards with approval states.** The atomic unit your product changes, rendered as text: source channel, detected change, evidence, proposed fix, owner, Approve / Edit / Reject. Model: Omnim (landing-page.omnim.ai) — "Tell it what you need → Review and steer → Watch it run", with actions described as "visible, logged, and reversible" and nothing going live without approval.
3. **Event/log stream.** A monospaced, timestamped feed proving the monitoring mechanism: engine queried, prompt, citation found/lost, delta. Model: Gonzo by ControlTheory (controltheory.com/gonzo) and AlifOffice (alifoffice.com), both of which use CLI/JSON transcripts as their hero surface. Mono type plus real-looking timestamps is far more credible than an orb.
4. **Before/after evidence panel.** AthenaHQ's card is the template: literal "Before" and "After" columns plus one metric. For HAIGE: the actual AI answer text before and after the fix, with the citation highlighted. Since HAIGE's product *is* the answer text, an answer-diff panel is both honest and unusually distinctive — you can show it truthfully today with your own domain.
5. **Annotated process diagram.** A small numbered mechanism with callouts — *reads · decides · asks approval · writes back* — plus a data/privacy note. Explicitly recommended for pre-launch because it communicates mechanism without claiming a finished UI.
6. **Numbered argument page.** Intercom Fin's "22 reasons to hire Fin" — if you have no UI but a lot of reasoning, structure the page as numbered claims each carrying one piece of evidence and a `[ 04.A ]` figure reference.

Hard rules for a pre-launch page:
- **No lorem ipsum, no fake customer names, no invented metrics.** Label illustrative data as illustrative. Fabricated numbers on an AI-native site are the fastest possible credibility loss and the literature flags them repeatedly.
- **You can be genuinely truthful with your own data.** Run HAIGE on HAIGE, or on a public brand, and show the real answer text and real citation counts. That converts the absence of screenshots into an asset.
- **Substitute for the customer logo bar:** an engine/channel wall (ChatGPT, Gemini, Claude, Google AI Overviews, LinkedIn, X, Reddit) plus concrete capability stats. "Integration logos work even if you don't have customer logos yet." (thekitbase)
- **Make the site its own proof.** Artisan ships `llms.txt`, `llms-full.txt`, an MCP server and `Accept: text/markdown`; Resend ships a full agent-facing homepage of llms.txt links. For a product that sells AI discoverability, shipping these is both a demo and a credential — and the kind of detail that gets noticed and shared.

Sources: https://attio.com, https://landing-page.omnim.ai/, https://www.controltheory.com/gonzo/, https://alifoffice.com/, https://ledgerium.ai/about, https://athenahq.ai

---

## 7. Concrete recommendation for HAIGE

- **Theme:** light warm-neutral canvas (cream/off-white in the #FAF9F6–#FEFDFB range), two full-bleed dark bands for the evidence and approval sections. Avoid #0A0A0A + purple.
- **Type:** display serif or a characterful grotesk + neutral sans body + a mono for all metrics, timestamps, prompts and engine names. Avoid Inter-only. Tabular numerals everywhere a number appears.
- **Accent:** one color outside the indigo/blue-violet band that Profound, Athena and Decagon occupy.
- **Geometry:** 1px hairline borders, 8–12px radii, flat fills, no glassmorphism, no glow, no sparkle icon.
- **Hero:** ≤6-word H1 built on the supervision angle + literal subheadline + one primary CTA ("Run a free visibility scan" beats "Book a demo" — it is what Profound and 11x both do) + secondary "Book a demo". Hero visual = the trigger→action→result work item.
- **Section order:** hero → engine/channel wall → the shift (one large paragraph) → Monitor/Diagnose/Draft/Approve/Measure → 3 capability surfaces as typographic mock UI → **the approval section** (the wedge; 78% of competitors don't have one) → before/after answer-diff evidence → Slack + web app → trust, data handling and stated limits → pricing or pricing philosophy → FAQ → final CTA → footer with a live status line.
- **Ship `llms.txt`, `llms-full.txt` and markdown content negotiation on day one.** For this product it is the argument, not a nice-to-have.
