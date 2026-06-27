import Link from "next/link";
import { BrandLogo } from "@/components/Brand";
import { navigation, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950">
      <div className="section-shell flex h-[76px] items-center justify-between gap-3 sm:h-[90px] sm:gap-5">
        <BrandLogo light />
        <nav className="hidden items-center gap-10 text-xs font-semibold tracking-[0.14em] text-white/80 lg:flex">
          {navigation.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden h-10 items-center justify-center border border-white/45 px-5 text-xs font-semibold tracking-[0.14em] text-white transition hover:bg-white hover:text-navy-950 xl:inline-flex">
          お問い合わせ
          <span className="ml-3">›</span>
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.35fr_0.85fr_1fr]">
        <div>
          <BrandLogo light />
          <p className="mt-6 max-w-sm text-sm leading-8 text-white/72">逆境を力に変え、企業の再成長を支えるパートナーとして、戦略と実行の両面から伴走します。</p>
        </div>
        <div className="grid gap-3 border-white/20 text-sm text-white/70 md:border-l md:pl-10">
          <Link href="/#services" className="hover:text-white">支援領域</Link>
          <Link href="/#cases" className="hover:text-white">実績</Link>
          <Link href="/#about" className="hover:text-white">会社情報</Link>
          <Link href="/contact" className="hover:text-white">お問い合わせ</Link>
        </div>
        <div className="border-white/20 text-sm leading-8 text-white/70 md:border-l md:pl-10">
          <p className="font-semibold text-white">お問い合わせ</p>
          <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/65">© RENASCER All Rights Reserved.</p>
    </footer>
  );
}
