import Link from "next/link";
import { ArrowMotif } from "@/components/ArrowMotif";
import { ButtonLink, SectionHeading } from "@/components/Section";
import { challengeLinks, servicePages } from "@/lib/site";

const growthSteps = [
  ["逆境の整理", "現状と課題を多角的に分析し、再成長の起点を明確にします。"],
  ["勝ち筋の設計", "市場・競合・自社の強みを踏まえ、実現性の高い戦略を設計します。"],
  ["実行の伴走", "計画の実行段階まで深く関与し、成果創出まで伴走します。"],
];

const strengths = [
  ["経営者に近い距離", "経営者の想いに寄り添い、信頼関係を築きながら本質的な課題解決に取り組みます。"],
  ["現場実行まで支援", "戦略立案で終わらせず、現場に入り込み成果が出るまで徹底的に伴走します。"],
  ["長期的な成長を重視", "短期的な成果だけでなく、持続的な企業価値向上に向けた基盤づくりを支援します。"],
];

const serviceIcons = ["↗", "⌬", "⌕", "◇", "∞"];

function CircleIcon({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border text-3xl ${dark ? "border-white/40 text-white" : "border-navy-900/20 text-navy-900"}`}>
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 opacity-[0.16] [background:radial-gradient(circle_at_74%_18%,#355c86_0,transparent_34%),linear-gradient(115deg,transparent_0,transparent_54%,rgba(255,255,255,.08)_54.3%,transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30 [background:repeating-radial-gradient(ellipse_at_55%_100%,transparent_0,transparent_13px,rgba(255,255,255,.35)_14px,transparent_15px)]" />
        <div className="section-shell relative grid min-h-[680px] items-center gap-8 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <div className="relative z-10">
            <h1 className="font-serif text-4xl leading-[1.55] tracking-[0.18em] sm:text-5xl lg:text-6xl">
              何度でも<br />
              立ち上がる企業へ。
            </h1>
            <p className="mt-7 max-w-xl font-serif text-lg tracking-[0.14em] text-white/82">再成長の戦略と実行を、経営者の隣で支える。</p>
            <p className="mt-6 text-sm tracking-[0.12em] text-white/72">Rise Again. Grow Stronger.</p>
            <div className="mt-9">
              <ButtonLink href="/contact" variant="secondary">相談する</ButtonLink>
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[430px] lg:h-[560px]">
            <div className="absolute inset-[-8%] opacity-90">
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
          <div className="mx-auto mt-14 grid max-w-5xl gap-0 md:grid-cols-3">
            {growthSteps.map(([title, body], index) => (
              <div key={title} className={`px-8 py-4 text-center ${index > 0 ? "border-navy-900/10 md:border-l" : ""}`}>
                <CircleIcon>{index === 0 ? "⌕" : index === 1 ? "◎" : "♙"}</CircleIcon>
                <h3 className="mt-6 font-serif text-2xl tracking-[0.18em] text-navy-900">{title}</h3>
                <p className="mt-4 text-sm leading-8 text-ink/68">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-8 text-white">
        <div className="section-shell">
          <p className="flex items-center justify-center gap-8 text-center font-serif text-2xl tracking-[0.18em] sm:text-3xl">
            <span className="hidden h-px w-28 bg-white/45 sm:block" />
            一度沈んだ経験を、次の飛躍の力に。
            <span className="hidden h-px w-28 bg-white/45 sm:block" />
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24" id="services">
        <div className="section-shell">
          <SectionHeading title="支援領域" />
          <div className="mx-auto mt-12 max-w-5xl divide-y divide-navy-900/10">
            {servicePages.map((service, index) => (
              <Link key={service.slug} href={`/${service.slug}`} className="group grid gap-6 py-8 transition hover:bg-navy-50/60 sm:grid-cols-[150px_1fr_44px] sm:items-center sm:px-6">
                <div className="flex justify-center sm:justify-start">
                  <span className="flex h-20 w-20 items-center justify-center text-5xl text-navy-900">{serviceIcons[index]}</span>
                </div>
                <div className="border-navy-900/10 text-center sm:border-l sm:pl-10 sm:text-left">
                  <h3 className="font-serif text-2xl tracking-[0.18em] text-navy-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/68">{service.lead}</p>
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
          <div className="mx-auto mt-12 grid max-w-6xl gap-0 md:grid-cols-3">
            {strengths.map(([title, body], index) => (
              <div key={title} className={`px-8 text-center ${index > 0 ? "border-white/20 md:border-l" : ""}`}>
                <CircleIcon dark>{index === 0 ? "●" : index === 1 ? "☷" : "↗"}</CircleIcon>
                <h3 className="mt-6 font-serif text-2xl tracking-[0.18em]">{title}</h3>
                <p className="mt-5 text-sm leading-8 text-white/72">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24" id="challenges">
        <div className="section-shell">
          <SectionHeading title="あなたの課題から選ぶ" body="今の状況に近いテーマから、必要な支援内容をご確認ください。" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {challengeLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group border border-navy-900/10 bg-white p-5 text-center transition hover:border-navy-900 hover:bg-navy-50">
                <p className="text-xs font-semibold tracking-[0.16em] text-navy-500">{item.label}</p>
                <p className="mt-3 min-h-12 font-serif text-lg leading-relaxed tracking-[0.08em] text-navy-900">{item.title}</p>
                <span className="mt-4 inline-flex text-2xl text-navy-900 transition group-hover:translate-x-1">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 text-center">
        <div className="absolute bottom-[-170px] right-[-120px] h-[360px] w-[560px] opacity-45">
          <ArrowMotif />
        </div>
        <div className="section-shell relative z-10">
          <h2 className="font-serif text-3xl leading-relaxed tracking-[0.2em] text-navy-900 sm:text-4xl">まずは現状をお聞かせください。</h2>
          <p className="mt-5 text-sm leading-8 text-ink/68">貴社の課題やご状況を丁寧に伺い、再成長に向けた最適なアプローチをご提案します。</p>
          <div className="mt-9">
            <ButtonLink href="/contact">相談する</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
