export type IconName = "file-search" | "target" | "users" | "chart" | "brain" | "handshake" | "user" | "clipboard-check" | "trending-up";

export function LucideLineIcon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {name === "file-search" ? (
        <>
          <path d="M20 10h18l10 10v19" {...common} />
          <path d="M38 10v11h10" {...common} />
          <path d="M20 10v44h17" {...common} />
          <path d="M27 29h13M27 36h9" {...common} />
          <circle cx="43" cy="44" r="8" {...common} />
          <path d="m49 50 6 6" {...common} />
        </>
      ) : null}
      {name === "target" ? (
        <>
          <circle cx="31" cy="34" r="18" {...common} />
          <circle cx="31" cy="34" r="10" {...common} />
          <circle cx="31" cy="34" r="3" {...common} />
          <path d="M43 22 55 10M49 10h6v6" {...common} />
        </>
      ) : null}
      {name === "users" ? (
        <>
          <path d="M42 49c0-7-5-12-10-12s-10 5-10 12" {...common} />
          <circle cx="32" cy="24" r="7" {...common} />
          <path d="M17 46c0-5 3-9 7-10" {...common} />
          <path d="M47 46c0-5-3-9-7-10" {...common} />
          <circle cx="17" cy="28" r="5" {...common} />
          <circle cx="47" cy="28" r="5" {...common} />
        </>
      ) : null}
      {name === "chart" ? (
        <>
          <path d="M10 52h44" {...common} />
          <path d="M16 52V40h8v12M28 52V32h8v20M40 52V22h8v30" {...common} />
          <path d="M13 34c15-3 29-14 40-27" {...common} />
          <path d="M48 7h6v6" {...common} />
        </>
      ) : null}
      {name === "brain" ? (
        <>
          <path d="M22 47c-6-4-8-12-4-18-3-8 3-16 11-14 4-7 16-4 16 5 8 1 11 11 5 17 2 6-2 13-9 14" {...common} />
          <path d="M29 15v35M22 30h14M36 24h9M36 38h10" {...common} />
          <circle cx="24" cy="30" r="2.5" {...common} />
          <circle cx="45" cy="24" r="2.5" {...common} />
          <circle cx="46" cy="38" r="2.5" {...common} />
        </>
      ) : null}
      {name === "handshake" ? (
        <>
          <path d="M22 24 12 34l11 11 5-4 5 4 5-4 6 5 10-10-12-12-8 8-6-6" {...common} />
          <path d="m22 24 7-7 13 13M28 41l8 7M34 38l8 7" {...common} />
        </>
      ) : null}
      {name === "user" ? (
        <>
          <circle cx="32" cy="24" r="8" {...common} />
          <path d="M18 52c2-14 26-14 28 0" {...common} />
        </>
      ) : null}
      {name === "clipboard-check" ? (
        <>
          <path d="M23 13h18" {...common} />
          <path d="M25 10h14v7H25z" {...common} />
          <path d="M21 15h-3v39h28V15h-3" {...common} />
          <path d="m25 34 5 5 10-12M25 47h14" {...common} />
        </>
      ) : null}
      {name === "trending-up" ? (
        <>
          <circle cx="32" cy="32" r="22" {...common} />
          <path d="m18 40 11-11 8 8 12-17" {...common} />
          <path d="M43 20h6v6" {...common} />
        </>
      ) : null}
    </svg>
  );
}
