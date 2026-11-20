/**
 * components/cta-band.tsx
 * Gold "ready when you are" call-to-action used at the bottom of pages.
 */
import Link from 'next/link'
import { ArrowUpRight, MessageCircle, Zap } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function CtaBand({ title = 'Let’s get your cargo there.' }: { title?: string }) {
  return (
    <section className="quote-band">
      <div className="quote-inner" data-reveal="up">
        <span className="quote-kicker"><Zap size={14} /> READY WHEN YOU ARE</span>
        <h2>{title}</h2>
        <p>Tell us what you’re moving. We’ll help you figure out what comes next.</p>
        <div className="cta-row">
          <Link className="button button-light" href="/quote">Request a quote <ArrowUpRight size={17} /></Link>
          <a className="button button-outline" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a>
        </div>
        <span className="quote-graphic" aria-hidden="true">S/W</span>
      </div>
    </section>
  )
}
