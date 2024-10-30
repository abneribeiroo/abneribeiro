import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Abner Ribeiro',
    template: '%s | Abner Ribeiro',
  },
  description: 'Here you can find more about me and my work as a software engineer.',
  openGraph: {
    title: 'Abner Ribeiro',
    description: 'Here you can find more about me and my work as a software engineer.',
    url: baseUrl,
    siteName: 'abneribeiro',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased min-h-screen flex flex-col max-w-xl px-4 lg:mx-auto">
        <Navbar />
        <main className="flex-auto flex-grow min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
