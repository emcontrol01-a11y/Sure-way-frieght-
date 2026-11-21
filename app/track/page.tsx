import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { TrackForm } from '@/components/track-form'
import { CtaBand } from '@/components/cta-band'
import { PHOTOS, TRACK_STAGES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Track your cargo',
  description: 'Request the latest status of your shipment from the Sure-Way Freight Ghana team.',
}

export default function TrackPage() {
  return (
    <main>
      <PageHero
        eyebrow="TRACK YOUR CARGO"
        title={<>Where’s my cargo?<br /><em>Let’s find out.</em></>}
        lead="Enter your booking, bill of lading or container number and we’ll send you the latest update."
        image={PHOTOS.bannerTrack}
        crumbs={[{ label: 'Track cargo' }]}
      />

      <section className="section-pad track-box">
        <div className="form-card" data-reveal="up"><TrackForm /></div>
      </section>

      <section className="process section-pad">
        <div className="process-head" data-reveal="up">
          <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> THE JOURNEY</div><h2>Every shipment follows<br /><em>these stages.</em></h2></div>
          <p>So you always know what’s happening and what comes next.</p>
        </div>
        <div className="stage-grid" data-stagger>
          {TRACK_STAGES.map((s, i) => (
            <article className="stage" key={s.title} data-reveal="up">
              <span className="stage-dot">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Have a new shipment coming?" />
    </main>
  )
}
