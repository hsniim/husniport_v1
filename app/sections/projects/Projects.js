'use client'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      image: '/ss_racsihome.png',
      title: 'RACSI (Room and Control Schedule Interface)',
      description: 'RACSI adalah solusi aplikasi web andal yang dikembangkan khusus untuk mengoptimalkan pengelolaan ruangan dan jadwal di institusi pendidikan, kantor, atau gedung serbaguna, membantu Anda menghemat waktu berharga sekaligus menghindari konflik jadwal yang sering terjadi dengan teknologi  real-time.',
      tags: ['HTML & CSS', 'JavaScript', 'Tailwind CSS', 'React', 'Node.js', 'Express.js', 'Socket.IO'],
      link: 'https://racsi-9dc.pages.dev/'
    },
    {
      image: 'https://brittanychiang.com/images/spotify-profile.png',
      title: 'Spotify Profile',
      description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      stars: 703,
      tags: ['React', 'Express', 'Spotify API', 'Heroku'],
      link: 'https://github.com/bchiang7/spotify-profile'
    },
    {
      image: 'https://brittanychiang.com/images/halcyon.png',
      title: 'Halcyon Theme',
      description: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      installs: '100k+',
      tags: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2'],
      link: 'https://github.com/bchiang7/halcyon-theme'
    },
    {
      image: 'https://brittanychiang.com/images/v4.png',
      title: 'brittanychiang.com (v4)',
      description: 'An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks on GitHub. Built with JavaScript and React.',
      stars: 8141,
      tags: ['Gatsby', 'Styled Components', 'Netlify'],
      link: 'https://github.com/bchiang7/v4'
    }
  ]

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header (visible on mobile) */}
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Proyek
          </h2>
        </div>

        <div>
          <ul className="group/list">
            {projects.map((project, index) => (
              <li key={index} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  
                  <div className="z-10 sm:order-2 sm:col-span-2">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      loading="lazy"
                      width="200"
                      height="48"
                    />
                  </div>

                  <div className="z-10 sm:order-1 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          aria-label={`${project.title} (opens in a new tab)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            <span className="inline-block">
                              {project.title}
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" 
                                aria-hidden="true"
                              >
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {project.description}
                    </p>
                    {(project.stars || project.installs) && (
                      <ul className="mt-2 flex items-center gap-4 text-xs font-medium text-slate-400" aria-label="Related links">
                        {project.stars && (
                          <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            <span>{project.stars.toLocaleString()}</span>
                          </li>
                        )}
                        {project.installs && (
                          <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                            </svg>
                            <span>{project.installs} Installs</span>
                          </li>
                        )}
                      </ul>
                    )}
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {project.tags.map((tag, tagIndex) => (
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
          </ul>
        </div>

        <div className="mt-12">
          <a 
            href="https://github.com" 
            className="inline-flex items-center font-medium leading-tight text-slate-200 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Project Archive
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" 
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}