export function ArrowMotif({ variant = "light" }: { variant?: "light" | "dark" }) {
  const stroke = variant === "dark" ? "#ffffff" : "#082b50";
  const muted = variant === "dark" ? "#b8c1cc" : "#9aa4b2";

  return (
    <svg viewBox="0 0 760 520" className="h-full w-full" aria-hidden="true">
      <path d="M58 422 C214 400 332 295 414 163" fill="none" stroke={muted} strokeWidth="18" strokeLinecap="round" opacity="0.75" />
      <path d="M66 386 C258 380 469 256 676 61" fill="none" stroke={stroke} strokeWidth="20" strokeLinecap="round" />
      <path d="M676 61 L657 142 L611 93 Z" fill={stroke} />
      <path d="M174 117 C265 73 377 83 430 154 C378 136 309 146 244 197 C207 226 175 254 132 267 C184 219 204 163 174 117Z" fill={stroke} opacity="0.98" />
      <path d="M85 474 C260 420 442 335 686 113" fill="none" stroke={muted} strokeWidth="4" opacity="0.45" />
      <path d="M73 496 C265 452 462 366 704 139" fill="none" stroke={muted} strokeWidth="2" opacity="0.26" />
    </svg>
  );
}
