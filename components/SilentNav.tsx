'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const navLinks = [
  { href: '/collection', en: 'Collection', fr: 'Collection', ar: 'المجموعة' },
  { href: '/origins', en: 'Origins', fr: 'Origines', ar: 'الأصول' },
  { href: '/maison', en: 'The House', fr: 'La Maison', ar: 'البيت' },
  { href: '/journal', en: 'Journal', fr: 'Journal', ar: 'المجلة' },
  { href: '/visit', en: 'Visit', fr: 'Visite', ar: 'زيارة' },
]

export default function SilentNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { locale, setLocale, t } = useI18n()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const locales: Array<{ code: typeof locale; label: string }> = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
  ]

  return (
    <>
      <header
        role="banner"
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-bone/95 backdrop-blur-sm border-b border-ink/8 py-3'
            : 'bg-transparent py-6',
        )}
      >
        <nav
          className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo + Text */}
          <Link
            href="/"
            className="flex items-center gap-2 no-print shrink-0"
            aria-label="Palais Saadiyin — home"
          >
            <Image
              src="/rugs/ps-logo.png"
              alt=""
              width={22}
              height={22}
              className="object-contain shrink-0"
            />
            <span
              className={clsx(
                'font-serif font-light tracking-wide whitespace-nowrap transition-all duration-300',
                scrolled || !isHome
                  ? 'text-[1.1rem] text-ink'
                  : 'text-[1.25rem] text-bone',
              )}
            >
              Palais Saadiyin
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'label-caps transition-colors duration-200',
                    isHome && !scrolled
                      ? 'text-bone/80 hover:text-bone'
                      : 'text-shadow/70 hover:text-ink',
                    active && (isHome && !scrolled ? 'text-bone' : 'text-ink border-b border-current pb-0.5'),
                  )}
                >
                  {locale === 'fr' ? link.fr : locale === 'ar' ? link.ar : link.en}
                </Link>
              )
            })}
          </div>

          {/* Right: locale toggle + mobile menu */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5" role="group" aria-label="Language selection">
              {locales.map((loc, i) => (
                <span key={loc.code} className="flex items-center gap-1.5">
                  <button
                    onClick={() => setLocale(loc.code)}
                    className={clsx(
                      'text-[0.625rem] font-sans uppercase tracking-widest transition-colors duration-200',
                      locale === loc.code
                        ? (isHome && !scrolled ? 'text-bone' : 'text-ink')
                        : (isHome && !scrolled ? 'text-bone/45 hover:text-bone/70' : 'text-shadow/50 hover:text-shadow'),
                    )}
                    aria-pressed={locale === loc.code}
                    aria-label={`Switch to ${loc.label}`}
                  >
                    {loc.label}
                  </button>
                  {i < locales.length - 1 && (
                    <span className={clsx('text-[0.5rem]', isHome && !scrolled ? 'text-bone/30' : 'text-shadow/30')}>·</span>
                  )}
                </span>
              ))}
            </div>

            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={clsx('block w-5 h-px transition-all duration-300', isHome && !scrolled ? 'bg-bone' : 'bg-ink', menuOpen && 'translate-y-[7px] rotate-45')} />
              <span className={clsx('block w-5 h-px transition-all duration-300', isHome && !scrolled ? 'bg-bone' : 'bg-ink', menuOpen && 'opacity-0')} />
              <span className={clsx('block w-5 h-px transition-all duration-300', isHome && !scrolled ? 'bg-bone' : 'bg-ink', menuOpen && '-translate-y-[7px] -rotate-45')} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bone flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-1 pt-24">
              {navLinks.map((link, i) => (
                <div key={link.href} className="overflow-hidden py-2">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '115%' }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className="font-serif text-[2.25rem] font-light text-ink hover:text-shadow transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {locale === 'fr' ? link.fr : locale === 'ar' ? link.ar : link.en}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="px-8 pb-12"
            >
              <p className="label-caps text-shadow/50">
                {t('16 Rue My Taïb Kssour · Marrakech', '16 Rue My Taïb Kssour · Marrakech', '١٦ درب موسى طيب كصور · مراكش')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
