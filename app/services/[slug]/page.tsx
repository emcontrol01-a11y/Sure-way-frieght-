import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { SERVICES, SITE, whatsappLink } from '@/lib/site'

// Pre-build one page per service
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

// Next.js 15+/16: params is a Promise
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = SERVICES.find((x) => x.slug === slug)
  return s ? { title: s.title, description: s.summary } : {}
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = SERVICES.find((x) => x.slug === slug)
  if (!service) notFound()

  const others = SERVICES.filter((x) => x.slug !== service.slug)

  return (
    <main>
      <PageHero
        eyebrow={service.tag}
        title={service.title}
        lead={service.summary}
        image={service.heroImage}
        crumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
      />

      <section className="detail section-pad">
        <div className="detail-main" data-reveal="up">
          <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> OVERVIEW</div>
          <h2>{service.title} <em>made simple.</em></h2>
          <p className="detail-intro">{service.intro}</p>

          <h3>What’s included</h3>
          <ul className="check-list dark">
            {service.includes.map((t) => <li key={t}><CheckCircle2 size={18} /> {t}</li>)}
          </ul>

          <h3>Who it’s for</h3>
          <div className="chip-row">{service.bestFor.map((t) => <span className="chip static" key={t}>{t}</span>)}</div>

          <h3>How it works</h3>
          <ol className="step-list">
            {service.steps.map((t, i) => <li key={t}><span>{String(i + 1).padStart(2, '0')}</span>{t}</li>)}
          </ol>
        </div>

        <aside className="detail-side" data-reveal="right">
          <div className="side-card">
            <span className="service-tag">GET A QUOTE</span>
            <h4>Ready to ship with {SITE.short}?</h4>
            <Link className="button button-orange" href={`/quote?service=${service.slug}`}>Request a quote <ArrowUpRight size={16} /></Link>
            <a className="side-link" href={`tel:${SITE.phones[0].tel}`}><Phone size={15} /> {SITE.phones[0].display}</a>
            <a className="side-link" href={whatsappLink(`Hello, I would like to ask about ${service.title}.`)} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp us</a>
          </div>
        </aside>
      </section>

      <section className="services section-pad">
        <div className="section-heading" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> MORE SERVICES</div><h2>Explore <em>what else we do.</em></h2></div>
        </div>
        <div className="chip-row" data-reveal="up">
          {others.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="chip">{s.title} <ArrowRight size={14} /></Link>)}
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
