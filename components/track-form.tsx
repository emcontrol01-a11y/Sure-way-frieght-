'use client'
/**
 * components/track-form.tsx
 * Cargo tracking request. Until a real tracking API exists, the customer
 * enters a reference and we open WhatsApp/email with it pre-filled.
 * LATER: connect to a MongoDB `shipments` collection and show live status here.
 */
import { useState } from 'react'
import { MessageCircle, Search } from 'lucide-react'
import { SITE, whatsappLink } from '@/lib/site'

export function TrackForm() {
  const [ref, setRef] = useState('')
  const [type, setType] = useState('Container number')
  const [error, setError] = useState('')

  const message = `CARGO UPDATE REQUEST\n${type}: ${ref.trim()}\nPlease share the latest status of my shipment. Thank you.`

  const go = (e: React.FormEvent) => {
    e.preventDefault()
    if (ref.trim().length < 3) return setError('Please enter your booking, bill of lading or container number.')
    setError('')
    window.open(whatsappLink(message), '_blank', 'noopener')
  }

  return (
    <form className="track-form" onSubmit={go} noValidate>
      <div className="track-row">
        <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Reference type">
          <option>Container number</option><option>Bill of lading</option><option>Booking number</option><option>Airway bill</option>
        </select>
        <input value={ref} onChange={(e) => setRef(e.target.value)} placeholder="Enter your reference number" aria-label="Reference number" />
        <button className="button button-orange" type="submit"><Search size={17} /> Request update</button>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <p className="form-note">
        We reply on WhatsApp. Prefer email?{' '}
        <a href={`mailto:${SITE.email}?subject=${encodeURIComponent('Cargo update request')}&body=${encodeURIComponent(message)}`}>Email your reference</a>{' '}
        or call <a href={`tel:${SITE.phones[0].tel}`}>{SITE.phones[0].display}</a>.
      </p>
      <a className="track-wa" href={whatsappLink('Hello, I need an update on my shipment.')} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Chat with the team instead</a>
    </form>
  )
}
