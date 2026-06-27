export function ArrowMotif({ variant = "light" }: { variant?: "light" | "dark" }) {
  const main = variant === "dark" ? "url(#metalLight)" : "url(#metalNavy)";
  const muted = variant === "dark" ? "url(#metalMutedLight)" : "url(#metalMuted)";

  return (
    <svg viewBox="0 0 760 520" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="metalLight" x1="160" x2="690" y1="80" y2="410" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.42" stopColor="#c8ced8" />
          <stop offset="0.62" stopColor="#ffffff" />
          <stop offset="1" stopColor="#aab3bf" />
        </linearGradient>
        <linearGradient id="metalMutedLight" x1="80" x2="690" y1="120" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f0f3f6" />
          <stop offset="1" stopColor="#85919f" />
        </linearGradient>
        <linearGradient id="metalNavy" x1="150" x2="690" y1="100" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0A214D" />
          <stop offset="0.5" stopColor="#041B45" />
          <stop offset="0.7" stopColor="#5d6b7d" />
          <stop offset="1" stopColor="#0A214D" />
        </linearGradient>
        <linearGradient id="metalMuted" x1="80" x2="690" y1="120" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#c5ccd5" />
          <stop offset="1" stopColor="#6f7d8d" />
        </linearGradient>
      </defs>
      <path d="M58 422 C214 400 332 295 414 163" fill="none" stroke={muted} strokeWidth="17" strokeLinecap="round" opacity="0.72" />
      <path d="M66 386 C258 380 469 256 676 61" fill="none" stroke={main} strokeWidth="20" strokeLinecap="round" />
      <path d="M676 61 L657 142 L611 93 Z" fill={main} />
      <path d="M174 117 C265 73 377 83 430 154 C378 136 309 146 244 197 C207 226 175 254 132 267 C184 219 204 163 174 117Z" fill={main} opacity="0.98" />
      <path d="M85 474 C260 420 442 335 686 113" fill="none" stroke={muted} strokeWidth="4" opacity="0.38" />
      <path d="M73 496 C265 452 462 366 704 139" fill="none" stroke={muted} strokeWidth="2" opacity="0.22" />
    </svg>
  );
}
