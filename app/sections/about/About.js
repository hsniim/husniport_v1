'use client'
import { motion } from 'framer-motion'

export default function About() {
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
            About
          </h2>
        </div>
        
        <div className="space-y-4 text-slate-400 leading-relaxed [&_b]:text-white [&_b]:font-semibold">
          <p>
            Saya memulai perjalanan sebagai developer sejak masa SMK, saat pertama kali mengenal 
            bagaimana sebuah tampilan web bisa dibentuk dari baris-baris kode sederhana. 
            Dari pengalaman itu, rasa ingin tahu saya terus berkembang, dan saya semakin menikmati 
            proses membuat produk digital yang rapi, fungsional, serta nyaman digunakan 
            oleh pengguna.
            Sejak saat itu, saya fokus mengasah kemampuan di bidang web development, mulai dari 
            fondasi seperti <b>HTML</b>, <b>CSS</b>, dan <b>JavaScript</b>, hingga framework modern
            seperti <b>Next.js</b>, <b>Node.js/Express</b>, serta <b>Laravel</b>. 
            Sifat saya yang detail-oriented dan sedikit perfeksionis mendorong saya untuk
            selalu memastikan setiap elemen dalam proyek konsisten dan berfungsi dengan optimal.
          </p>
          
          <p>
            Saat ini, saya terus berfokus untuk berkembang sebagai <b>Full-stack Web Developer</b>, dengan tujuan 
            membangun aplikasi web yang stabil, scalable, dan memberikan pengalaman pengguna yang baik.
          </p>
          
          <p>
            Saya sangat terbuka terhadap peluang kerja full-time, proyek freelance, maupun kolaborasi 
            lain yang dapat menantang kemampuan saya sekaligus memberikan ruang untuk terus belajar 
            dan berkembang.
          </p>
        </div>
      </motion.div>
    </section>
  )
}