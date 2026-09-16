import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { DesignProvider, DesignScript } from '@/components/design/design-provider'
import { DesignSwitcher } from '@/components/design/design-switcher'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Peers Global — Community of Collaboration',
    template: '%s · Peers Global',
  },
  description:
    'Peers Global is a leadership organisation for Indian business owners, built on governed peer Circles. 19 Circles, 11 cities, 2,400+ members. Peers are Partners in Business & Friends in Life.',
  generator: 'v0.app',
  metadataBase: new URL('https://peersglobal.com'),
  openGraph: {
    title: 'Peers Global — Community of Collaboration',
    description:
      'Governed peer Circles for Indian promoters. Category exclusivity, the LSR model, and a real leadership pipeline.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Peers Global',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1E4ED8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-design="d1"
      className={`bg-background ${poppins.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <DesignScript />
      </head>
      <body className="antialiased">
        <DesignProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <div aria-hidden className="h-20 bg-panel" />
          <DesignSwitcher />
        </DesignProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
