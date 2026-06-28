import { NextResponse } from "next/server";
import { sendSmtpMail } from "@/lib/smtp";

export const runtime = "nodejs";

type ContactPayload = {
  company?: string;
  name?: string;
  email?: string;
  category?: string;
  message?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (clean(payload.website)) {
      return NextResponse.json({ ok: true });
    }

    const company = clean(payload.company);
    const name = clean(payload.name);
    const email = clean(payload.email);
    const category = clean(payload.category);
    const message = clean(payload.message);

    if (!name || !emailPattern.test(email) || !category || !message) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL || "info@renascer.jp";
    const subject = `【RENASCER】お問い合わせ：${category}`;
    const text = [
      "RENASCER公式サイトからお問い合わせがありました。",
      "",
      `会社名：${company || "未入力"}`,
      `お名前：${name}`,
      `メールアドレス：${email}`,
      `ご相談領域：${category}`,
      "",
      "ご相談内容：",
      message,
    ].join("\n");

    await sendSmtpMail({
      to,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
