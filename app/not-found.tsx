import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main>
      <section className="section-pad notfound">
        <span className="quote-graphic static" aria-hidden="true">404</span>
        <div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> LOST IN TRANSIT</div>
        <h1>This page missed<br />its <em>connection.</em></h1>
        <p>The page you’re looking for has moved or doesn’t exist. Let’s get you back on route.</p>
        <div className="hero-actions">
          <Link className="button button-orange" href="/">Back to home <ArrowUpRight size={16} /></Link>
          <Link className="button button-dark" href="/contact">Contact us</Link>
        </div>
      </section>
    </main>
  )
}
