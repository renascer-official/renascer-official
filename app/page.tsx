import Link from "next/link";
import { Fragment } from "react";
import { ArrowMotif } from "@/components/ArrowMotif";
import { LucideLineIcon, type IconName } from "@/components/LucideLineIcon";
import { ButtonLink, SectionHeading } from "@/components/Section";

const growth = [
  {
    icon: "file-search",
    title: "逆境の整理",
    body: "現状と課題を多角的に分析し、再成長の起点を明確にします。",
  },
  {
    icon: "target",
    title: "勝ち筋の設計",
    body: "市場・競合・自社の強みを踏まえ、実現性の高い戦略を設計します。",
  },
  {
    icon: "users",
    title: "実行の伴走",
    body: "計画の実行段階まで深く関与し、成果創出まで伴走します。",
  },
] satisfies Array<{ icon: IconName; title: string; body: string }>;

const services = [
  {
    icon: "chart",
    title: "営業支援",
    body: "営業戦略の設計から組織強化、プロセス改善まで支援し、持続的な売上成長を実現します。",
    href: "/sales",
  },
  {
    icon: "brain",
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
] satisfies Array<{ icon: IconName; title: string; body: string; href: string }>;

const flow = [
  {
    icon: "file-search",
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
    icon: "users",
    number: "03",
    title: "実行支援",
    body: "改善・定着まで伴走します。",
  },
] satisfies Array<{ icon: IconName; number: string; title: string; body: string }>;

const strengths = [
  {
    icon: "user",
    title: "経営者に近い距離",
    body: "経営者の想いに寄り添い、信頼関係を築きながら本質的な課題解決に取り組みます。",
  },
  {
    icon: "clipboard-check",
    title: "現場実行まで支援",
    body: "戦略立案で終わらせず、現場に入り込み成果が出るまで徹底的に伴走します。",
  },
  {
    icon: "trending-up",
    title: "長期的な成長を重視",
    body: "短期的な成果だけでなく、持続的な企業価値向上に向けた基盤づくりを支援します。",
  },
] satisfies Array<{ icon: IconName; title: string; body: string }>;

function RoundIcon({ type, light = false }: { type: IconName; light?: boolean }) {
  return (
    <span className={`mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border p-[18px] ${light ? "border-white/65 text-[#EAF0F7]" : "border-navy-900/25 text-navy-700"}`}>
      <LucideLineIcon name={type} className="h-full w-full" />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(24,57,95,.58),transparent_34%),linear-gradient(180deg,#041B45_0%,#031736_100%)]" />
        <div className="absolute bottom-[-38px] left-0 right-0 h-[260px] opacity-35 [background:repeating-radial-gradient(ellipse_at_48%_100%,transparent_0,transparent_11px,rgba(255,255,255,.28)_12px,transparent_13px)]" />
        <div className="section-shell relative grid min-h-[430px] items-center gap-8 py-9 sm:py-10 lg:grid-cols-[0.86fr_1.14fr] lg:py-8">
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
          <div className="relative -mt-2 h-[280px] sm:mt-0 sm:h-[370px] lg:h-[420px]">
            <div className="absolute inset-[-10%_-10%_-6%_-7%] opacity-100">
              <ArrowMotif variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-7 sm:py-9" id="about">
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

      <section className="bg-white py-7 sm:py-10" id="services">
        <div className="section-shell">
          <SectionHeading title="支援領域" />
          <div className="mx-auto mt-4 max-w-[760px] divide-y divide-navy-900/20">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group grid gap-5 py-5 transition hover:bg-navy-50/70 sm:grid-cols-[130px_1fr_40px] sm:items-center sm:px-2">
                <div className="flex justify-center">
                  <span className="flex h-[92px] w-[92px] items-center justify-center p-4 text-navy-700">
                    <LucideLineIcon name={service.icon} className="h-full w-full" />
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
                <div className="border border-[#E6E8ED] bg-white px-7 py-7 text-center shadow-[0_16px_45px_rgba(4,27,69,0.08)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-[2rem] font-semibold tracking-[0.16em] text-navy-900">{item.number}</span>
                    <span className="h-12 w-12 text-navy-700">
                      <LucideLineIcon name={item.icon} className="h-full w-full" />
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

      <section className="bg-navy-950 py-7 text-white sm:py-10" id="cases">
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

      <section className="relative overflow-hidden bg-white py-8 text-center sm:py-10">
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
