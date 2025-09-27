import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Setu.plus - Your All-in-One Platform',
  description: 'Discover our comprehensive suite of products: FoodPe, KiranaPe, ShopPe, RepairPe, SnapPe, RidePe, TicketPe, EventPe, DocPe, and LearnPe. Powered by AI for the best user experience.',
  keywords: 'Setu.plus, FoodPe, KiranaPe, ShopPe, RepairPe, SnapPe, RidePe, TicketPe, EventPe, DocPe, LearnPe, AI platform, all-in-one',
  authors: [{ name: 'Setu.plus Team' }],
  openGraph: {
    title: 'Setu.plus - Your All-in-One Platform',
    description: 'Discover our comprehensive suite of products powered by AI',
    type: 'website',
    locale: 'en_US',
    url: 'https://setu.plus',
    siteName: 'Setu.plus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setu.plus - Your All-in-One Platform',
    description: 'Discover our comprehensive suite of products powered by AI',
    creator: '@setuplus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}