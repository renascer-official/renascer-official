import Link from "next/link";

export function Mark({ light = false }: { light?: boolean }) {
  return (
    <span className="relative inline-flex h-12 w-16 shrink-0 items-center justify-center overflow-visible sm:h-[58px] sm:w-[78px]" aria-hidden="true">
      <img src="/renascer-new-mark.png" alt="" className="h-full w-full object-contain" />
    </span>
  );
}

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex min-w-0 items-center" aria-label="RENASCER トップページ">
      <img
        src={light ? "/renascer-new-logo-white.png" : "/renascer-new-logo-full.png"}
        alt="RENASCER"
        className={light ? "h-[43px] w-auto object-contain sm:h-[52px]" : "h-[56px] w-auto object-contain sm:h-[70px]"}
      />
    </Link>
  );
}
