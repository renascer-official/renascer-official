import Link from "next/link";
import { ArrowMotif } from "@/components/ArrowMotif";
import { ButtonLink, SectionHeading } from "@/components/Section";

const growth = [
  {
    icon: "doc",
    title: "逆境の整理",
    body: "現状と課題を多角的に分析し、再成長の起点を明確にします。",
  },
  {
    icon: "target",
    title: "勝ち筋の設計",
    body: "市場・競合・自社の強みを踏まえ、実現性の高い戦略を設計します。",
  },
  {
    icon: "people",
    title: "実行の伴走",
    body: "計画の実行段階まで深く関与し、成果創出まで伴走します。",
  },
];

const services = [
  {
    icon: "bars",
    title: "営業支援",
    body: "営業戦略の設計から組織強化、プロセス改善まで支援し、持続的な売上成長を実現します。",
    href: "/sales",
  },
  {
    icon: "ai",
    title: "DX・AI活用支援",
    body: "データとテクノロジーを活用し、業務プロセスの最適化と新たな価値創出を支援します。",
    href: "/ai-dx",
  },
  {
    icon: "handshake",
    title: "アライアンス戦略",
    body: "パートナーシップの構築・強化を通じて、事業のスケールと競争優位性の確立を支援します。",
    href: "/alliance",
  },
];

const strengths = [
  {
    icon: "person",
    title: "経営者に近い距離",
    body: "経営者の想いに寄り添い、信頼関係を築きながら本質的な課題解決に取り組みます。",
  },
  {
    icon: "check",
    title: "現場実行まで支援",
    body: "戦略立案で終わらせず、現場に入り込み成果が出るまで徹底的に伴走します。",
  },
  {
    icon: "trend",
    title: "長期的な成長を重視",
    body: "短期的な成果だけでなく、持続的な企業価値向上に向けた基盤づくりを支援します。",
  },
];

function Icon({ type, light = false }: { type: string; light?: boolean }) {
  const stroke = light ? "currentColor" : "#001f3f";
  const common = { fill: "none", stroke, strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      {type === "doc" ? (
        <>
          <rect x="19" y="14" width="26" height="34" rx="2" {...common} />
          <path d="M25 24h14M25 31h11M25 38h8" {...common} />
          <circle cx="43" cy="44" r="8" {...common} />
          <path d="M49 50l6 6" {...common} />
        </>
      ) : null}
      {type === "target" ? (
        <>
          <circle cx="32" cy="34" r="17" {...common} />
          <circle cx="32" cy="34" r="9" {...common} />
          <circle cx="32" cy="34" r="2" fill={stroke} />
          <path d="M41 25l10-10M48 15h6v6" {...common} />
        </>
      ) : null}
      {type === "people" ? (
        <>
          <circle cx="32" cy="23" r="6" {...common} />
          <circle cx="18" cy="29" r="5" {...common} />
          <circle cx="46" cy="29" r="5" {...common} />
          <path d="M22 48c1.5-8 18.5-8 20 0M8 48c1-6 12-7 16-2M40 46c4-5 15-4 16 2" {...common} />
        </>
      ) : null}
      {type === "bars" ? (
        <>
          <path d="M10 51h44" {...common} />
          <rect x="14" y="36" width="7" height="15" fill={stroke} />
          <rect x="28" y="28" width="7" height="23" fill={stroke} />
          <rect x="42" y="18" width="7" height="33" fill={stroke} />
          <path d="M12 32c17-2 29-12 39-25M47 7h7v7" {...common} />
        </>
      ) : null}
      {type === "ai" ? (
        <>
          <path d="M20 48V34c-7-8-3-22 10-24 12-2 22 7 22 19 0 8-5 15-12 18v7" {...common} />
          <circle cx="31" cy="29" r="3" {...common} />
          <circle cx="43" cy="23" r="3" {...common} />
          <circle cx="43" cy="37" r="3" {...common} />
          <path d="M34 29l7-5M34 31l7 5M43 26v8" {...common} />
        </>
      ) : null}
      {type === "handshake" ? (
        <>
          <path d="M12 31l9-9 11 11 6-6 14 14-8 8-6-5-5 4-5-4-5 3-11-11z" {...common} />
          <path d="M21 22l7-7 9 9M37 27l6-6 9 9M25 38l9 8M31 35l11 10" {...common} />
        </>
      ) : null}
      {type === "person" ? (
        <>
          <circle cx="32" cy="24" r="9" {...common} />
          <path d="M17 52c2-15 28-15 30 0" {...common} />
        </>
      ) : null}
      {type === "check" ? (
        <>
          <rect x="18" y="12" width="28" height="40" rx="3" {...common} />
          <path d="M25 25l4 4 9-10M25 37h14M25 44h10" {...common} />
        </>
      ) : null}
      {type === "trend" ? (
        <>
          <circle cx="32" cy="32" r="23" {...common} />
          <path d="M18 42l11-11 8 7 12-17M44 21h6v6" {...common} />
        </>
      ) : null}
    </svg>
  );
}

