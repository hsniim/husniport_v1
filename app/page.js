'use client'
import Sidebar from '../components/Sidebar'
import About from './sections/about/About'
import Experience from './sections/experiences/Experiences'
import Projects from './sections/projects/Projects'
import Contact from './sections/contact/Contact'

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Base Dark Background */}
      <div className="fixed inset-0 bg-slate-950 pointer-events-none"></div>
      
      {/* Main Gradient Overlay - Lebih kuat */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(2, 6, 23, 0.95) 50%, rgba(20, 184, 166, 0.08) 100%)'
        }}
      ></div>
      
      {/* Radial Gradient - Sudut Kiri Atas (lebih kuat) */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 10% 10%, rgba(30, 41, 59, 0.6) 0%, transparent 40%)'
        }}
      ></div>
      
      {/* Radial Gradient - Sudut Kanan Bawah dengan teal (lebih terlihat) */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 90% 90%, rgba(20, 184, 166, 0.12) 0%, transparent 40%)'
        }}
      ></div>
      
      {/* Center Glow Effect */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.3) 0%, transparent 70%)'
        }}
      ></div>
      
      {/* Subtle Noise Texture for depth */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Spotlight Effect - lebih terlihat */}
      <div 
        className="fixed inset-0 pointer-events-none spotlight"
        style={{
          background: 'radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20, 184, 166, 0.15), transparent 80%)'
        }}
      ></div>

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Sidebar - Fixed position on large screens, more width (45%) */}
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
            <Sidebar />
          </div>
          
          {/* Main Content - Scrollable on large screens (55%) */}
          <main className="pt-24 lg:w-[55%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Contact />
            
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Loosely designed in Figma and coded in Visual Studio Code. 
                Built with Next.js and Tailwind CSS, deployed with Vercel.
              </p>
            </footer>
          </main>
        </div>
      </div>

      <style jsx>{`
        .spotlight {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }
      `}</style>
    </div>
  )
}