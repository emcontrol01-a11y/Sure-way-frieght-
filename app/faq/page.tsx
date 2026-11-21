import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { FAQS, PHOTOS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about shipping, customs clearing, documents and tracking with Sure-Way Freight Ghana.',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="FREQUENTLY ASKED"
        title={<>Good questions.<br /><em>Straight answers.</em></>}
        lead="Everything you need to know before your cargo starts moving."
        image={PHOTOS.bannerFaq}
        crumbs={[{ label: 'FAQ' }]}
      />
      <section className="section-pad faq-page">
        <div className="faq-list" data-reveal="up">
          {FAQS.map((f) => (
            <details key={f.q}><summary>{f.q}<Plus size={18} /></summary><p>{f.a}</p></details>
          ))}
        </div>
        <p className="faq-more" data-reveal="up">Can’t find your answer? <Link href="/contact">Talk to our team</Link>.</p>
      </section>
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  )
}
