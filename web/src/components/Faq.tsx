"use client";

import { useState } from "react";
import { Container } from "./ui";
import { Reveal } from "./Reveal";

/* Each answer leads with its shortest honest form, then the detail. */
const faqs = [
  {
    q: "Does HAIGE ever publish on its own?",
    short: "No.",
    a: "HAIGE does the checking, the diagnosis and the writing by itself. Publishing always waits for a person on your team to read the exact version and approve it.",
  },
  {
    q: "What does HAIGE work on?",
    short: "Google and AI answers.",
    a: "It measures two things: where you rank on Google, and whether ChatGPT, Gemini and Claude name you. To move them, it works on your website and blog, and on the places those engines read, such as Reddit, LinkedIn and X.",
  },
  {
    q: "How do you measure AI answers?",
    short: "By asking, again and again.",
    a: "HAIGE keeps a fixed list of the questions your buyers ask and puts them to each AI engine repeatedly. You get dated results showing how often you were named and how often your competitors were. It is never boiled down to a single score.",
  },
  {
    q: "What access does HAIGE need?",
    short: "Only what you connect.",
    a: "Read access to the sources it measures, some background on your company and your buyers, and publishing access only for the accounts you choose to connect. You can remove any connection at any time.",
  },
  {
    q: "What will it cost?",
    short: "Not set yet.",
    a: "People who sign up early will hear first and get early-access terms.",
  },
  {
    q: "When can I use it?",
    short: "Sign up now.",
    a: "You can create an account today. We are bringing teams in a few at a time and will email you when your workspace is ready.",
  },
];

/* Pick a question, read one answer. On desktop the questions sit on the left and the chosen answer
   is set large on the right; on phones the answer opens under its question. Every answer is in the
   HTML the server sends (inactive ones are only hidden), so crawlers can read all six. */
export function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 id="faq-heading" className="text-h2 text-ink">
            Questions, <span className="text-ink-2">answered straight.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="relative mt-10 md:mt-14 lg:min-h-[22rem]">
          <ul className="grid gap-1 lg:w-[40%]">
            {faqs.map((f, i) => {
              const on = i === active;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setActive(i)}
                    className={`pressable w-full rounded-[22px] px-5 py-3 text-left font-display text-[1.25rem] leading-[1.2] tracking-[-0.015em] lg:w-auto lg:rounded-full ${
                      on ? "bg-ink text-paper" : "text-ink-3 hover:text-ink"
                    }`}
                  >
                    {f.q}
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    hidden={!on}
                    className="pop-in px-5 pb-6 pt-4 lg:absolute lg:right-0 lg:top-0 lg:w-[52%] lg:p-0"
                  >
                    <p className="font-display text-[2.25rem] leading-[1.02] tracking-[-0.028em] text-ink lg:text-[3.5rem]">
                      {f.short}
                    </p>
                    <p className="mt-4 max-w-[46ch] text-lead text-ink-2 lg:mt-6">{f.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
