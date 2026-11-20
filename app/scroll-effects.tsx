'use client'
/**
 * app/scroll-effects.tsx
 * ---------------------------------------------------------------
 * All the scroll-driven motion lives here (one script, no libraries):
 *   1. REVEAL    – elements with [data-reveal] fade/slide in as they enter view
 *   2. STAGGER   – children of [data-stagger] reveal one after another
 *   3. PARALLAX  – images with [data-parallax="0.15"] drift slower than the page
 *   4. HEADER    – sets [data-scrolled] on <html> so the header can shrink
 *   5. PROGRESS  – the gold scroll-progress bar at the very top
 * Everything is skipped for people who enabled "reduce motion".
 * ---------------------------------------------------------------
 */
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollEffects() {
  const pathname = usePathname() // re-run on every page change so new pages animate too

  useEffect(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    let observer: IntersectionObserver | undefined
    let frame = 0
    const timers: number[] = []

    if (!reduced) root.classList.add('motion-ready')

    /* 2. STAGGER: give each child a delay based on its column in the grid */
    document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((parent) => {
      const cols = Math.max(1, getComputedStyle(parent).gridTemplateColumns.split(' ').filter(Boolean).length)
      Array.from(parent.children).forEach((child, i) => {
        if (child instanceof HTMLElement) child.style.setProperty('--reveal-delay', `${(i % cols) * 110}ms`)
      })
    })

    /* 1. REVEAL */
    const show = (el: HTMLElement) => {
      el.classList.add('is-visible')
      // clear the delay afterwards so hover effects on the card feel instant
      timers.push(window.setTimeout(() => el.style.setProperty('--reveal-delay', '0ms'), 1500))
    }
    if (!reduced && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              show(entry.target as HTMLElement)
              observer?.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
      )
      targets.forEach((t) => observer?.observe(t))
    } else {
      targets.forEach((t) => t.classList.add('is-visible'))
    }

    /* 3 + 4 + 5: everything that follows the scroll position */
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const vh = window.innerHeight
        const y = window.scrollY
        const max = document.documentElement.scrollHeight - vh
        root.style.setProperty('--scroll-progress', String(Math.min(1, Math.max(0, max > 0 ? y / max : 0))))
        if (y > 40) root.setAttribute('data-scrolled', '')
        else root.removeAttribute('data-scrolled')

        if (reduced) return
        parallaxEls.forEach((el) => {
          const box = el.parentElement?.getBoundingClientRect()
          if (!box || box.bottom < -200 || box.top > vh + 200) return // off-screen: skip
          const speed = parseFloat(el.dataset.parallax || '0.12')
          const limit = box.height * 0.06 // image is scaled 12% so it can move 6% each way
          const dy = (vh / 2 - (box.top + box.height / 2)) * speed
          el.style.setProperty('--py', `${Math.max(-limit, Math.min(limit, dy))}px`)
        })
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frame)
      timers.forEach(clearTimeout)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      // NOTE: 'motion-ready' stays on <html> so new pages never flash un-hidden
    }
  }, [pathname])

  return <div className="scroll-progress" aria-hidden="true" />
}
