import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins, Dancing_Script, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { DesignProvider, DesignScript } from '@/components/design/design-provider'
import { DesignSwitcher } from '@/components/design/design-switcher'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { GlobalFloatingTrigger } from '@/components/site/global-floating-trigger'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans-modern',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Peers Global',
    template: '%s | Peers Global',
  },
  description:
    'Peers Global is a leadership organisation for Indian business owners, built on governed peer Circles. 19 Circles, 11 cities, 2,400+ members. Peers are Partners in Business & Friends in Life.',
  generator: 'v0.app',
  metadataBase: new URL('https://peersglobal.com'),
  openGraph: {
    title: 'Peers Global',
    description:
      'Governed peer Circles for Indian promoters. Category exclusivity, the LSR model, and a real leadership pipeline.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Peers Global',
  },
  icons: {
    icon: '/images/logo-icon-only.png',
    apple: '/images/logo-icon-only.png',
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
      className={`bg-background ${plusJakarta.variable} ${poppins.variable} ${montserrat.variable} ${playfair.variable} ${dancingScript.variable}`}
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
          <GlobalFloatingTrigger />
        </DesignProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
