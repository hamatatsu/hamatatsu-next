import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.scss";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hamatatsu's page",
  description: "The home page of hamatatsu's page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
