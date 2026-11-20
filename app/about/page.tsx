import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { PHOTOS, SERVICES, VALUES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About us',
  description: 'Sure-Way Freight Ghana Ltd. is an independent logistics partner in Tema–Accra offering sea, air and road freight, customs clearing and warehousing.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT SURE-WAY"
        title={<>Personal service.<br /><em>Global perspective.</em></>}
        lead="An independent logistics partner in Tema–Accra, helping people and businesses move goods across borders, oceans and town."
        image={PHOTOS.seaPort}
        crumbs={[{ label: 'About us' }]}
      />

      <section className="story section-pad">
        <div className="story-text" data-reveal="left">
          <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> OUR STORY</div>
          <h2>Freight that gives you <em>one less thing to worry about.</em></h2>
          <p>Sure-Way Freight Ghana Ltd. was built on a simple idea: moving cargo should not feel complicated. Based in Tema–Accra, right beside Ghana’s busiest seaport, we help businesses and individuals ship, clear and deliver goods with clear communication from start to finish.</p>
          <p>We work as an extension of your team. You get responsive people, practical solutions and a plan that makes sense — whether you are importing your first container or managing regular shipments across several countries.</p>
          <Link className="about-link dark-link" href="/quote">Start a shipment with us <ArrowUpRight size={16} /></Link>
        </div>
        <div className="story-photo" data-reveal="right">
          <Image src="/sureway-team.png" alt="Sure-Way logistics professionals planning a shipment" fill sizes="(max-width: 760px) 100vw, 45vw" data-parallax="0.12" />
          <div className="image-caption"><span>ON THE GROUND IN GHANA</span><span><MapPin size={13} /> TEMA · ACCRA</span></div>
        </div>
      </section>

      <section className="mission">
        <div data-reveal="up"><span className="process-num">MISSION</span><h3>Make every shipment feel more straightforward.</h3><p>To give Ghanaian businesses reliable, transparent and affordable freight services that open the door to global trade.</p></div>
        <div data-reveal="up"><span className="process-num">VISION</span><h3>Ghana’s most trusted logistics partner.</h3><p>To be the freight company people recommend first — known for honesty, speed and care at every hand-off.</p></div>
      </section>

      <section className="values section-pad">
        <div className="section-heading" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> WHAT WE STAND FOR</div><h2>How we <em>work.</em></h2></div>
          <p>These are the promises behind every quote, every container and every phone call.</p>
        </div>
        <div className="industry-grid three" data-stagger>
          {VALUES.map((v, n) => (
            <article className="industry-card" key={v.title} data-reveal="up">
              <span className="process-num">{String(n + 1).padStart(2, '0')}</span>
              <h3>{v.title}</h3>
              <p>{v.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about about-reverse">
        <div className="about-image" data-reveal="left">
          <Image src={PHOTOS.warehouseTeam.src} alt={PHOTOS.warehouseTeam.alt} fill sizes="(max-width: 760px) 100vw, 50vw" data-parallax="0.12" />
        </div>
        <div className="about-content" data-reveal="right">
          <div className="eyebrow"><span className="eyebrow-line" /> WHY SURE-WAY</div>
          <h2>One team.<br /><em>Every step.</em></h2>
          <ul className="check-list">
            {['Sea, air and road freight under one roof', 'Customs clearing and forwarding handled by our team', 'Warehousing near the port when you need it', 'Straight answers and regular updates', 'Friendly for first-time importers and SMEs'].map((t) => (
              <li key={t}><CheckCircle2 size={18} /> {t}</li>
            ))}
          </ul>
          <Link className="about-link" href="/services">See all services <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="services section-pad">
        <div className="section-heading" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> EXPLORE</div><h2>What we can <em>do for you.</em></h2></div>
        </div>
        <div className="chip-row" data-reveal="up">
          {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="chip">{s.title}</Link>)}
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
