'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:min-h-[70vh] lg:flex lg:flex-col lg:justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header (visible on mobile) */}
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Contact
          </h2>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-slate-200 mb-6">
            Get In Touch
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-md">
            Although I'm not currently looking for any new opportunities, my inbox is 
            always open. Whether you have a question or just want to say hi, I'll try 
            my best to get back to you!
          </p>
          
          <a 
            href="mailto:your@email.com"
            className="inline-block px-7 py-4 text-sm font-medium text-teal-300 border border-teal-300 rounded hover:bg-teal-300/10 transition-all"
          >
            Say Hello
          </a>
        </div>
      </motion.div>
    </section>
  )
}