function RoundIcon({ type, light = false }: { type: string; light?: boolean }) {
  return (
    <span className={`mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-full border p-4 ${light ? "border-white/50 text-white" : "border-navy-900/20 text-navy-900"}`}>
      <Icon type={type} light={light} />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(64,88,114,0.42),transparent_30%),linear-gradient(180deg,#04162d_0%,#001b37_100%)]" />
        <div className="absolute bottom-[-24px] left-0 right-0 h-56 opacity-30 [background:repeating-radial-gradient(ellipse_at_56%_100%,transparent_0,transparent_10px,rgba(255,255,255,.28)_11px,transparent_12px)]" />
        <div className="section-shell relative grid min-h-[620px] items-center gap-4 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:py-16">
          <div className="relative z-10">
            <h1 className="font-serif text-[2.28rem] leading-[1.58] tracking-[0.08em] sm:text-5xl sm:tracking-[0.2em] lg:text-[3.45rem]">
              何度でも<br />
              立ち上がる企業へ。
            </h1>
            <p className="mt-6 max-w-sm font-serif text-base leading-8 tracking-[0.06em] text-white/80 sm:text-lg sm:tracking-[0.18em]">再成長の戦略と実行を、経営者の隣で支える。</p>
            <p className="mt-6 text-sm tracking-[0.08em] text-white/70 sm:tracking-[0.14em]">Rise Again. Grow Stronger.</p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="secondary">相談する</ButtonLink>
            </div>
          </div>
          <div className="relative h-[310px] sm:h-[430px] lg:h-[540px]">
            <div className="absolute inset-[-7%] opacity-95">
              <ArrowMotif variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24" id="about">
        <div className="section-shell">
          <SectionHeading
            title="RENASCERが支える再成長"
            body="企業がもう一度、成長軌道に戻るために。私たちは、戦略から実行までを一貫して支援します。"
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-0">
            {growth.map((item, index) => (
              <div key={item.title} className={`px-8 text-center ${index > 0 ? "border-navy-900/10 md:border-l" : ""}`}>
                <RoundIcon type={item.icon} />
                <h3 className="mt-6 font-serif text-2xl tracking-[0.18em] text-navy-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-8 text-white">
        <div className="section-shell">
          <p className="flex items-center justify-center gap-8 text-center font-serif text-xl leading-relaxed tracking-[0.08em] sm:text-3xl sm:tracking-[0.22em]">
            <span className="hidden h-px w-28 bg-white/40 sm:block" />
            一度沈んだ経験を、次の飛躍の力に。
            <span className="hidden h-px w-28 bg-white/40 sm:block" />
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24" id="services">
        <div className="section-shell">
          <SectionHeading title="支援領域" />
          <div className="mx-auto mt-12 max-w-5xl divide-y divide-navy-900/10 border-y border-navy-900/10">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group grid gap-6 py-8 transition hover:bg-navy-50/70 sm:grid-cols-[150px_1fr_44px] sm:items-center sm:px-6">
                <div className="flex justify-center sm:justify-start">
                  <span className="flex h-24 w-24 items-center justify-center p-2 text-navy-900">
                    <Icon type={service.icon} />
                  </span>
                </div>
                <div className="border-navy-900/10 text-center sm:border-l sm:pl-10 sm:text-left">
                  <h3 className="font-serif text-2xl tracking-[0.08em] text-navy-900 sm:tracking-[0.2em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{service.body}</p>
                </div>
                <span className="mx-auto text-4xl text-navy-900 transition group-hover:translate-x-1 sm:mx-0">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24" id="cases">
        <div className="section-shell">
          <SectionHeading title="RENASCERの強み" light />
          <div className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-3 md:gap-0">
            {strengths.map((item, index) => (
              <div key={item.title} className={`px-8 text-center ${index > 0 ? "border-white/20 md:border-l" : ""}`}>
                <RoundIcon type={item.icon} light />
                <h3 className="mt-6 font-serif text-2xl tracking-[0.18em]">{item.title}</h3>
                <p className="mt-5 text-sm leading-8 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 text-center sm:py-24">
        <div className="absolute bottom-[-165px] right-[-120px] h-[360px] w-[560px] opacity-55">
          <ArrowMotif />
        </div>
        <div className="section-shell relative z-10">
          <h2 className="font-serif text-2xl leading-relaxed tracking-[0.08em] text-navy-900 sm:text-4xl sm:tracking-[0.2em]">まずは現状をお聞かせください。</h2>
          <p className="mt-5 text-sm leading-8 text-ink/70">貴社の課題やご状況を丁寧に伺い、再成長に向けた最適なアプローチをご提案します。</p>
          <div className="mt-9">
            <ButtonLink href="/contact">相談する</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
