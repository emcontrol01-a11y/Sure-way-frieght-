/**
 * components/quote-aside.tsx
 * The "Prefer to talk?" + "Documents we'll ask for" cards that sit beside
 * the quote form. Used on the home page AND on /quote so they stay identical.
 */
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { DOCUMENTS, SITE, whatsappLink } from '@/lib/site'

export function QuoteAside() {
  return (
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
  )
}
