/**
 * lib/schema.ts
 * ---------------------------------------------------------------
 * schema.org structured data (JSON-LD) builders.
 * All values come from lib/site.ts, so nothing is typed twice.
 * ---------------------------------------------------------------
 */
import { FAQS, SERVICES, SITE, type Service } from './site'

const ORG_ID = `${SITE.url}/#organization`
const SITE_ID = `${SITE.url}/#website`

/** Social links that are still placeholder searches (see TODO in lib/site.ts) must NOT go to Google. */
const isRealProfile = (url: string) => !/\/search|explore\/search|results\?search_query/.test(url)

export function organizationSchema() {
  const realSocials = Object.values(SITE.socials).filter(isRealProfile)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // NOTE: "FreightForwarder" is not a schema.org type, so Google ignored the old markup.
        // LocalBusiness is the correct, supported type for a business with physical offices.
        '@type': ['LocalBusiness', 'Organization'],
        '@id': ORG_ID,
        name: SITE.name,
        alternateName: [SITE.short, 'Sure-Way Freight Ghana'],
        url: SITE.url,
        logo: { '@type': 'ImageObject', url: `${SITE.url}/sureway-ship-logo.png`, width: 320, height: 230 },
        image: [`${SITE.url}/og-image.jpg`],
        description:
          'Freight forwarding company in Ghana offering sea freight, air freight, customs clearing, road transport, warehousing and end-to-end logistics from Accra and Kasoa.',
        slogan: SITE.tagline,
        email: SITE.email,
        telephone: SITE.phones[0].tel,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Accra International Airport',
          addressLocality: 'Accra',
          addressRegion: 'Greater Accra',
          addressCountry: 'GH',
        },
        contactPoint: SITE.phones.map((p) => ({
          '@type': 'ContactPoint',
          telephone: p.tel,
          contactType: 'customer service',
          areaServed: ['GH', 'Worldwide'],
          availableLanguage: ['English'],
        })),
        department: [
          {
            '@type': 'LocalBusiness',
            name: `${SITE.short} — Accra International Airport`,
            parentOrganization: { '@id': ORG_ID },
            telephone: SITE.phones[0].tel,
            address: { '@type': 'PostalAddress', streetAddress: 'Accra International Airport', addressLocality: 'Accra', addressRegion: 'Greater Accra', addressCountry: 'GH' },
            hasMap: SITE.offices[0].mapLink,
          },
          {
            '@type': 'LocalBusiness',
            name: `${SITE.short} — Kasoa Danchira`,
            parentOrganization: { '@id': ORG_ID },
            telephone: SITE.phones[1].tel,
            address: { '@type': 'PostalAddress', streetAddress: 'Danchira', addressLocality: 'Kasoa', addressRegion: 'Central Region', addressCountry: 'GH' },
            hasMap: SITE.offices[1].mapLink,
          },
        ],
        areaServed: [{ '@type': 'Country', name: 'Ghana' }, 'Worldwide'],
        knowsAbout: ['Sea freight', 'Air freight', 'Customs clearing', 'Freight forwarding', 'Road transport', 'Warehousing', 'Logistics'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Freight and logistics services',
          itemListElement: SERVICES.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, url: `${SITE.url}/services/${s.slug}` },
          })),
        },
        ...(realSocials.length ? { sameAs: realSocials } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': SITE_ID,
        url: SITE.url,
        name: SITE.name,
        inLanguage: 'en-GH',
        publisher: { '@id': ORG_ID },
      },
    ],
  }
}

/** Breadcrumb trail: Home > Services > Sea freight. The last item may omit its URL. */
export function breadcrumbSchema(crumbs: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.label,
        ...(c.href ? { item: SITE.url + c.href } : {}),
      })),
    ],
  }
}

export function serviceSchema(s: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    serviceType: s.title,
    description: s.intro,
    url: `${SITE.url}/services/${s.slug}`,
    image: s.heroImage.src,
    provider: { '@id': ORG_ID },
    areaServed: [{ '@type': 'Country', name: 'Ghana' }, 'Worldwide'],
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE.url}/quote?service=${s.slug}` },
  }
}

export function faqSchema(items = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
}
