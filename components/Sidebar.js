'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about')
  const { t, lang } = useLanguage()
  const hoveredSection = useRef(null) // id section yang sedang di-hover mouse

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120 // Offset untuk header
      
      // Cek setiap section dari bawah ke atas
      // Sehingga section yang paling atas di viewport akan terpilih
      let currentSection = 'about'
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        
        // Jika scroll position sudah melewati top section ini
        if (scrollPosition >= sectionTop - 100) {
          currentSection = section.id
        }
      })
      
      setActiveSection(currentSection)
    }

    // Jalankan saat mount
    handleScroll()
    
    // Listen untuk scroll events dengan throttle
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollListener, { passive: true })

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [lang])

  // ===== Section focus: section yang tidak aktif diredupkan (desktop saja) =====
  // Memakai activeSection yang sama dengan highlight menu, jadi keduanya selalu selaras.
  // Section yang sedang di-hover mouse ikut menjadi terang walau bukan section aktif.
  // Jika efek ini sudah ada di tempat lain (mis. page.js / globals.css), hapus salah satunya.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sections = Array.from(document.querySelectorAll('section[id]'))

    const applyFocus = () => {
      sections.forEach((section) => {
        const focused =
          section.id === activeSection || section.id === hoveredSection.current
        section.style.transition = 'opacity 400ms ease'
        section.style.opacity = mq.matches && !focused ? '0.5' : ''
      })
    }

    const onEnter = (e) => {
      hoveredSection.current = e.currentTarget.id
      applyFocus()
    }
    const onLeave = () => {
      hoveredSection.current = null
      applyFocus()
    }

    sections.forEach((section) => {
      section.addEventListener('mouseenter', onEnter)
      section.addEventListener('mouseleave', onLeave)
    })
    mq.addEventListener('change', applyFocus)
    applyFocus()

    return () => {
      sections.forEach((section) => {
        section.removeEventListener('mouseenter', onEnter)
        section.removeEventListener('mouseleave', onLeave)
      })
      mq.removeEventListener('change', applyFocus)
    }
  }, [activeSection, lang])

  // Kembalikan style section saat Sidebar dilepas
  useEffect(() => {
    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        section.style.opacity = ''
        section.style.transition = ''
      })
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  // Label diambil dari locales (id.js / en.js). Tampil kapital lewat class "uppercase".
  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'experiences', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ]

  return (
    <header className="lg:flex lg:flex-col lg:justify-between">
      <div>
        {/* Profile Photo */}
        <div className="mb-8 lg:mb-10">
          <div className="relative inline-block">
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border-2 border-slate-200/10 bg-gradient-to-br from-teal-400/20 to-slate-800/40 shadow-lg transition-[border-color,box-shadow] hover:border-teal-300/30 hover:shadow-teal-500/20">
              {/* Profile Image */}
              <Image
                src="/square.png" 
                alt={t('hero.name')}
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
                onError={(e) => {
                  // Fallback ke initial jika gambar tidak ada
                  e.currentTarget.style.display = 'none'
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }
                }}
              />
              {/* Fallback - Initial letters dengan style bagus */}
              <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-600">
                <span className="text-4xl font-bold text-slate-900">HM</span>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-teal-400/20 to-cyan-600/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100"></div>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{t('hero.name')}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {t('hero.role')}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {t('hero.tagline')}
        </p>

        {/* Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={`group flex items-center py-3 ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-[width,background-color] ${
                      activeSection === item.id
                        ? 'w-16 bg-slate-200'
                        : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${
                      activeSection === item.id
                        ? 'text-slate-200'
                        : 'text-slate-500 group-hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links + Language toggle (versi desktop) */}
      <div className="mt-8 flex flex-col items-start gap-5">
        <ul className="ml-1 flex items-center" aria-label="Social media">
          <li className="mr-5 text-xs">
            <a
              href="https://github.com/hsniim"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-slate-200"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              href="https://www.linkedin.com/in/sihusni/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-slate-200"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              href="https://www.instagram.com/hsniim"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-slate-200"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              href="mailto:husnovember21@gmail.com"
              className="block hover:text-slate-200"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" aria-hidden="true" />
            </a>
          </li>
        </ul>

        {/* Desktop: bola di bawah ikon sosial */}
        <LanguageToggle className="ml-1 hidden lg:inline-flex" />
      </div>

      {/* Mobile: bola melayang di kanan bawah */}
      <LanguageToggle floating className="lg:hidden" />
    </header>
  )
}