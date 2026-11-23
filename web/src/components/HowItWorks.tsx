import { Container } from "./ui";
import { Reveal } from "./Reveal";

/* The five steps side by side, so the whole loop reads on one screen. Plain words, no product
   mockups. The step name leads its sentence. The one step that needs the customer has an orange numeral. */
const steps = [
  {
    verb: "Monitor",
    title: "See where you show up",
    text: "Every day HAIGE asks ChatGPT, Gemini and Claude the questions your buyers ask, and checks where you rank on Google for the same topics.",
  },
  {
    verb: "Diagnose",
    title: "Find out why you are missing",
    text: "When a competitor is named and you are not, HAIGE shows you the reason: the page, the passage or the source they have and you do not.",
  },
  {
    verb: "Draft",
    title: "Get the fix written",
    text: "HAIGE writes the change in full. A page update, a blog post, or a reply where your buyers are asking.",
  },
  {
    verb: "Approve",
    title: "Say yes or no",
    text: "Someone on your team reads the exact version and approves it. Nothing is published without that yes.",
    yours: true,
  },
  {
    verb: "Measure",
    title: "See if it worked",
    text: "HAIGE asks the same questions again and reports what changed, with dates, so you can tell movement from luck.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="theme-night py-16 md:py-20 lg:mx-4 lg:rounded-panel"
    >
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          {/* Two lines on desktop, so the heading and all five steps fit on one screen. */}
          <h2 id="how-heading" className="text-balance text-h2">
            <span className="text-ink xl:block">HAIGE does the work in five steps.</span>{" "}
            <span className="text-ink-2 xl:block">You approve before anything goes live.</span>
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:mt-14 xl:grid-cols-5 xl:gap-x-7">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.verb}
              delay={i * 0.06}
            >
              <span
                aria-hidden
                className={`numeric block font-display text-[2.75rem] leading-none ${
                  s.yours ? "text-signal" : "text-ink-3"
                }`}
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-[1.5rem] leading-[1.15] tracking-[-0.015em] text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.55] text-ink-2">
                <span className="font-medium text-ink">{s.verb}.</span> {s.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
