/**
 * components/home-offices.tsx
 * Both office maps on the home page. Data comes from SITE.offices in lib/site.ts,
 * so changing an address or map link there updates the home page and the contact page.
 */
import { ArrowUpRight, Phone } from 'lucide-react'
import { SITE } from '@/lib/site'

export function HomeOffices() {
  return (
    <section className="home-offices section-pad" id="offices" aria-labelledby="offices-title">
      <div className="section-heading" data-reveal="up">
        <div>
          <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> FIND US</div>
          <h2 id="offices-title">Two offices.<br /><em>Both easy to reach.</em></h2>
        </div>
        <p>Walk in, call ahead or send us your documents. Open the map for live directions to either office.</p>
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
              <div className="office-actions">
                <a className="about-link dark-link" href={o.mapLink} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a>
                <a className="about-link dark-link" href={`tel:${SITE.phones[0].tel}`}><Phone size={15} /> {SITE.phones[0].display}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
