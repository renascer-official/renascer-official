import Link from "next/link";

export function Mark({ light = false }: { light?: boolean }) {
  return (
    <span className="relative inline-flex h-10 w-12 shrink-0 items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 72 56" className="h-10 w-12">
        <path
          d="M12 42 C31 39 28 21 11 18 C31 13 44 19 42 31 C55 23 62 14 67 5 C65 23 55 41 39 50 C32 54 21 52 12 42Z"
          fill={light ? "#ffffff" : "#082b50"}
        />
        <path d="M7 46 C23 44 34 38 48 27" fill="none" stroke={light ? "#b8c1cc" : "#9aa4b2"} strokeWidth="4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="RENASCER トップページ">
      <img src="/renascer-logo.svg" alt="RENASCER レナセール" className="h-10 w-auto max-w-[150px] sm:h-11 sm:max-w-[190px]" />
      {light ? <span className="sr-only">RENASCER レナセール</span> : null}
    </Link>
  );
}
