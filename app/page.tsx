import Link from "next/link";
import { Fragment } from "react";
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

const flow = [
  {
    icon: "doc",
    number: "01",
    title: "現状整理",
    body: "ヒアリングを通じて、現状と課題を整理します。",
  },
  {
    icon: "target",
    number: "02",
    title: "戦略設計",
    body: "最適な戦略と実行計画を設計します。",
  },
  {
    icon: "people",
    number: "03",
    title: "実行支援",
    body: "改善・定着まで伴走します。",
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
  const stroke = light ? "currentColor" : "#041B45";
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      {type === "doc" ? (
        <>
          <path d="M21 12h18l8 8v31H21z" {...common} />
          <path d="M39 12v9h8M27 29h13M27 36h10M27 43h7" {...common} />
          <circle cx="43" cy="43" r="7" {...common} />
          <path d="M48 48l5 5" {...common} />
        </>
      ) : null}
      {type === "target" ? (
        <>
          <circle cx="31" cy="34" r="17" {...common} />
          <circle cx="31" cy="34" r="10" {...common} />
          <circle cx="31" cy="34" r="3" {...common} />
          <path d="M42 23l10-10M48 13h6v6" {...common} />
        </>
      ) : null}
      {type === "people" ? (
        <>
          <circle cx="32" cy="22" r="5.5" {...common} />
          <circle cx="19" cy="28" r="4.5" {...common} />
          <circle cx="45" cy="28" r="4.5" {...common} />
          <path d="M22 49c1.5-8.5 18.5-8.5 20 0M9 49c.8-6 10.5-6.8 15-2.2M40 46.8c4.5-4.6 14.2-3.8 15 2.2" {...common} />
        </>
      ) : null}
      {type === "bars" ? (
        <>
          <path d="M10 51h44" {...common} />
          <path d="M16 51V39h7v12M29 51V31h7v20M42 51V22h7v29" {...common} />
          <path d="M12 34c15-4 28-14 39-27M48 7h7v7" {...common} />
        </>
      ) : null}
      {type === "ai" ? (
        <>
          <path d="M20 50V35c-7-9-2-23 11-25 12-2 22 7 22 19 0 8-5 15-13 18v7" {...common} />
          <circle cx="31" cy="29" r="2.8" {...common} />
          <circle cx="43" cy="23" r="2.8" {...common} />
          <circle cx="43" cy="37" r="2.8" {...common} />
          <path d="M34 29l7-5M34 31l7 5M43 26v8" {...common} />
        </>
      ) : null}
      {type === "handshake" ? (
        <>
          <path d="M12 33l9-9 10 10 6-6 15 14-8 8-6-5-5 4-5-4-5 3z" {...common} />
          <path d="M21 24l7-7 10 10M37 28l6-6 9 9M25 39l8 7M31 36l10 9" {...common} />
        </>
      ) : null}
      {type === "person" ? (
        <>
          <circle cx="32" cy="24" r="8" {...common} />
          <path d="M18 52c2-14 26-14 28 0" {...common} />
        </>
      ) : null}
      {type === "check" ? (
        <>
          <path d="M20 11h24v42H20z" {...common} />
          <path d="M27 24l4 4 8-10M27 37h12M27 44h10" {...common} />
        </>
      ) : null}
      {type === "trend" ? (
        <>
          <circle cx="32" cy="32" r="22" {...common} />
          <path d="M18 42l11-11 8 7 12-17M44 21h6v6" {...common} />
        </>
      ) : null}
    </svg>
  );
}

