'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export default function SiteFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-ink/10 bg-bone" role="contentinfo">
      {/* Pre-footer strip */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0 }}
        >
          <p className="label-caps text-shadow/60 mb-4">{t('Address', 'Adresse', 'العنوان')}</p>
          <address className="not-italic">
            <p className="font-serif text-[1.5rem] font-light text-ink leading-snug" lang="ar" dir="rtl">
              قصر السعديين
            </p>
            <p className="font-sans text-sm text-shadow mt-2 leading-relaxed">
              16 Rue My Taïb Kssour<br />
              Bab El Ksour, Médina<br />
              Marrakech 40000<br />
              Maroc
            </p>
          </address>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p className="label-caps text-shadow/60 mb-4">{t('Hours', 'Horaires', 'الساعات')}</p>
          <div className="font-sans text-sm text-shadow leading-relaxed">
            <p className="text-ink font-medium mb-1">
              {t('By appointment preferred', 'Sur rendez-vous de préférence', 'بموعد مسبق مفضل')}
            </p>
            <p>
              {t('Saturday – Thursday', 'Samedi – Jeudi', 'السبت – الخميس')}<br />
              09:00 – 19:00
            </p>
            <p className="mt-2">
              {t('Languages spoken:', 'Langues parlées :', 'اللغات المتحدثة:')}<br />
              {t('Arabic · French · English · Spanish · Italian', 'Arabe · Français · Anglais · Espagnol · Italien')}
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="label-caps text-shadow/60 mb-4">{t('Navigation', 'Navigation', 'التنقل')}</p>
          <nav aria-label="Footer navigation">
            <ul className="space-y-2">
              {[
                { href: '/collection', en: 'Collection', fr: 'Collection' },
                { href: '/origins', en: 'Origins', fr: 'Origines' },
                { href: '/maison', en: 'The House', fr: 'La Maison' },
                { href: '/journal', en: 'Journal', fr: 'Journal' },
                { href: '/visit', en: 'Visit & Enquire', fr: 'Visite & Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-shadow hover:text-ink transition-colors duration-200"
                  >
                    {t(link.en, link.fr)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink/10 px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-[1440px] mx-auto">
        <p className="label-caps text-shadow/50">
          {t(
            '© Palais Saadiyin · All pieces are one of one',
            '© Palais Saadiyin · Chaque pièce est unique',
            '© قصر السعديين · كل قطعة فريدة',
          )}
        </p>
        <p className="label-caps text-shadow/40">
          {t('Marrakech, Medina · Since the beginning', 'Marrakech, Médina · Depuis toujours', 'مراكش، المدينة القديمة')}
        </p>
      </div>
    </footer>
  )
}
