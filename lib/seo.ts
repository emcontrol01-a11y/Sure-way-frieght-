/**
 * lib/seo.ts
 * All SEO settings in one place: keywords, JSON-LD (structured data) builders.
 * Photos are NOT touched here. We only point at files that already exist in /public.
 */
import { FAQS, SERVICES, SITE } from '@/lib/site'

export const SEO = {
  title: 'Sure-Way Freight Ghana Ltd. | Freight Forwarder in Accra & Kasoa',
  description:
    'Sea freight, air freight, clearing & forwarding, road transport and warehousing from Accra and Kasoa, Ghana to the world. Get a free freight quote today.',
  keywords: [
    'freight forwarder in Ghana', 'sea freight Ghana', 'air freight Ghana', 'clearing and forwarding Ghana',
    'shipping from China to Ghana', 'customs clearing Tema', 'Kotoka airport cargo', 'cargo company Accra',
    'freight company Kasoa', 'logistics Ghana', 'warehousing Ghana', 'road transport Ghana',
  ],
  // Existing file in /public: reused for link previews (WhatsApp, Facebook, X). No new photo added.
  ogImage: '/sureway-port.png',
}

const ID = {
  org: `${SITE.url}/#organization`,
  site: `${SITE.url}/#website`,
}

/** Site-wide structured data: business + both offices + website */
export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'FreightForwarder'],
        '@id': ID.org,
        name: SITE.name,
        alternateName: SITE.short,
        url: SITE.url,
        logo: `${SITE.url}/sureway-ship-logo.png`,
        image: `${SITE.url}${SEO.ogImage}`,
        slogan: SITE.tagline,
        description: SEO.description,
        email: SITE.email,
        telephone: SITE.phones.map((p) => p.tel),
        areaServed: ['GH', 'Worldwide'],
        contactPoint: SITE.phones.map((p) => ({
          '@type': 'ContactPoint', telephone: p.tel, contactType: 'customer service', areaServed: 'GH', availableLanguage: ['English'],
        })),
        sameAs: Object.values(SITE.socials),
        department: SITE.offices.map((o, i) => ({
          '@type': 'LocalBusiness',
          '@id': `${SITE.url}/contact#office-${i + 1}`,
          name: `${SITE.short}, ${o.name}`,
          hasMap: o.mapLink,
          telephone: SITE.phones[0].tel,
          address: {
            '@type': 'PostalAddress',
            addressLocality: i === 0 ? 'Accra' : 'Kasoa',
            addressRegion: i === 0 ? 'Greater Accra' : 'Central Region',
            addressCountry: 'GH',
          },
        })),
        makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, url: `${SITE.url}/services/${s.slug}` } })),
      },
      { '@type': 'WebSite', '@id': ID.site, url: SITE.url, name: SITE.name, publisher: { '@id': ID.org }, inLanguage: 'en-GH' },
    ],
  }
}

/** One service page: Service + breadcrumbs */
export function serviceJsonLd(slug: string) {
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return null
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service', name: s.title, description: s.summary, serviceType: s.title,
        provider: { '@id': ID.org }, areaServed: ['GH', 'Worldwide'], url: `${SITE.url}/services/${s.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
          { '@type': 'ListItem', position: 3, name: s.title, item: `${SITE.url}/services/${s.slug}` },
        ],
      },
    ],
  }
}

/** Home page FAQ rich results (uses the same FAQS list as the FAQ page) */
export function homeFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.slice(0, 4).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
}
