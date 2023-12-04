import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const noto_sans_jp = Noto_Sans_JP({
  display: 'swap',
  weight: ['300', '400', '700'],
  preload: false,
})

export const metadata: Metadata = {
  title: "hamatatsu's page",
  description: "The home page of hamatatsu's page.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>{children}</body>
    </html>
  )
}
