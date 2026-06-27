import Link from "next/link";

export function Mark({ light = false }: { light?: boolean }) {
  return (
    <span className="relative inline-flex h-12 w-16 shrink-0 items-center justify-center overflow-visible" aria-hidden="true">
      <img src="/renascer-mark.png" alt="" className={`h-12 w-auto object-contain ${light ? "brightness-0 invert" : ""}`} />
    </span>
  );
}

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="RENASCER トップページ">
      <Mark light={light} />
      <span className="leading-none">
        <span className={`block font-serif text-[1.15rem] tracking-[0.28em] sm:text-[1.25rem] ${light ? "text-white" : "text-navy-900"}`}>RENASCER</span>
        <span className={`mt-1.5 block text-[0.65rem] tracking-[0.38em] sm:text-xs ${light ? "text-white/75" : "text-slate-500"}`}>レナセール</span>
      </span>
    </Link>
  );
}
