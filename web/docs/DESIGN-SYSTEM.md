# HAIGE Design System

Version 3, November 2026. Cream, ink, orange. Applies to the marketing site and is written so the web app can inherit the tokens. Source of truth for values: `src/app/globals.css`. Primitives: `src/components/ui.tsx`.

## 1. The idea

HAIGE sells evidence and restraint: it measures where a company is missing from search and AI answers, drafts the fix, and waits for a yes. The site should read like a well-set report, not a dashboard advert.

- **Cream is the page.** Warm paper instead of white. It reads as editorial and calm, and it sets HAIGE apart from the near-black and indigo look of the AI visibility category.
- **Ink is the voice.** Type and primary actions are near-black.
- **Orange is the finding.** It marks what HAIGE found or changed, and nothing else.

Reference: ycombinator.com (cream canvas, serif headlines, pill buttons, orange as punctuation, few borders, lots of air). We borrow the principles, not the layout.

## 2. Color

| Token | Cream (default) | Night (`.theme-night`) | Use |
|---|---|---|---|
| `paper` | `#F4F0E6` | `#12110E` | Page canvas |
| `raised` | `#FBF8F1` | `#1C1A16` | Cards, inputs, product frames |
| `sunk` | `#EBE6D9` | `#0B0A08` | Tinted panels, figure backgrounds |
| `line` | `#DCD6C6` | `#2A2822` | Hairlines |
| `line-strong` | `#BFB8A5` | `#3F3C33` | Input and control borders |
| `ink` | `#15130F` | `#F4F0E6` | Text, primary buttons (16.3:1 on paper) |
| `ink-2` | `#57534A` | `#ADA899` | Secondary text (6.7:1) |
| `ink-3` | `#6B665B` | `#8A8576` | Captions, labels (about 5:1) |
| `signal` | `#FF5A1F` | `#FF6A2B` | Orange fills: mark, highlights, the one orange button |
| `signal-text` | `#B93D0A` | `#FF6A2B` | Orange as text (4.9:1 on paper) |
| `signal-soft` | `#FBE3D2` | `#33170A` | Orange tint behind a finding |
| `signal-ink` | `#15130F` | `#15130F` | Text on an orange fill (5.9:1) |
| `ok` / `ok-soft` | `#1B7046` / `#DCEBDC` | `#4CC38A` / `#10291D` | Approved, healthy |

Rules:

1. Roughly 85% cream, 12% ink, 3% orange on any screen.
2. Bright orange (`signal`) is never text on cream: it fails contrast at 2.7:1. Use `signal-text`.
3. Text on orange is always ink, never white.
4. One orange button per page (the final call to action). Every other primary button is ink.
5. One night section per page for rhythm, plus the footer. Night is a full token swap, so components need no dark variants.
6. Green appears only for approved or healthy states. No other hues.

## 3. Type

Two voices from one superfamily. **Serif says it, sans explains it.**

Source Serif and Source Sans were drawn as companions with matching proportions, so headings and body read as one voice. The root size is 17px because Source Sans runs small.

| Voice | Family | Source | Use |
|---|---|---|---|
| Display | Source Serif 4 (variable, optical size) | Google Fonts, OFL | Headlines, big numerals, the logo wordmark |
| Text | Source Sans 3 | Google Fonts, OFL | Body, UI, buttons, labels |

| Token | Size | Leading | Tracking | Voice |
|---|---|---|---|---|
| `text-hero` | 44 to 92px fluid | 1.0 | -0.03em | Display 400 |
| `text-h2` | 34 to 60px fluid | 1.04 | -0.025em | Display 400 |
| `text-h3` | 24px | 1.2 | -0.015em | Display 400 |
| `text-lead` | 18 to 21px fluid | 1.5 | 0 | Text 400 |
| body | 16px | 1.6 | 0 | Text 400 |
| `text-meta` | 13px | 1.45 | 0 | Text 400 |

Rules:

1. Serif is always weight 400 and always upright. No italics anywhere in headings.
2. Section headings are two-part: a statement in ink and a turn in `ink-2` (`SplitHeading`).
3. Sans carries 400 for prose and 500 for UI and lead-in words. No bold body copy.
4. No monospace, no uppercase tracked labels, no eyebrows above headings, no "01 / 02" tags and no pill badges. These read as template design. A heading stands on its own; a sequence uses a plain serif numeral.
5. Body measure stays under 62 characters. Headings use `text-balance`.

## 4. Shape and space

- **Radius:** controls are pills (`rounded-control`), chips 6px, cards 14px, panels 24px.
- **Borders:** almost none. Separate with whitespace. No rules above columns or blocks; the only hairlines are the dividers inside the FAQ list and the footer.
- **Shadow:** only on product frames that float (`shadow-float`). Never on cards or buttons.
- **Container:** 1200px, 20px gutters on mobile, 40px on desktop.
- **Section rhythm:** 80px vertical on mobile, 128px on desktop. No divider lines between sections.
- **Alignment:** section intros are centered (`SectionIntro`). Dense content below them is left-aligned.

## 5. Components

| Component | Notes |
|---|---|
| `Button` / `buttonStyles` | `primary`, `large`, `small` are ink pills. `ghost` is outlined. `signal` is the single orange button. |
| `SplitHeading`, `SectionIntro` | The two-part serif heading, alone or centered with a lead. |
| `Wordmark` | The symbol (two orange quarter circles) and the full logo lockup. Files live in `public/logo`; use the reversed lockup on night. Do not recolour, stretch or box the logo. |
| `WaitlistForm` | Pill field with the button inside. `accent` switches to the orange button. |

## 6. Motion

Motion explains a state change or sequences the argument. It never loops and never decorates.

- Curves: `--ease-out` for entering and leaving, `--ease-in-out` for movement on screen.
- Hero: staggered rise on load. No underline, highlight or coloured words in headlines; emphasis is tonal (ink against `ink-2`).
- Sections: one fade and 16px rise on scroll, once (`Reveal`). Static on touch devices.
- Press feedback: controls scale to 0.97.
- `prefers-reduced-motion`: travel is removed, end states are shown.

## 7. Voice

- Say: measures, diagnoses, drafts, asks for approval, publishes. Evidence, reviewer, work item.
- Never say: autopilot, hands-free, supercharge, seamless, 10x, "AI-powered". No exclamation marks.
- Every claim is a mechanism or a number with a source. Illustrative data is labelled illustrative.
- No em-dashes or en-dashes on the page.
