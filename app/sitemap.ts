import type { MetadataRoute } from 'next'
import { SERVICES, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: { path: string; priority: number }[] = [
    { path: '', priority: 1 }, { path: '/quote', priority: 0.9 }, { path: '/services', priority: 0.9 },
    { path: '/about', priority: 0.7 }, { path: '/contact', priority: 0.8 }, { path: '/track', priority: 0.6 },
    { path: '/faq', priority: 0.6 }, { path: '/privacy', priority: 0.3 }, { path: '/terms', priority: 0.3 },
  ]
  return [
    ...pages.map((p) => ({ url: SITE.url + p.path, lastModified: now, changeFrequency: 'monthly' as const, priority: p.priority })),
    ...SERVICES.map((s) => ({ url: `${SITE.url}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ]
}
