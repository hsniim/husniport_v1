'use client'
import { motion } from 'framer-motion'
import { useLanguage, Rich } from '@/components/LanguageProvider'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header (visible on mobile) */}
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            {t('nav.about')}
          </h2>
        </div>
        
        <div className="space-y-4 text-slate-400 leading-relaxed">
          {t('about.paragraphs').map((text, i) => (
            <p key={i}>
              <Rich text={text} />
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}