function RoundIcon({ type, light = false }: { type: string; light?: boolean }) {
  return (
    <span className={`mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border p-[19px] ${light ? "border-white/65 text-white" : "border-navy-900/25 text-navy-900"}`}>
      <Icon type={type} light={light} />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(24,57,95,.58),transparent_34%),linear-gradient(180deg,#041B45_0%,#031736_100%)]" />
        <div className="absolute bottom-[-38px] left-0 right-0 h-[260px] opacity-35 [background:repeating-radial-gradient(ellipse_at_48%_100%,transparent_0,transparent_11px,rgba(255,255,255,.28)_12px,transparent_13px)]" />
        <div className="section-shell relative grid min-h-[430px] items-center gap-10 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:py-8">
          <div className="relative z-10">
            <h1 className="font-serif text-[2.35rem] leading-[1.5] tracking-[0.14em] sm:text-5xl lg:text-[3.05rem]">
              何度でも<br />
              立ち上がる企業へ。
            </h1>
            <p className="mt-5 max-w-lg font-serif text-[0.95rem] font-semibold leading-8 tracking-[0.08em] text-white/90">
              再成長の戦略と実行を、経営者の隣で支える。
            </p>
            <p className="mt-5 font-serif text-sm font-semibold tracking-[0.06em] text-white/90">Rise Again. Grow Stronger.</p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row">
              <Link href="/contact" className="inline-flex h-[46px] min-w-[205px] items-center justify-center border border-white/70 px-7 text-sm font-semibold tracking-[0.12em] text-white transition hover:bg-white hover:text-navy-950">
                相談する
                <span className="ml-8 text-lg leading-none">›</span>
              </Link>
              <Link href="/#services" className="inline-flex h-[46px] min-w-[205px] items-center justify-center border border-white/70 px-7 text-sm font-semibold tracking-[0.12em] text-white transition hover:bg-white hover:text-navy-950">
                支援領域を見る
                <span className="ml-8 text-lg leading-none">›</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[370px] lg:h-[420px]">
            <div className="absolute inset-[-8%_-10%_-8%_-7%] opacity-100">
              <ArrowMotif variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-9" id="about">
        <div className="section-shell">
          <SectionHeading
            title="RENASCERが支える再成長"
            body="企業がもう一度、成長軌道に戻るために。私たちは、戦略から実行までを一貫して支援します。"
          />
          <div className="mx-auto mt-8 grid max-w-4xl gap-8 md:grid-cols-3 md:gap-0">
            {growth.map((item, index) => (
              <div key={item.title} className={`px-8 text-center ${index > 0 ? "border-navy-900/20 md:border-l" : ""}`}>
                <RoundIcon type={item.icon} />
                <h3 className="mt-5 font-serif text-[1.55rem] tracking-[0.18em] text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-navy-900/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-6 text-white">
        <div className="section-shell">
          <p className="flex items-center justify-center gap-10 text-center font-serif text-2xl leading-relaxed tracking-[0.18em] sm:text-3xl">
            <span className="hidden h-px w-24 bg-white/45 sm:block" />
            一度沈んだ経験を、次の飛躍の力に。
            <span className="hidden h-px w-24 bg-white/45 sm:block" />
          </p>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10" id="services">
        <div className="section-shell">
          <SectionHeading title="支援領域" />
          <div className="mx-auto mt-4 max-w-[760px] divide-y divide-navy-900/20">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group grid gap-5 py-5 transition hover:bg-navy-50/70 sm:grid-cols-[130px_1fr_40px] sm:items-center sm:px-2">
                <div className="flex justify-center">
                  <span className="flex h-[92px] w-[92px] items-center justify-center p-3 text-navy-900">
                    <Icon type={service.icon} />
                  </span>
                </div>
                <div className="border-navy-900/20 text-center sm:border-l sm:pl-9 sm:text-left">
                  <h3 className="font-serif text-[1.65rem] tracking-[0.18em] text-navy-900">{service.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-7 text-navy-900/75">{service.body}</p>
                </div>
                <span className="mx-auto text-4xl font-light text-navy-900 transition group-hover:translate-x-1 sm:mx-0">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-8 sm:py-10" id="flow">
        <div className="section-shell">
          <SectionHeading title="ご支援の流れ" />
          <div className="mx-auto mt-7 grid max-w-[980px] items-center gap-5 md:grid-cols-[1fr_34px_1fr_34px_1fr]">
            {flow.map((item, index) => (
              <Fragment key={item.title}>
                <div className="border border-[#E6E8ED] bg-white px-7 py-6 text-center shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-3xl font-semibold tracking-[0.16em] text-navy-900">{item.number}</span>
                    <span className="h-12 w-12 text-navy-900">
                      <Icon type={item.icon} />
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold tracking-[0.16em] text-navy-900">{item.title}</h3>
                  <p className="mx-auto mt-3 max-w-[12rem] text-sm font-medium leading-7 text-navy-900/70">{item.body}</p>
                </div>
                {index < flow.length - 1 ? <span className="hidden text-center text-4xl font-light text-navy-900 md:block">→</span> : null}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-8 text-white sm:py-10" id="cases">
        <div className="section-shell">
          <SectionHeading title="RENASCERの強み" light />
          <div className="mx-auto mt-7 grid max-w-5xl gap-8 md:grid-cols-3 md:gap-0">
            {strengths.map((item, index) => (
              <div key={item.title} className={`px-9 text-center ${index > 0 ? "border-white/35 md:border-l" : ""}`}>
                <RoundIcon type={item.icon} light />
                <h3 className="mt-5 font-serif text-[1.45rem] tracking-[0.18em]">{item.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-white/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-9 text-center sm:py-10">
        <div className="absolute bottom-[-210px] right-[-150px] h-[430px] w-[650px] opacity-55">
          <ArrowMotif />
        </div>
        <div className="section-shell relative z-10">
          <h2 className="font-serif text-3xl leading-relaxed tracking-[0.18em] text-navy-900">まずは現状をお聞かせください。</h2>
          <p className="mt-3 text-sm font-medium leading-8 text-navy-900/75">貴社の課題やご状況を丁寧に伺い、再成長に向けた最適なアプローチをご提案します。</p>
          <div className="mt-7">
            <ButtonLink href="/contact">相談する</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
