import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { DesignProvider, DesignScript } from '@/components/design/design-provider'
import { DesignSwitcher } from '@/components/design/design-switcher'
import { SiteShell } from '@/components/site/site-shell'
import { PageLoader } from '@/components/site/page-loader'
import './globals.css'

const googleSansFlex = localFont({
  src: [
    {
      path: '../public/fonts/google-sans-flex-latin.woff2',
      style: 'normal',
      weight: '100 1000',
    },
  ],
  variable: '--font-google-sans',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo-icon-only.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
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
      className={`bg-background ${googleSansFlex.variable}`}
      suppressHydrationWarning
    >
      <head>
        <DesignScript />
      </head>
      <body className="antialiased">
        <PageLoader />
        <DesignProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <SiteShell>
            {/* Global SVG Gradients for Icons & Cards */}
            <svg
              className="absolute w-0 h-0 overflow-hidden pointer-events-none"
              aria-hidden="true"
              focusable="false"
              style={{ position: 'absolute', width: 0, height: 0 }}
            >
              <defs>
                {/* Signature Brand Gradient for Icons: #1D4ED8 -> #E11D48 */}
                <linearGradient id="brandIconGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>

                {/* Hero / Dark Stat Icon Gradient: #1D4ED8 -> #E11D48 */}
                <linearGradient id="brandStatGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>

                {/* Culture & Card Gradient: #1D4ED8 -> #E11D48 */}
                <linearGradient id="cultureCardGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>

                {/* Horizontal Brand Gradient */}
                <linearGradient id="brandGradHorizontal" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
            </svg>
            {children}
          </SiteShell>
        </DesignProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
