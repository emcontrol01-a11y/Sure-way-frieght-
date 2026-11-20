/**
 * components/page-hero.tsx
 * Shared banner used at the top of every inner page (About, Services, FAQ...).
 */
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  lead?: string
  image?: { src: string; alt: string }
  crumbs?: { label: string; href?: string }[]
}

export function PageHero({ eyebrow, title, lead, image, crumbs }: Props) {
  return (
    <section className="page-hero">
      {image && <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="page-hero-img" data-parallax="0.2" />}
      <div className="page-hero-shade" />
      <div className="page-hero-inner">
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c) => (c.href ? <Link key={c.label} href={c.href}>{c.label}</Link> : <span key={c.label}>{c.label}</span>))}
          </nav>
        )}
        <div className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</div>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  )
}
