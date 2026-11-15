'use client'
import { useEffect } from 'react'

// Harus sama dengan aturan di Sidebar.js:
// section aktif = section terakhir yang top-nya sudah melewati garis ini (px dari atas layar)
const ACTIVE_LINE = 220

/**
 * Menandai section yang sedang fokus saat scroll dengan data-active="true".
 * Section lain otomatis digelapkan lewat CSS di globals.css.
 * Komponen ini tidak merender apa pun.
 */
export default function SectionFocus() {
  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return

    const sections = Array.from(main.querySelectorAll(':scope > section[id]'))
    if (sections.length === 0) return

    main.setAttribute('data-section-focus', '')

    const update = () => {
      let current = sections[0]
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= ACTIVE_LINE) {
          current = section
        }
      })
      sections.forEach((section) => {
        section.dataset.active = section === current ? 'true' : 'false'
      })
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        update()
        ticking = false
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      main.removeAttribute('data-section-focus')
      sections.forEach((section) => {
        delete section.dataset.active
      })
    }
  }, [])

  return null
}