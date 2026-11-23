import type { CSSProperties } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container, buttonStyles } from "./ui";

/* Centered editorial hero: one serif sentence, a lead and the sign-up actions. No product
   screenshot: there is no dashboard yet, so the page does not draw one. */
export function Hero() {
  /* CSS entrance, staggered 70ms per step. See .enter in globals.css. */
  const step = (i: number) => ({ "--i": i }) as CSSProperties;

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative pb-8 pt-14 md:pb-12 md:pt-24">
      <Container className="flex flex-col items-center text-center">
        <h1 id="hero-heading" style={step(0)} className="enter max-w-[13em] text-balance text-hero">
          <span className="text-ink-2">Building is no longer the bottleneck.</span>{" "}
          <span className="whitespace-nowrap">Being found is.</span>
        </h1>

        <p style={step(1)} className="enter mt-7 max-w-[52ch] text-pretty text-lead text-ink-2 md:mt-9">
          HAIGE finds where Google and AI answers leave your company out, writes the fix, and
          publishes it <span className="whitespace-nowrap text-ink">only when you say yes.</span>
        </p>

        {/* Plain links: these routes start sign-in and must not be prefetched. */}
        <div style={step(2)} className="enter mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="/sign-up" className={`${buttonStyles.large} group`}>
            Sign up
            <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="/sign-in" className={`${buttonStyles.ghost} h-12 px-6`}>
            Log in
          </a>
        </div>
      </Container>

    </section>
  );
}
