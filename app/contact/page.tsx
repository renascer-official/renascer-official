import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "RENASCERへのお問い合わせページです。営業支援・AI/DX支援・入札支援・事業開発支援についてご相談ください。",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-navy-950 text-white">
        <div className="section-shell py-20 sm:py-28">
          <p className="text-sm font-semibold tracking-[0.28em] text-white/50">CONTACT</p>
          <h1 className="mt-5 font-serif text-4xl tracking-[0.12em] sm:text-6xl">お問い合わせ</h1>
          <p className="mt-8 max-w-2xl text-base leading-9 text-white/75">営業支援・AI活用・入札支援・事業開発について、まずはお気軽にご相談ください。</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-serif text-3xl tracking-[0.12em] text-navy-900">再成長の一歩を、ここから。</h2>
            <p className="mt-6 text-sm leading-8 text-ink/70">お問い合わせ内容を確認後、通常2営業日以内を目安にご返信いたします。</p>
            <a href={`mailto:${site.email}`} className="mt-8 inline-block text-navy-900 underline underline-offset-4">{site.email}</a>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
