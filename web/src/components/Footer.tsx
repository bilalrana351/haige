import { Container, Wordmark } from "./ui";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#how", label: "How it works" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#faq", label: "FAQ" },
      { href: "/sign-up", label: "Sign up" },
      { href: "/sign-in", label: "Log in" },
    ],
  },
  {
    title: "For agents",
    links: [{ href: "/llms.txt", label: "llms.txt" }],
  },
];

export function Footer() {
  return (
    <footer className="theme-night pt-16 md:pt-24">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark reversed />
          <p className="mt-6 max-w-[14em] font-display text-[1.75rem] leading-[1.15] tracking-[-0.02em] text-ink">
            Get ranked. Get named. <span className="text-ink-2">Nothing ships without a yes.</span>
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-[0.9375rem] font-medium text-ink">{c.title}</p>
              <ul className="mt-4 grid gap-2.5 text-[0.9375rem] text-ink-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a className="hover:text-ink" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>
      <Container className="mt-16">
        <div className="flex items-center justify-between border-t border-line py-6 text-meta text-ink-3">
        <p>
          &copy; <span className="numeric">2026</span> HAIGE. All rights reserved.
        </p>
        <p>The AI Growth Engine</p>
      </div>
      </Container>
    </footer>
  );
}
