import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink, SectionHeading } from "@/components/Section";
import { servicePages, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) return {};

  return {
    title: page.title,
    description: `${page.lead} ${site.name}が戦略から実行まで伴走します。`,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <main>
      <section className="bg-navy-950 text-white">
        <div className="section-shell py-20 sm:py-28">
          <p className="text-sm font-semibold tracking-[0.28em] text-white/50">SERVICE</p>
          <h1 className="mt-5 font-serif text-4xl tracking-[0.12em] sm:text-6xl">{page.title}</h1>
          <p className="mt-8 max-w-2xl text-base leading-9 text-white/75">{page.lead}</p>
          <div className="mt-9">
            <ButtonLink href="/contact" variant="light">この領域で相談する</ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <SectionHeading title="よくある課題" body={page.issueTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.issues.map((issue) => (
              <div key={issue} className="border border-navy-900/10 bg-white p-6 text-sm leading-8 text-ink/70 shadow-sm">
                {issue}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-24">
        <div className="section-shell">
          <SectionHeading title="支援内容" body="戦略だけで終わらせず、社内で動き続ける仕組みとして定着するところまで支援します。" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.supports.map((support) => (
              <div key={support} className="flex items-center gap-4 border border-navy-900/10 bg-white p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-navy-900 text-white">↗</span>
                <span className="font-semibold text-navy-900">{support}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <SectionHeading title="支援の流れ" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {page.flow.map((step, index) => (
              <div key={step} className="border border-navy-900/10 p-7">
                <p className="font-serif text-3xl text-navy-500">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-7 font-serif text-2xl tracking-[0.08em] text-navy-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-center text-white">
        <div className="section-shell">
          <h2 className="font-serif text-3xl tracking-[0.12em]">まずは現状をお聞かせください。</h2>
          <p className="mt-5 text-sm leading-8 text-white/70">課題や状況を丁寧に伺い、再成長に向けた最適な進め方をご提案します。</p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="light">お問い合わせへ</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
