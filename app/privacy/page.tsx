import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SITE } from '@/lib/site'

export const metadata: Metadata = { title: 'Privacy policy' }

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="LEGAL" title="Privacy policy" lead="How we handle the information you share with us." crumbs={[{ label: 'Privacy' }]} />
      <section className="section-pad legal">
        <p><em>Last updated: November 2026. This is a plain-language summary; have it reviewed by your lawyer before relying on it, particularly regarding Ghana’s Data Protection Act, 2012 (Act 843).</em></p>
        <h2>What we collect</h2>
        <p>When you request a quote, track cargo or contact us, we receive the details you choose to share — such as your name, phone number, email, company and cargo information.</p>
        <h2>How we use it</h2>
        <p>We use your information only to respond to your enquiry, prepare quotes, arrange and clear shipments and keep you updated. We do not sell your personal information.</p>
        <h2>Sharing</h2>
        <p>To move your cargo we may share necessary shipment details with carriers, port and airport authorities, customs and trusted partners involved in your shipment.</p>
        <h2>Third-party services</h2>
        <p>Our forms open WhatsApp or your email app. Messages sent there are subject to the privacy terms of those services. This website may also use analytics to understand how it is used.</p>
        <h2>Your rights</h2>
        <p>You may ask us to access, correct or delete the personal information we hold about you.</p>
        <h2>Contact</h2>
        <p>Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phones[0].display}.</p>
      </section>
    </main>
  )
}
