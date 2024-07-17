import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "のんちゃんのウェブサイト",
  keywords: [
    "大城希乃樺",
    "おおしろののか",
    "ののか",
    "美女",
    "のしろ",
    "女性エンジニア",
    "Web開発",
    "AI",
    "沖縄美女",
    "大城",
    "アプリ開発",
  ],
  openGraph: {
    type: "website",
    url: "https://oshiro17.github.io/",
    title: "のんちゃんだよ",
    description:
      "趣味は編み物",
    siteName: "のんちゃんだよ",
    images: [
      {
        url: "https://oshiro17/github.io",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-JPTTP1T66J"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JPTTP1T66J');
              `,
            }}
          />
        </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
