import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Globe2, Mail, MessageCircle, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/icons'
import { PHOTOS, SITE, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Call, WhatsApp or email Sure-Way Freight Ghana, or visit our offices at Accra International Airport and Kasoa Danchira.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT"
        title={<>Your next shipment<br />starts <em>right here.</em></>}
        lead="Call, message or write to us. A real person will get back to you."
        image={PHOTOS.bannerContact}
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section-pad contact-page">
        <div className="contact-cards" data-stagger>
          {SITE.phones.map((p, i) => (
            <a className="contact-card" href={`tel:${p.tel}`} key={p.tel} data-reveal="up">
              <span className="contact-icon-box"><Phone size={20} /></span><small>{i === 0 ? 'CALL OUR TEAM' : 'SECOND LINE'}</small><strong>{p.display}</strong><ArrowUpRight size={16} />
            </a>
          ))}
          <a className="contact-card" href={whatsappLink()} target="_blank" rel="noreferrer" data-reveal="up">
            <span className="contact-icon-box"><MessageCircle size={20} /></span><small>WHATSAPP</small><strong>Chat with us</strong><ArrowUpRight size={16} />
          </a>
          <a className="contact-card" href={`mailto:${SITE.email}`} data-reveal="up">
            <span className="contact-icon-box"><Mail size={20} /></span><small>EMAIL</small><strong className="small">{SITE.email}</strong><ArrowUpRight size={16} />
          </a>
          <a className="contact-card" href={SITE.url} target="_blank" rel="noreferrer" data-reveal="up">
            <span className="contact-icon-box"><Globe2 size={20} /></span><small>WEBSITE</small><strong>surewayfreightghana.com</strong><ArrowUpRight size={16} />
          </a>
        </div>

        <div className="office-grid">
          {SITE.offices.map((o) => (
            <article className="office" key={o.name} data-reveal="up">
              <div className="map-frame">
                <iframe title={`Map of ${o.name}`} src={o.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="office-body">
                <span className="service-tag">OUR OFFICE</span>
                <h3>{o.name}</h3>
                <p>{o.area}</p>
                <p className="office-note">{o.note}</p>
                <a className="about-link dark-link" href={o.mapLink} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="social-card side-card" data-reveal="up">
          <div>
            <span className="service-tag">FOLLOW US</span>
            <h4>Sure-Way Freight Ghana</h4>
          </div>
          <div className="socials dark">
            <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
          </div>
          <Link className="button button-orange" href="/quote">Request a quote <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  )
}
