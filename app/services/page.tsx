import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2, FileText } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { ServiceIcon } from '@/components/icons'
import { DOCUMENTS, PHOTOS, SERVICES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our services',
  description: 'Sea freight, air freight, clearing and forwarding, road transport, warehousing and 3PL/4PL/5PL logistics from Accra and Kasoa, Ghana.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="WHAT WE DO"
        title={<>One partner.<br /><em>Every mile.</em></>}
        lead="Sea, air and land freight, customs clearing, warehousing and wider logistics support — managed together."
        image={PHOTOS.bannerServices}
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section-pad service-rows">
        {SERVICES.map((s, i) => (
          <article className={'service-row' + (i % 2 ? ' flip' : '')} key={s.slug} data-reveal="up">
            <Link href={`/services/${s.slug}`} className="service-row-img">
              <Image src={s.rowImage.src} alt={s.rowImage.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              <span className="service-number">{s.number}</span>
              <span className="service-icon"><ServiceIcon name={s.icon} /></span>
            </Link>
            <div className="service-row-body">
              <span className="service-tag">{s.tag}</span>
              <h2>{s.title}</h2>
              <p>{s.summary}</p>
              <ul className="check-list dark">
                {s.includes.slice(0, 3).map((t) => <li key={t}><CheckCircle2 size={16} /> {t}</li>)}
              </ul>
              <Link className="about-link dark-link" href={`/services/${s.slug}`}>Learn more <ArrowUpRight size={16} /></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="docs section-pad">
        <div className="docs-box" data-reveal="up">
          <div>
            <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> BEFORE YOU SHIP</div>
            <h2>Documents that <em>keep cargo moving.</em></h2>
            <p>Having the right paperwork ready is the fastest way to avoid delays at the port. Most shipments need the following — we’ll confirm exactly what applies to yours.</p>
            <Link className="about-link dark-link" href="/quote">Ask us what you need <ArrowRight size={16} /></Link>
          </div>
          <ul>
            {DOCUMENTS.map((d) => <li key={d}><FileText size={16} /> {d}</li>)}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
