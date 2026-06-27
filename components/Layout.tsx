import Link from "next/link";
import { BrandLogo } from "@/components/Brand";
import { navigation, servicePages, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/92 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-3 sm:gap-5">
        <BrandLogo />
        <nav className="hidden items-center gap-9 text-sm font-medium text-navy-900 lg:flex">
          {navigation.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-navy-500">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="inline-flex h-10 items-center justify-center bg-navy-900 px-4 text-sm font-semibold text-white transition hover:bg-navy-700 sm:h-11 sm:px-5">
          お問い合わせ
          <span className="ml-3">›</span>
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-white">
      <div className="section-shell grid gap-10 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-ink/70">逆境を力に変え、企業の再成長を支えるパートナーとして、戦略と実行の両面から伴走します。</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-ink/70">
          {servicePages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="hover:text-navy-900">
              {page.title}
            </Link>
          ))}
          <Link href="/contact" className="hover:text-navy-900">お問い合わせ</Link>
        </div>
        <div className="text-sm leading-7 text-ink/70">
          <p className="font-semibold text-navy-900">RENASCER（レナセール）</p>
          <a href={`mailto:${site.email}`} className="hover:text-navy-900">{site.email}</a>
          <p className="mt-5 text-xs">© RENASCER. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
