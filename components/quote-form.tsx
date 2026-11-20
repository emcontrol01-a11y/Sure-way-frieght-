'use client'
/**
 * components/quote-form.tsx
 * "Request a quote" form.
 * No backend needed yet: on submit it builds a clean message and opens
 * WhatsApp (primary) or the email app (secondary) with everything pre-filled.
 * LATER: replace `buildMessage` + links with a fetch() to your Express API
 * (POST /api/quotes) that saves to MongoDB and emails the team.
 */
import { useState } from 'react'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { SERVICES, SITE, whatsappLink } from '@/lib/site'

const empty = {
  name: '', company: '', phone: '', email: '',
  service: SERVICES[0].title, load: 'Not sure yet',
  origin: '', destination: '', cargo: '', weight: '', date: '', notes: '',
}

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [f, setF] = useState({ ...empty, service: defaultService ?? empty.service })
  const [error, setError] = useState('')

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }))

  const buildMessage = () =>
    [
      'QUOTE REQUEST — Sure-Way Freight Ghana',
      `Name: ${f.name}`,
      f.company && `Company: ${f.company}`,
      `Phone: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      `Service: ${f.service}`,
      `Load type: ${f.load}`,
      `From: ${f.origin}`,
      `To: ${f.destination}`,
      `Cargo: ${f.cargo}`,
      f.weight && `Weight / volume: ${f.weight}`,
      f.date && `Ready date: ${f.date}`,
      f.notes && `Notes: ${f.notes}`,
    ].filter(Boolean).join('\n')

  const valid = () => {
    if (!f.name.trim() || !f.phone.trim() || !f.origin.trim() || !f.destination.trim() || !f.cargo.trim()) {
      setError('Please fill in your name, phone, origin, destination and what you are shipping.')
      return false
    }
    setError('')
    return true
  }

  const sendWhatsApp = () => valid() && window.open(whatsappLink(buildMessage()), '_blank', 'noopener')
  const sendEmail = () =>
    valid() && (window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Freight quote request — ' + f.name)}&body=${encodeURIComponent(buildMessage())}`)

  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); sendWhatsApp() }} noValidate>
      <div className="form-grid">
        <label>Full name *<input value={f.name} onChange={set('name')} autoComplete="name" placeholder="e.g. Kwame Mensah" /></label>
        <label>Company<input value={f.company} onChange={set('company')} autoComplete="organization" placeholder="Optional" /></label>
        <label>Phone / WhatsApp *<input value={f.phone} onChange={set('phone')} type="tel" autoComplete="tel" placeholder="e.g. 054 000 0000" /></label>
        <label>Email<input value={f.email} onChange={set('email')} type="email" autoComplete="email" placeholder="Optional" /></label>
        <label>Service
          <select value={f.service} onChange={set('service')}>
            {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <label>Load type
          <select value={f.load} onChange={set('load')}>
            <option>Not sure yet</option><option>FCL – 20ft container</option><option>FCL – 40ft container</option><option>LCL – shared container</option><option>Air cargo</option><option>Truck load</option>
          </select>
        </label>
        <label>Origin (city / country) *<input value={f.origin} onChange={set('origin')} placeholder="e.g. Guangzhou, China" /></label>
        <label>Destination *<input value={f.destination} onChange={set('destination')} placeholder="e.g. Tema, Ghana" /></label>
        <label className="span-2">What are you shipping? *<input value={f.cargo} onChange={set('cargo')} placeholder="e.g. 200 cartons of floor tiles" /></label>
        <label>Approx. weight / volume<input value={f.weight} onChange={set('weight')} placeholder="e.g. 2,500 kg or 8 CBM" /></label>
        <label>Cargo ready date<input value={f.date} onChange={set('date')} type="date" /></label>
        <label className="span-2">Anything else we should know?<textarea value={f.notes} onChange={set('notes')} rows={4} placeholder="Special handling, deadlines, delivery address…" /></label>
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="form-actions">
        <button type="submit" className="button button-orange"><MessageCircle size={17} /> Send via WhatsApp</button>
        <button type="button" className="button button-dark" onClick={sendEmail}><Mail size={17} /> Send by email <ArrowUpRight size={15} /></button>
      </div>
      <p className="form-note">Your details open in WhatsApp or your email app, pre-filled and ready to send. We never share your information.</p>
    </form>
  )
}
