import { Container, SectionIntro } from "./ui";
import { Reveal } from "./Reveal";

/* Why now: one concrete moment (a buyer asks an AI who to buy from), then two short paragraphs
   of plain prose. No columns, rules or figures. */
export function Channels() {
  return (
    <section id="why" aria-labelledby="channels-heading" className="py-20 md:py-32">
      <Container>
        <Reveal>
          <SectionIntro
            id="channels-heading"
            lead="Your next customer just asked ChatGPT who to buy from."
            tail="Did it name you?"
          />
        </Reveal>

        <Reveal
          delay={0.08}
          className="mx-auto mt-10 max-w-[640px] space-y-6 text-pretty text-center text-lead md:mt-12"
        >
          <p className="text-ink-2">
            When a buyer searches Google, you can look up where you rank and who sits above you.
            When they ask ChatGPT, Gemini or Claude, they get a short list of names and the
            conversation ends there. Nothing in your analytics shows whether you were on it.
          </p>
          <p className="text-ink">
            HAIGE asks those questions for you every day, so you know when you are being left out.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
