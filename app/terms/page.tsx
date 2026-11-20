import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SITE } from '@/lib/site'

export const metadata: Metadata = { title: 'Terms of service' }

export default function TermsPage() {
  return (
    <main>
      <PageHero eyebrow="LEGAL" title="Terms of service" lead="The basics of working with Sure-Way Freight Ghana Ltd." crumbs={[{ label: 'Terms' }]} />
      <section className="section-pad legal">
        <p><em>Last updated: November 2026. This is a general summary, not legal advice. Have it reviewed by your lawyer and align it with your standard trading conditions before publishing as final.</em></p>
        <h2>Quotes</h2>
        <p>Quotes are estimates based on the information you provide and are valid for the period stated on the quote. Rates can change with carrier charges, exchange rates, duties and the accuracy of cargo details.</p>
        <h2>Your responsibilities</h2>
        <p>You are responsible for giving accurate descriptions, weights, values and documents, and for confirming that your goods are legal to import or export. Incorrect information may cause delays, extra charges or penalties.</p>
        <h2>Customs duties and charges</h2>
        <p>Duties, taxes, port charges and similar third-party costs are payable by the customer unless agreed otherwise in writing.</p>
        <h2>Insurance</h2>
        <p>Cargo insurance is recommended. We can help you arrange it on request. Unless insured, liability is limited as set out in our service agreement and applicable law.</p>
        <h2>Delays</h2>
        <p>Transit times are estimates. Weather, congestion, inspections and carrier schedules can affect timing, and we will keep you informed of any changes.</p>
        <h2>Contact</h2>
        <p>Questions about these terms? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </section>
    </main>
  )
}
