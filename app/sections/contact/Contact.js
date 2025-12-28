'use client'
import { motion } from 'framer-motion'
import { useForm } from '@formspree/react'
import { useState } from 'react'

export default function Contact() {
  const [state, handleSubmit] = useForm("xvzooqor")
  
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
            Kontak
          </h2>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-slate-200 mb-6">
            Hubungi Saya
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-md">
            Saya lagi open project baru. Kalau butuh website yang cepat, rapi, dan sesuai 
            budget, langsung saja kirim pesan. Nanti bakal saya balas secepatnya!
          </p>

          {/* Contact Form */}
          {state.succeeded ? (
            <div className="max-w-md">
              <div className="rounded-lg border border-teal-500/30 bg-teal-500/10 p-6">
                <p className="text-teal-300 text-lg font-medium">
                  Terima kasih! Pesan terkirim. Saya akan balas secepatnya.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all hover:border-slate-600"
                  placeholder="Ketik nama"
                  disabled={state.submitting}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all hover:border-slate-600"
                  placeholder="contoh@email.com"
                  disabled={state.submitting}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all resize-none hover:border-slate-600"
                  placeholder="Ketik pesan..."
                  disabled={state.submitting}
                ></textarea>
              </div>

              {/* Error Message */}
              {state.errors && state.errors.length > 0 && (
                <div className="text-red-400 text-sm">
                  Terjadi kesalahan. Silakan coba lagi.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-block px-7 py-3.5 text-sm font-medium text-teal-300 border border-teal-300/80 rounded-md hover:bg-teal-300/10 hover:border-teal-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Mengirim...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}