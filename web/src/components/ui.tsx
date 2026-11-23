import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-10 ${className}`}>{children}</div>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof buttonStyles;
};

const base =
  "pressable inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium disabled:cursor-not-allowed disabled:opacity-60";

/* Ink is the primary action on cream (it inverts to cream on night). Orange is spent once per
   page, on the final call to action. */
export const buttonStyles = {
  primary: `${base} h-11 px-5 text-[0.9375rem] bg-ink text-paper hover:bg-ink/85`,
  signal: `${base} h-12 px-6 text-[0.9375rem] bg-signal text-signal-ink hover:bg-signal-hover`,
  ghost: `${base} h-11 px-5 text-[0.9375rem] border border-line-strong text-ink hover:border-ink`,
  large: `${base} h-12 px-6 text-[0.9375rem] bg-ink text-paper hover:bg-ink/85`,
  small: `${base} h-9 px-4 text-[0.875rem] bg-ink text-paper hover:bg-ink/85`,
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`${buttonStyles[variant]} ${className}`} {...props} />;
}

/* Section heading in two tones: the statement in ink, the turn in ink-2. Always upright. */
export function SplitHeading({
  id,
  lead,
  tail,
  className = "",
  as: Tag = "h2",
}: {
  id?: string;
  lead: ReactNode;
  tail?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag id={id} className={`text-balance ${Tag === "h1" ? "text-hero" : "text-h2"} ${className}`}>
      <span className="text-ink">{lead}</span>
      {tail && (
        <>
          {" "}
          <span className="text-ink-2">{tail}</span>
        </>
      )}
    </Tag>
  );
}

/* Centered section intro: heading and optional lead. The page's default way to open a section. */
export function SectionIntro({
  id,
  lead,
  tail,
  children,
  className = "",
}: {
  id: string;
  lead: ReactNode;
  tail?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto flex max-w-[820px] flex-col items-center text-center ${className}`}>
      <SplitHeading id={id} lead={lead} tail={tail} />
      {children && <p className="mt-6 max-w-[56ch] text-pretty text-lead text-ink-2">{children}</p>}
    </div>
  );
}

/* The logo lockup, from the supplied files in public/logo. `reversed` is the cream-on-dark cut. */
export function Wordmark({ reversed = false }: { reversed?: boolean }) {
  return (
    <Image
      src={reversed ? "/logo/haige-logo-reversed.svg" : "/logo/haige-logo-primary.svg"}
      alt="HAIGE"
      width={118}
      height={40}
      priority={!reversed}
      className="h-9 w-auto"
    />
  );
}
