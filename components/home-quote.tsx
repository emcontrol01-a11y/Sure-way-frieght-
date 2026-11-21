'use client'
/**
 * components/home-quote.tsx
 * Short "Quick quote" form for the HOME page (few fields, so visitors don't give up).
 * Same idea as the full quote form: builds a message and opens WhatsApp / email.
 * LATER: swap for fetch('/api/quotes') on your Express + MongoDB backend.
 */
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { SERVICES, SITE, whatsappLink } from '@/lib/site'

const empty = { name: '', phone: '', service: SERVICES[0].title, origin: '', destination: '', cargo: '' }

export function HomeQuote() {
  const [f, setF] = useState(empty)
  const [error, setError] = useState('')
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF((p) => ({ ...p, [k]: e.target.value }))

  const message = () =>
    ['QUICK QUOTE REQUEST (website home page)', `Name: ${f.name}`, `Phone: ${f.phone}`, `Service: ${f.service}`, `From: ${f.origin}`, `To: ${f.destination}`, f.cargo && `Cargo: ${f.cargo}`]
      .filter(Boolean).join('\n')

  const ok = () => {
    if (!f.name.trim() || !f.phone.trim() || !f.origin.trim() || !f.destination.trim()) {
      setError('Please add your name, phone, and where the cargo is going from and to.')
      return false
    }
    setError('')
    return true
  }
  const sendWhatsApp = () => ok() && window.open(whatsappLink(message()), '_blank', 'noopener')
  const sendEmail = () => ok() && (window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Quick quote request: ' + f.name)}&body=${encodeURIComponent(message())}`)

  return (
    <form className="form home-quote-form" onSubmit={(e) => { e.preventDefault(); sendWhatsApp() }} noValidate>
      <div className="form-grid">
        <label>Full name *<input value={f.name} onChange={set('name')} autoComplete="name" placeholder="e.g. Kwame Mensah" /></label>
        <label>Phone / WhatsApp *<input value={f.phone} onChange={set('phone')} type="tel" autoComplete="tel" placeholder="e.g. 054 000 0000" /></label>
        <label className="span-2">Service
          <select value={f.service} onChange={set('service')}>{SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}</select>
        </label>
        <label>From *<input value={f.origin} onChange={set('origin')} placeholder="e.g. Guangzhou, China" /></label>
        <label>To *<input value={f.destination} onChange={set('destination')} placeholder="e.g. Accra, Ghana" /></label>
        <label className="span-2">What are you shipping?<input value={f.cargo} onChange={set('cargo')} placeholder="e.g. 200 cartons of floor tiles" /></label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-actions">
        <button type="submit" className="button button-orange"><MessageCircle size={17} /> Get quote on WhatsApp</button>
        <button type="button" className="button button-dark" onClick={sendEmail}><Mail size={17} /> By email <ArrowUpRight size={15} /></button>
      </div>
      <p className="form-note">Need to add weight, dates or notes? <Link href="/quote">Use the full quote form <ArrowRight size={12} style={{ verticalAlign: '-2px' }} /></Link></p>
    </form>
  )
}
