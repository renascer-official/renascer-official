import Link from "next/link";

export function Mark({ light = false }: { light?: boolean }) {
  return (
    <span className="relative inline-flex h-11 w-14 shrink-0 items-center justify-center overflow-visible sm:h-[54px] sm:w-[72px] lg:h-[58px] lg:w-[78px]" aria-hidden="true">
      <img src="/renascer-mark.png" alt="" className={`h-11 w-auto object-contain sm:h-[54px] lg:h-[58px] ${light ? "brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.22)]" : ""}`} />
    </span>
  );
}

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex min-w-0 items-center gap-2 sm:gap-3" aria-label="RENASCER トップページ">
      <Mark light={light} />
      <span className="min-w-0 leading-none">
        <span className={`block font-serif text-[0.98rem] tracking-[0.18em] sm:text-[1.22rem] sm:tracking-[0.28em] ${light ? "text-white" : "text-navy-900"}`}>RENASCER</span>
        <span className={`mt-1.5 block text-[0.56rem] tracking-[0.22em] sm:text-[0.7rem] sm:tracking-[0.3em] ${light ? "text-white/80" : "text-slate-500"}`}>レナセール</span>
      </span>
    </Link>
  );
}
