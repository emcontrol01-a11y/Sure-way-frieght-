import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ScrollEffects } from './scroll-effects'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { SITE } from '@/lib/site'
import { SEO, siteJsonLd } from '@/lib/seo'
import './globals.css'
import './pages.css'
import './home-extras.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SEO.title, template: '%s | Sure-Way Freight Ghana' },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: SITE.short,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'logistics',
  // Every page gets its own canonical URL automatically
  alternates: { canonical: './' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website', siteName: SITE.name, url: SITE.url, locale: 'en_GH',
    title: SEO.title, description: SEO.description,
    images: [{ url: SEO.ogImage, width: 1584, height: 672, alt: 'Sure-Way Freight Ghana: freight at the Port of Tema' }],
  },
  twitter: { card: 'summary_large_image', title: SEO.title, description: SEO.description, images: [SEO.ogImage] },
  formatDetection: { telephone: true, email: true, address: true },
  // Favicon = the Sure-Way ship logo. Google needs a square icon in multiples of 48px,
  // plus /favicon.ico at the site root. Files live in /public (sureway-*.png + favicon.ico).
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/sureway-favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/sureway-favicon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/sureway-icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/sureway-apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#681a31',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Turns on scroll animations before first paint (skipped for 'reduce motion') so content never flashes */}
        <script dangerouslySetInnerHTML={{ __html: "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-ready')" }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ScrollEffects />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
