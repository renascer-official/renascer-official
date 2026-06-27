import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow?: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-white/60" : "text-navy-500"}`}>{eyebrow}</p> : null}
      <h2 className={`font-serif text-3xl leading-tight tracking-[0.12em] sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      <div className={`hairline mx-auto my-5 h-px w-24 ${light ? "opacity-70" : ""}`} />
      {body ? <p className={`text-sm leading-8 sm:text-base ${light ? "text-white/78" : "text-ink/70"}`}>{body}</p> : null}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light" }) {
  const className =
    variant === "primary"
      ? "bg-navy-900 text-white hover:bg-navy-700"
      : variant === "light"
        ? "bg-white text-navy-900 hover:bg-navy-50"
        : "border border-white/55 bg-transparent text-white hover:bg-white hover:text-navy-950";

  return (
    <a href={href} className={`inline-flex h-12 min-w-40 items-center justify-center px-6 text-sm font-semibold transition ${className}`}>
      {children}
      <span className="ml-4">›</span>
    </a>
  );
}
