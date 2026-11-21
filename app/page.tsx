import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Clock3, Globe2, MapPin, PackageCheck, Phone, Mail, Plus } from 'lucide-react'
import { ServiceIcon } from '@/components/icons'
import { CtaBand } from '@/components/cta-band'
import { FAQS, INDUSTRIES, LANES, PHOTOS, PROCESS, SERVICES, SITE } from '@/lib/site'

export default function Page() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="hero" id="home">
        <Image src="/sureway-port.png" alt="A freight truck moving through the Port of Tema container terminal at sunset" fill priority sizes="100vw" className="hero-image" data-parallax="0.2" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> FREIGHT, WITHOUT THE FRICTION</div>
          <h1>Moving what<br />moves <em>you.</em></h1>
          <p>From the Port of Tema to the rest of the world, we make every shipment feel a little more straightforward.</p>
          <div className="hero-actions">
            <Link className="button button-orange" href="/quote">Get a free quote <ArrowUpRight size={17} /></Link>
            <Link className="text-link" href="/services">Explore our services <ArrowDownRight size={17} /></Link>
          </div>
        </div>
        <div className="hero-bottom"><span><span className="status-dot" /> YOUR PARTNER IN EVERY PORT</span><span>01 / 04 <span className="hero-rule" /> ACCRA · KASOA</span></div>
        <div className="hero-side-note">SEA <span>·</span> AIR <span>·</span> LAND</div>
      </section>

      {/* ---------- SCROLLING TICKER ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <div className="marquee-set" key={n}>
              {[...SERVICES.map((s) => s.title.toUpperCase()), 'ACCRA · KASOA, GHANA'].map((t) => (
                <span key={t + n}>{t}<i>✦</i></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="trust-strip" aria-label="Our service promise">
        <div className="trust-intro" data-reveal="up">WE KEEP YOUR WORLD<br />IN MOTION<span>.</span></div>
        <div className="trust-item" data-reveal="up"><Globe2 /><span><strong>Global reach</strong><small>Connected to the world</small></span></div>
        <div className="trust-item" data-reveal="up"><Clock3 /><span><strong>Reliable by design</strong><small>Clear, consistent updates</small></span></div>
        <div className="trust-item" data-reveal="up"><PackageCheck /><span><strong>End-to-end care</strong><small>From origin to arrival</small></span></div>
        <Link className="strip-link" href="/about">Meet Sure-Way <ArrowRight /></Link>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="services section-pad" id="services">
        <div className="section-heading" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> WHAT WE DO</div><h2>One partner.<br /><em>Every mile.</em></h2></div>
          <p>Good logistics shouldn’t feel complicated. We bring the moving parts together, so your business can keep moving forward.</p>
        </div>
        <div className="service-grid" data-stagger>
          {SERVICES.map((s) => (
            <article className="service-card" key={s.slug} data-reveal="up">
              <Link href={`/services/${s.slug}`} className="service-image" aria-label={`Learn more about ${s.title}`}>
                <Image src={s.image} alt={s.title + ' operations'} fill sizes="(max-width: 760px) 100vw, 50vw" />
                <span className="service-number">{s.number}</span>
                <span className="service-icon"><ServiceIcon name={s.icon} /></span>
              </Link>
              <div className="service-body">
                <span className="service-tag">{s.tag}</span>
                <div className="service-title-row"><h3>{s.title}</h3><Link href={`/services/${s.slug}`} aria-label={'Read more about ' + s.title}><ArrowUpRight /></Link></div>
                <p>{s.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="services-foot" data-reveal="up"><span>NOT SURE WHERE TO START?</span><Link href="/quote">Tell us what you need <ArrowRight size={15} /></Link></div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="about" id="about">
        <div className="about-image" data-reveal="left">
          <Image src="/sureway-team.png" alt="Sure-Way logistics professionals planning a shipment together" fill sizes="(max-width: 760px) 100vw, 50vw" data-parallax="0.12" />
          <div className="image-caption"><span>ON THE GROUND IN GHANA</span><span><MapPin size={13} /> ACCRA · KASOA</span></div>
        </div>
        <div className="about-content" data-reveal="right">
          <div className="eyebrow"><span className="eyebrow-line" /> A BETTER WAY TO MOVE</div>
          <h2>Personal service.<br /><em>Global perspective.</em></h2>
          <p>Sure-Way Freight Ghana Ltd. is an independent logistics partner with offices at Accra International Airport and Kasoa Danchira. We help people and businesses move goods across borders, across oceans and across town—with care at every hand-off.</p>
          <p>We believe the best freight service is the kind that gives you one less thing to worry about: responsive people, practical solutions and a plan that makes sense.</p>
          <Link className="about-link" href="/about">A little more about us <ArrowUpRight size={16} /></Link>
          <div className="about-stats"><div><strong>SEA</strong><span>Ocean freight</span></div><div><strong>AIR</strong><span>Air cargo</span></div><div><strong>LAND</strong><span>Road delivery</span></div></div>
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section className="industries section-pad">
        <div className="section-heading" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> WHO WE MOVE FOR</div><h2>Built for Ghana’s<br /><em>businesses.</em></h2></div>
          <p>From a first-time importer to an established company, we handle the freight so you can focus on running your business.</p>
        </div>
        <div className="industry-grid" data-stagger>
          {INDUSTRIES.map((i, n) => (
            <article className="industry-card" key={i.title} data-reveal="up">
              <span className="process-num">{String(n + 1).padStart(2, '0')}</span>
              <h3>{i.title}</h3>
              <p>{i.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- PHOTO BAND ---------- */}
      <section className="photo-band" aria-label="Sea, air and land freight" data-stagger>
        {[
          { p: PHOTOS.seaBand, label: 'SEA', href: '/services/sea-freight' },
          { p: PHOTOS.airBand, label: 'AIR', href: '/services/air-freight' },
          { p: PHOTOS.roadBand, label: 'LAND', href: '/services/road-transport' },
        ].map(({ p, label, href }) => (
          <Link href={href} className="photo-tile" key={label} data-reveal="up">
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 100vw, 33vw" data-parallax="0.14" />
            <span className="photo-tile-label">{label} <ArrowUpRight size={16} /></span>
          </Link>
        ))}
      </section>

      {/* ---------- TRADE LANES ---------- */}
      <section className="lanes section-pad">
        <div className="section-heading" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> TRADE LANES</div><h2>Connected to<br /><em>where you trade.</em></h2></div>
          <p>Accra and Kasoa are our home base. From here we connect your cargo to the world’s major trading regions and to the sub-region.</p>
        </div>
        <div className="lane-list">
          {LANES.map((l) => (
            <div className="lane" key={l.from + l.to} data-reveal="up">
              <strong>{l.from}</strong><ArrowRight size={16} /><span>{l.to}</span><em>{l.mode}</em>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="process section-pad" id="process">
        <div className="process-head" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> SIMPLE FROM HERE</div><h2>Three steps.<br /><em>One less worry.</em></h2></div>
          <p>Whether it’s your first shipment or your fiftieth, we make the next step easy.</p>
        </div>
        <div className="process-grid" data-stagger>
          {PROCESS.map((step) => (
            <article className="process-card" key={step.number} data-reveal="up"><span className="process-num">{step.number}</span><span className="process-arrow"><ArrowUpRight size={17} /></span><h3>{step.title}</h3><p>{step.detail}</p></article>
          ))}
        </div>
      </section>

      {/* ---------- FAQ TEASER ---------- */}
      <section className="faq-teaser section-pad">
        <div className="section-heading" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> QUICK ANSWERS</div><h2>Good questions.<br /><em>Straight answers.</em></h2></div>
          <p>Here are a few things people ask us most. The rest are on our FAQ page.</p>
        </div>
        <div className="faq-list" data-reveal="up">
          {FAQS.slice(0, 4).map((f) => (
            <details key={f.q}><summary>{f.q}<Plus size={18} /></summary><p>{f.a}</p></details>
          ))}
        </div>
        <div className="services-foot" data-reveal="up"><span>STILL CURIOUS?</span><Link href="/faq">See all questions <ArrowRight size={15} /></Link></div>
      </section>

      <CtaBand />

      {/* ---------- CONTACT ---------- */}
      <section className="contact section-pad" id="contact">
        <div className="contact-left" data-reveal="left">
          <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> START A CONVERSATION</div>
          <h2>Your next shipment<br />starts <em>right here.</em></h2>
          <p>Reach out with a few details. We’ll get back to you and talk through the best way forward.</p>
          <a className="contact-phone" href={`tel:${SITE.phones[0].tel}`}><span><Phone size={18} /></span><span><small>CALL OUR TEAM</small><strong>{SITE.phones[0].display}</strong></span><ArrowUpRight className="contact-go" /></a>
          <a className="contact-phone-alt" href={`tel:${SITE.phones[1].tel}`}>Or call {SITE.phones[1].display}</a>
        </div>
        <div className="contact-details" data-reveal="right">
          <a href={`mailto:${SITE.email}`}><span className="contact-icon"><Mail /></span><span><small>EMAIL US</small><strong>{SITE.email}</strong></span><ArrowUpRight /></a>
          <Link href="/contact"><span className="contact-icon"><MapPin /></span><span><small>VISIT OUR OFFICES</small><strong>{SITE.locationShort}</strong></span><ArrowUpRight /></Link>
          <a href={SITE.url} target="_blank" rel="noreferrer"><span className="contact-icon"><Globe2 /></span><span><small>VISIT ONLINE</small><strong>surewayfreightghana.com</strong></span><ArrowUpRight /></a>
          <Link className="contact-email-cta" href="/quote">Send us a freight enquiry <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  )
}
