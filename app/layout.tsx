import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer, Header } from "@/components/Layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "RENASCER｜営業支援・AI/DX支援・入札支援・事業開発支援",
    template: "%s｜RENASCER",
  },
  description: site.description,
  openGraph: {
    title: "RENASCER",
    description: site.description,
    type: "website",
    locale: "ja_JP",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://renascer.jp"),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
