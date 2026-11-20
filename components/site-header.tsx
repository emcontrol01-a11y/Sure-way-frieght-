'use client'
/**
 * components/site-header.tsx
 * Top bar + header + working mobile menu (the old "menu" icon only jumped
 * to #services). Client component because it holds open/closed state.
 */
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, MapPin, Menu, X } from 'lucide-react'
import { NAV, SITE } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the menu whenever the page changes
  useEffect(() => setOpen(false), [pathname])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => !href.includes('#') && (pathname === href || pathname.startsWith(href + '/'))

  return (
    <>
      <div className="topline">
        <span>
          <MapPin size={13} /> {SITE.address.toUpperCase()}
        </span>
        <span className="topline-right">
          <span>GLOBAL REACH. GHANAIAN ROOTS.</span>
          <a href={`mailto:${SITE.email}`}>
            {SITE.email} <ArrowUpRight size={12} />
          </a>
        </span>
      </div>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Sure-Way Freight Ghana home">
          <span className="brand-mark">
            <Image src="/sureway-ship-logo.png" alt="" width={46} height={36} />
          </span>
          <span className="brand-copy">
            <strong>SURE-WAY</strong>
            <small>FREIGHT GHANA LTD.</small>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? 'is-active' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/quote">
          Get a quote <ArrowUpRight size={16} />
        </Link>

        <button className="mobile-menu" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <div className="mobile-drawer" role="dialog" aria-label="Menu">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? 'is-active' : undefined}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-orange" href="/quote">
            Get a quote <ArrowUpRight size={17} />
          </Link>
          <a className="drawer-phone" href={`tel:${SITE.phones[0].tel}`}>
            Call {SITE.phones[0].display}
          </a>
        </div>
      )}
    </>
  )
}
