import { NextResponse } from "next/server";

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
    const apiKey = process.env.RESEND_API_KEY;

    if (!name || !emailPattern.test(email) || !category || !message) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is missing");
    }

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

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "RENASCER <no-reply@renascer.jp>",
        to: ["info@renascer.jp"],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error: ${response.status} ${errorText}`);
    }

    return NextResponse.json({
      ok: true,
      subject,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
