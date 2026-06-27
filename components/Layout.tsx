import Link from "next/link";
import { BrandLogo } from "@/components/Brand";
import { navigation, servicePages, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-3 sm:gap-5">
        <BrandLogo light />
        <nav className="hidden items-center gap-9 text-sm font-medium text-white/82 lg:flex">
          {navigation.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="inline-flex h-10 items-center justify-center border border-white/45 px-4 text-sm font-semibold text-white transition hover:bg-white hover:text-navy-950 sm:h-11 sm:px-5">
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
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.35fr_0.8fr_1fr]">
        <div>
          <BrandLogo light />
          <p className="mt-6 max-w-sm text-sm leading-8 text-white/70">逆境を力に変え、企業の再成長を支えるパートナーとして、戦略と実行の両面から伴走します。</p>
        </div>
        <div className="grid gap-3 border-white/15 text-sm text-white/72 md:border-l md:pl-10">
          {servicePages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="hover:text-white">
              {page.title}
            </Link>
          ))}
          <Link href="/contact" className="hover:text-white">お問い合わせ</Link>
        </div>
        <div className="border-white/15 text-sm leading-8 text-white/72 md:border-l md:pl-10">
          <p className="font-semibold text-white">RENASCER（レナセール）</p>
          <p>営業支援・AI/DX支援・入札支援</p>
          <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
          <p className="mt-6 text-xs text-white/50">© RENASCER. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
