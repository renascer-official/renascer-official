import Link from "next/link";
import { ArrowMotif } from "@/components/ArrowMotif";
import { ButtonLink, SectionHeading } from "@/components/Section";
import { challengeLinks, servicePages } from "@/lib/site";

const strengths = [
  ["経営者視点", "経営課題の本質に向き合い、全体最適の視点で成長戦略を描きます。"],
  ["実行まで伴走", "戦略の策定にとどまらず、現場に入り込み成果創出まで支援します。"],
  ["再成長を重視", "短期成果だけでなく、企業価値を長く伸ばす仕組みづくりを支えます。"],
];

const process = [
  ["01", "現状整理", "ヒアリングと分析を通じて、課題の構造と優先テーマを明確にします。"],
  ["02", "戦略設計", "経営目標から逆算し、実現性の高い戦略とアクションを設計します。"],
  ["03", "実行支援", "計画の実行を伴走し、進捗管理と改善を続けながら成果創出まで支援します。"],
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10">
            <p className="mb-6 text-sm font-semibold tracking-[0.22em] text-navy-700">Rise Again. Grow Together.</p>
            <h1 className="font-serif text-4xl leading-[1.55] tracking-[0.08em] text-navy-900 sm:text-5xl lg:text-6xl">
              逆境を力に変え、<br />
              事業を成長軌道へ。
            </h1>
            <p className="mt-7 max-w-xl text-base leading-9 text-ink/72">
              営業支援・AI活用・入札支援・事業開発を通じて、企業の成長を仕組みから支援します。
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">相談する</ButtonLink>
              <ButtonLink href="#services" variant="secondary">支援領域を見る</ButtonLink>
            </div>
          </div>
          <div className="relative h-[360px] sm:h-[460px] lg:h-[560px]">
            <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(160deg,transparent_0,transparent_16px,#082b50_17px,transparent_18px)]" />
            <ArrowMotif />
          </div>
        </div>
      </section>

      <section className="bg-navy-50/55 py-16 sm:py-20" id="challenges">
        <div className="section-shell">
          <SectionHeading title="あなたの課題はどれですか？" body="課題から支援領域を選び、必要な打ち手を素早く確認できます。" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {challengeLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group border border-navy-900/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-navy-500 hover:shadow-soft">
                <p className="text-xs font-semibold tracking-[0.18em] text-navy-500">{item.label}</p>
                <p className="mt-4 min-h-14 font-serif text-xl leading-relaxed text-navy-900">{item.title}</p>
                <span className="mt-5 inline-flex text-xl text-navy-900 transition group-hover:translate-x-1">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24" id="about">
        <div className="section-shell">
          <SectionHeading
            title="RENASCERについて"
            body="RENASCERは、ポルトガル語で“再生”を意味します。私たちは、企業がもう一度立ち上がり、より高く成長するために、戦略から実行まで伴走します。"
          />
        </div>
      </section>

      <section className="border-y border-navy-900/10 bg-white py-20 sm:py-24" id="services">
        <div className="section-shell">
          <SectionHeading title="支援領域" />
          <div className="mt-12 grid border border-navy-900/10 md:grid-cols-2 lg:grid-cols-4">
            {servicePages.slice(0, 4).map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="group min-h-64 border-b border-navy-900/10 p-7 transition hover:bg-navy-50 md:border-r lg:border-b-0">
                <div className="mb-8 flex h-14 w-14 items-center justify-center border border-navy-900/20 text-2xl text-navy-900">↗</div>
                <h3 className="font-serif text-2xl tracking-[0.08em] text-navy-900">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-ink/68">{service.lead}</p>
                <span className="mt-7 inline-block text-sm font-semibold text-navy-900 group-hover:translate-x-1">詳細を見る ›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24" id="cases">
        <div className="section-shell">
          <SectionHeading title="なぜRENASCERが選ばれるのか" light />
          <div className="mt-12 grid gap-px bg-white/20 md:grid-cols-3">
            {strengths.map(([title, body]) => (
              <div key={title} className="bg-navy-950 p-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 text-2xl">↗</div>
                <h3 className="font-serif text-2xl tracking-[0.08em]">{title}</h3>
                <p className="mt-5 text-sm leading-8 text-white/72">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading title="ご支援の流れ" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map(([num, title, body]) => (
              <div key={num} className="border border-navy-900/10 bg-white p-8 shadow-sm">
                <p className="font-serif text-3xl text-navy-500">{num}</p>
                <h3 className="mt-8 font-serif text-2xl tracking-[0.08em] text-navy-900">{title}</h3>
                <p className="mt-5 text-sm leading-8 text-ink/68">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 text-center text-white">
        <div className="absolute bottom-[-160px] right-[-80px] h-[360px] w-[520px] opacity-40">
          <ArrowMotif variant="dark" />
        </div>
        <div className="section-shell relative z-10">
          <h2 className="font-serif text-3xl tracking-[0.16em] sm:text-4xl">再成長の一歩を、ここから。</h2>
          <p className="mt-6 text-sm leading-8 text-white/78">まずはお気軽にご相談ください。</p>
          <div className="mt-9">
            <ButtonLink href="/contact" variant="light">相談する</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
