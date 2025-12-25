'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120 // Offset untuk header
      
      // Cek setiap section dari bawah ke atas
      // Sehingga section yang paling atas di viewport akan terpilih
      let currentSection = 'about'
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
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

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experiences', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ]

  return (
    <header className="lg:flex lg:flex-col lg:justify-between">
      <div>
        {/* Profile Photo */}
        <div className="mb-8 lg:mb-10">
          <div className="relative inline-block">
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border-2 border-slate-200/10 bg-gradient-to-br from-teal-400/20 to-slate-800/40 shadow-lg transition-all hover:border-teal-300/30 hover:shadow-teal-500/20">
              {/* Profile Image */}
              <Image
                src="/square.png" 
                alt="Husni Mubarok"
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
          <a href="/">Husni Mubarok</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-stack Web Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Saya membuat aplikasi web yang stabil, scalable, dan user-friendly.
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
                    className={`nav-indicator mr-4 h-px transition-all ${
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

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
          <a
            href="https://github.com"
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
            href="https://linkedin.com"
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
            href="https://instagram.com"
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
            href="mailto:your@email.com"
            className="block hover:text-slate-200"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </header>
  )
}