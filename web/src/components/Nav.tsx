"use client";

import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Container, Wordmark, buttonStyles } from "./ui";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  /* IntersectionObserver on a sentinel instead of a scroll listener. */
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden className="h-px w-full" />
      <header
        className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur-md ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#top" aria-label="HAIGE home">
              <Wordmark />
            </a>
            <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-[0.9375rem] text-ink-2 hover:text-ink">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Plain links, not next/link: these routes start sign-in and must not be prefetched. */}
          <div className="flex items-center gap-2">
            <a
              href="/sign-in"
              className="hidden px-3 text-[0.9375rem] text-ink-2 hover:text-ink sm:block"
            >
              Log in
            </a>
            <span className="hidden sm:block">
              <a href="/sign-up" className={buttonStyles.small}>
                Sign up
              </a>
            </span>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="pressable relative inline-flex size-10 items-center justify-center rounded-control border border-line-strong before:absolute before:-inset-1 before:content-[''] lg:hidden"
            >
              {open ? <X size={18} /> : <List size={18} />}
            </button>
          </div>
        </Container>

        {open && (
          <div id="mobile-nav" className="drop-in border-t border-line bg-paper lg:hidden">
            <Container className="flex flex-col py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 font-display text-[1.5rem] tracking-[-0.02em] text-ink last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a href="/sign-up" className={`${buttonStyles.primary} mt-3`}>
                Sign up
              </a>
              <a href="/sign-in" className={`${buttonStyles.ghost} mt-2`}>
                Log in
              </a>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
