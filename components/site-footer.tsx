/**
 * components/site-footer.tsx
 * Full footer with links, contact details and social icons.
 * Every link here goes to a real page or a real contact method.
 */
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SERVICES, SITE } from '@/lib/site'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons'

export function SiteFooter() {
  return (
    <footer className="footer-full">
      <div className="footer-grid" data-stagger>
        <div className="footer-about" data-reveal="up">
          <Link className="brand footer-brand" href="/" aria-label="Sure-Way Freight Ghana home">
            <span className="brand-mark">
              <Image src="/sureway-ship-logo.png" alt="" width={40} height={32} />
            </span>
            <span className="brand-copy">
              <strong>SURE-WAY</strong>
              <small>FREIGHT GHANA LTD.</small>
            </span>
          </Link>
          <p>An independent logistics partner with offices at Accra International Airport and Kasoa Danchira, moving cargo by sea, air and land with care at every hand-off.</p>
          <div className="socials" aria-label="Social media">
            <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Sure-Way Freight Ghana on Facebook">
              <FacebookIcon />
            </a>
            <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Sure-Way Freight Ghana on Instagram">
              <InstagramIcon />
            </a>
            <a href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="Sure-Way Freight Ghana on YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div data-reveal="up">
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="up">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/#process">How it works</Link></li>
            <li><Link href="/track">Track cargo</Link></li>
            <li><Link href="/quote">Request a quote</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div data-reveal="up">
          <h4>Get in touch</h4>
          <ul className="footer-contact">
            {SITE.phones.map((p) => (
              <li key={p.tel}>
                <Phone size={14} /> <a href={`tel:${p.tel}`}>{p.display}</a>
              </li>
            ))}
            <li>
              <Mail size={14} /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            {SITE.offices.map((o) => (
              <li key={o.name}>
                <MapPin size={14} /> <a href={o.mapLink} target="_blank" rel="noreferrer">{o.name}</a>
              </li>
            ))}
            <li>
              <a href={SITE.url} target="_blank" rel="noreferrer">surewayfreightghana.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SURE-WAY FREIGHT GHANA LTD. ALL RIGHTS RESERVED.</span>
        <span className="footer-legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <span>LOCAL KNOW-HOW. GLOBAL MOVEMENT.</span>
        </span>
      </div>
    </footer>
  )
}
