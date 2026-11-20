/**
 * components/whatsapp-float.tsx
 * Floating WhatsApp button — most Ghanaian customers prefer WhatsApp to email.
 */
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat with Sure-Way Freight on WhatsApp">
      <MessageCircle size={24} />
      <span>WhatsApp us</span>
    </a>
  )
}
