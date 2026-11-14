'use client'
import { motion } from 'framer-motion'

export default function Experiences() {
  const experiences = [
    {
      period: 'Juli — Okt 2025',
      title: 'Full-stack Developer',
      company: 'SKSG - Universitas Indonesia',
      description:'Bertanggung jawab mengembangkan website manajemen ruangan dan informasi real-time untuk lingkungan Kampus UI Salemba. Proyek bernama RACSI (Room and Control Schedule Interface) ini memungkinkan pengguna untuk memantau ketersediaan ruangan secara real-time, melakukan pemesanan ruang, serta mengakses informasi kampus terkini.',
      tags: []
    },
    {
      period: 'Agust - Nov 2024',
      title: 'Back-end Developer',
      company: 'PT. Hexagon Karyatama Indonesia',
      description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.',
      tags: []
    }
  ]

  return (
    <section id="experiences" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header (visible on mobile) */}
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Pengalaman
          </h2>
        </div>

        <div>
          <ol className="group/list">
            {experiences.map((exp, index) => (
              <li key={index} className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.period}>
                    {exp.period}
                  </header>

                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a 
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {exp.title} · {' '}
                            <span className="inline-block">
                              {exp.company}
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {exp.description}
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {exp.tags.map((tag, tagIndex) => (
                        <li key={tagIndex} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tag}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  )
}