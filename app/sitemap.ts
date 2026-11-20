import type { MetadataRoute } from 'next'
import { SERVICES, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/services', '/quote', '/track', '/faq', '/contact', '/privacy', '/terms']
  return [
    ...pages.map((p) => ({ url: SITE.url + p, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
    ...SERVICES.map((s) => ({ url: `${SITE.url}/services/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
