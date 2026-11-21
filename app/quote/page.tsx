import type { Metadata } from 'next'
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { QuoteForm } from '@/components/quote-form'
import { DOCUMENTS, PHOTOS, SERVICES, SITE, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Request a quote',
  description: 'Tell us what you are shipping and get a clear freight quote from Sure-Way Freight Ghana.',
}

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams
  const preselected = SERVICES.find((s) => s.slug === service)?.title

  return (
    <main>
      <PageHero
        eyebrow="REQUEST A QUOTE"
        title={<>Tell us what’s moving.<br /><em>We’ll do the rest.</em></>}
        lead="Share a few details and we’ll come back with a clear quote and a plan for your cargo."
        image={PHOTOS.bannerQuote}
        crumbs={[{ label: 'Get a quote' }]}
      />
      <section className="section-pad form-layout">
        <div className="form-card" data-reveal="up">
          <QuoteForm defaultService={preselected} />
        </div>
        <aside className="form-aside" data-reveal="right">
          <div className="side-card">
            <span className="service-tag">PREFER TO TALK?</span>
            <h4>We’re a call or message away.</h4>
            <a className="side-link" href={`tel:${SITE.phones[0].tel}`}><Phone size={15} /> {SITE.phones[0].display}</a>
            <a className="side-link" href={`tel:${SITE.phones[1].tel}`}><Phone size={15} /> {SITE.phones[1].display}</a>
            <a className="side-link" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp us</a>
          </div>
          <div className="side-card">
            <span className="service-tag">HELPFUL TO HAVE</span>
            <h4>Documents we’ll ask for</h4>
            <ul className="check-list dark small">
              {DOCUMENTS.slice(0, 5).map((d) => <li key={d}><CheckCircle2 size={15} /> {d}</li>)}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  )
}
