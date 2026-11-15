import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/components/LanguageProvider'
import MotionProvider from '@/components/MotionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Husni Mubarok',
  description: 'Portfolio website built with Next.js, Tailwind CSS, and Framer Motion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}>
        <LanguageProvider>
          <MotionProvider>{children}</MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}