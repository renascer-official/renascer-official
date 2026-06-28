"use client";

import { useState, type FormEvent } from "react";

const fieldClass = "h-[52px] border border-navy-900/15 bg-white px-4 text-base font-normal outline-none transition placeholder:text-ink/35 focus:border-navy-700 focus:ring-4 focus:ring-navy-100";
const labelClass = "grid gap-2 text-sm font-semibold text-navy-900";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました。");
      }

      form.reset();
      setState("success");
    } catch {
      setState("error");
      setErrorMessage("送信できませんでした。時間をおいて再度お試しください。");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 border border-navy-900/10 bg-white p-5 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          会社名
          <input name="company" className={fieldClass} placeholder="貴社名・屋号" autoComplete="organization" />
        </label>
        <label className={labelClass}>
          お名前
          <input name="name" className={fieldClass} placeholder="山田 太郎" autoComplete="name" required />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          メールアドレス
          <input name="email" type="email" className={fieldClass} placeholder="name@example.com" autoComplete="email" required />
        </label>
        <label className={labelClass}>
          ご相談領域
          <select name="category" defaultValue="" className={`${fieldClass} appearance-none`} required>
            <option value="" disabled>
              選択してください
            </option>
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
        <textarea name="message" className="min-h-40 border border-navy-900/15 bg-white p-4 text-base font-normal leading-8 outline-none transition placeholder:text-ink/35 focus:border-navy-700 focus:ring-4 focus:ring-navy-100" placeholder="現在の課題や検討している支援内容をご記入ください。" required />
      </label>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {state === "success" ? <p className="text-sm font-semibold text-navy-900">お問い合わせありがとうございました。</p> : null}
      {state === "error" ? <p className="text-sm font-semibold text-red-700">{errorMessage}</p> : null}
      <button type="submit" disabled={state === "sending"} className="mt-2 h-[52px] bg-navy-900 px-6 text-sm font-semibold text-white transition hover:bg-navy-700 focus:outline-none focus:ring-4 focus:ring-navy-100 disabled:cursor-not-allowed disabled:bg-navy-900/60">
        {state === "sending" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
