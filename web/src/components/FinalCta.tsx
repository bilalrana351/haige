import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container, buttonStyles } from "./ui";
import { Reveal } from "./Reveal";

/* Quiet close: one serif line, one action. The only orange button on the page lives here. */
export function FinalCta() {
  return (
    <section id="get-started" aria-labelledby="cta-heading" className="pb-24 pt-16 md:pb-36 md:pt-24">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <h2 id="cta-heading" className="max-w-[12em] text-balance text-hero">
            Find out where you are missing.
          </h2>
          <p className="mt-7 max-w-[46ch] text-pretty text-lead text-ink-2">
            Create your account now. We are bringing teams in a few at a time and will email you when
            your workspace is ready.
          </p>
          <a href="/sign-up" className={`${buttonStyles.signal} group mt-9`}>
            Sign up
            <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
