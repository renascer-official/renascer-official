import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "RENASCERへのお問い合わせページです。営業支援・AI/DX支援・入札支援・事業開発支援についてご相談ください。",
};

export default function ContactPage() {
  const fieldClass = "h-[52px] border border-navy-900/15 bg-white px-4 text-base font-normal outline-none transition placeholder:text-ink/35 focus:border-navy-700 focus:ring-4 focus:ring-navy-100";
  const labelClass = "grid gap-2 text-sm font-semibold text-navy-900";

  return (
    <main>
      <section className="bg-navy-950 text-white">
        <div className="section-shell py-20 sm:py-28">
          <p className="text-sm font-semibold tracking-[0.28em] text-white/55">CONTACT</p>
          <h1 className="mt-5 font-serif text-4xl tracking-[0.12em] sm:text-6xl">お問い合わせ</h1>
          <p className="mt-8 max-w-2xl text-base leading-9 text-white/78">営業支援・AI活用・入札支援・事業開発について、まずはお気軽にご相談ください。</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-serif text-3xl tracking-[0.12em] text-navy-900">再成長の一歩を、ここから。</h2>
            <p className="mt-6 text-sm leading-8 text-ink/70">フォームはプロトタイプ用のダミーです。公開時には送信先やスパム対策を実装できます。</p>
            <a href={`mailto:${site.email}`} className="mt-8 inline-block text-navy-900 underline underline-offset-4">{site.email}</a>
          </div>
          <form className="grid gap-5 border border-navy-900/10 bg-white p-5 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                会社名
                <input className={fieldClass} placeholder="株式会社サンプル" />
              </label>
              <label className={labelClass}>
                お名前
                <input className={fieldClass} placeholder="山田 太郎" />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                メールアドレス
                <input type="email" className={fieldClass} placeholder="name@example.com" />
              </label>
              <label className={labelClass}>
                ご相談領域
                <select className={`${fieldClass} appearance-none`}>
                  <option>営業支援</option>
                  <option>AI・DX活用支援</option>
                  <option>入札支援</option>
                  <option>事業開発支援</option>
                  <option>アライアンス支援</option>
                  <option>まだ決まっていない</option>
                </select>
              </label>
            </div>
            <label className={labelClass}>
              ご相談内容
              <textarea className="min-h-40 border border-navy-900/15 bg-white p-4 text-base font-normal leading-8 outline-none transition placeholder:text-ink/35 focus:border-navy-700 focus:ring-4 focus:ring-navy-100" placeholder="現在の課題や検討している支援内容をご記入ください。" />
            </label>
            <button type="button" className="mt-2 h-[52px] bg-navy-900 px-6 text-sm font-semibold text-white transition hover:bg-navy-700 focus:outline-none focus:ring-4 focus:ring-navy-100">
              送信する（ダミー）
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
