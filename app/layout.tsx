import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import SilentNav from '@/components/SilentNav'
import SiteFooter from '@/components/SiteFooter'
import CustomCursor from '@/components/CustomCursor'
import BackToTop from '@/components/BackToTop'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Palais Saadiyin — Maison de Tapis, Marrakech',
    template: '%s — Palais Saadiyin',
  },
  description:
    'A living archive of Moroccan weaving. Berber, Arabic, and Saharan rugs of exceptional provenance. 16 Rue My Taïb Kssour, Medina, Marrakech.',
  keywords: [
    'Moroccan rugs', 'Berber carpets', 'Marrakech', 'Palais Saadiyin',
    'Beni Ourain', 'Azilal', 'Boujad', 'kilim', 'handwoven', 'vegetable dyes',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Palais Saadiyin',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-bone text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ink focus:text-bone focus:font-sans focus:text-sm focus:uppercase focus:tracking-widest"
        >
          Skip to content
        </a>
        <I18nProvider>
          <CustomCursor />
          <SilentNav />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
          <BackToTop />
        </I18nProvider>
      </body>
    </html>
  )
}
