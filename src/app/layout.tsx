import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Setu.plus - Your All-in-One Platform',
  description: 'Discover our comprehensive suite of products: FoodPe, KiranaPe, ShopPe, RepairPe, SnapPe, RidePe, TicketPe, EventPe, DocPe, and LearnPe. Powered by AI for the best user experience.',
  keywords: 'Setu.plus, FoodPe, KiranaPe, ShopPe, RepairPe, SnapPe, RidePe, TicketPe, EventPe, DocPe, LearnPe, AI platform, all-in-one',
  authors: [{ name: 'Setu.plus Team' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon.svg', sizes: '180x180' }
    ]
  },
  manifest: '/site.webmanifest',
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
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon.svg?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}