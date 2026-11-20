import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ScrollEffects } from './scroll-effects'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { SITE } from '@/lib/site'
import './globals.css'
import './pages.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Sure-Way Freight Ghana Ltd. | Global Logistics & Freight',
    template: '%s | Sure-Way Freight Ghana',
  },
  description:
    'Reliable sea freight, air freight, clearing and forwarding, road transport and warehousing from Tema–Accra, Ghana to the world.',
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'Sure-Way Freight Ghana Ltd. | Global Logistics & Freight',
    description: 'Sea freight, air freight, clearing & forwarding and end-to-end logistics from Tema–Accra, Ghana.',
    locale: 'en_GH',
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
  themeColor: '#681a31',
}

// Helps Google show the business correctly in search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FreightForwarder',
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phones.map((p) => p.tel),
  address: { '@type': 'PostalAddress', addressLocality: 'Tema', addressRegion: 'Greater Accra', addressCountry: 'GH' },
  areaServed: 'Worldwide',
  sameAs: Object.values(SITE.socials),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Turns on scroll animations before first paint (skipped for 'reduce motion') so content never flashes */}
        <script dangerouslySetInnerHTML={{ __html: "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ready')" }} />
      </head>
      <body className="antialiased">
        <ScrollEffects />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
