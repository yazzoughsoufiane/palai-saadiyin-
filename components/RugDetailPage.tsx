'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Rug } from '@/data/rugs'
import MuseumLabel from './MuseumLabel'
import EnquireSheet from './EnquireSheet'
import { useI18n } from '@/lib/i18n'
import { fadeRise, fadeRiseStagger } from '@/lib/motion'

interface RugDetailPageProps {
  rug: Rug
  prev: Rug | null
  next: Rug | null
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''
const WHATSAPP_NUMBER = '212669940551'

function getWhatsAppUrl(rugTitle: string, inventoryNumber: string) {
  const message = `Hi, I'm interested in the *${rugTitle}* (${inventoryNumber}). Could you please give me more information?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function RugDetailPage({ rug, prev, next }: RugDetailPageProps) {
  const { locale, t } = useI18n()
  const [enquireOpen, setEnquireOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<string>(`${BASE}${rug.images.primary}`)
  const [activeSide, setActiveSide] = useState<'summer' | 'winter' | null>(null)

  const title = locale === 'fr' ? rug.titleFr : rug.title
  const note = locale === 'fr' ? rug.curatorialNoteFr : rug.curatorialNote

  const allImages = [
    {
      src: `${BASE}${rug.images.primary}`,
      label: t('Primary view', 'Vue principale'),
      side: null,
    },
    ...(rug.images.summerSide
      ? [{
          src: `${BASE}${rug.images.summerSide}`,
          label: t('Summer side', 'Face été'),
          side: 'summer' as const,
        }]
      : []),
    ...(rug.images.winterSide
      ? [{
          src: `${BASE}${rug.images.winterSide}`,
          label: t('Winter side', 'Face hiver'),
          side: 'winter' as const,
        }]
      : []),
    ...rug.images.details.map((src, i) => ({
      src: `${BASE}${src}`,
      label: `${t('Detail', 'Détail')} ${i + 1}`,
      side: null,
    })),
  ]

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-28 pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/collection"
                className="label-caps text-shadow/55 hover:text-ink transition-colors"
              >
                {t('Collection', 'Collection')}
              </Link>
            </li>
            <li aria-hidden="true" className="label-caps text-shadow/30">·</li>
            <li>
              <span className="label-caps text-ink/70">{title}</span>
            </li>
          </ol>
        </nav>

        {/* Main layout */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12">

          {/* Left: images */}
          <motion.div
            variants={fadeRise}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-7"
          >
            {/* Primary image — animated cross-fade on switch */}
            <div
              className="relative overflow-hidden bg-bone-dark"
              style={{ aspectRatio: rug.format === "couloir" ? "1 / 1" : `${rug.dimensions.w} / ${rug.dimensions.h}` }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.38, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage}
                    alt={`${title}. ${rug.region}, ${rug.yearRange}. ${rug.dimensions.w} × ${rug.dimensions.h} cm.`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Side label badge */}
              <AnimatePresence>
                {activeSide && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <span className="label-caps bg-bone/90 backdrop-blur-sm px-2.5 py-1 text-ink">
                      {activeSide === 'summer'
                        ? t('Summer side', 'Face été')
                        : t('Winter side', 'Face hiver')}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Thumbnail strip */}
            {allImages.length > 1 && (
              <div
                className="mt-4 flex gap-3 overflow-x-auto pb-1"
                role="group"
                aria-label="Image gallery"
              >
                {allImages.map((img) => (
                  <button
                    key={img.src}
                    onClick={() => {
                      setActiveImage(img.src)
                      setActiveSide(img.side)
                    }}
                    className={`relative shrink-0 w-16 h-16 overflow-hidden border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-saffron ${
                      activeImage === img.src
                        ? 'border-ink'
                        : 'border-ink/20 hover:border-ink/50'
                    }`}
                    aria-label={img.label}
                    aria-pressed={activeImage === img.src}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Summer / Winter toggle */}
            {rug.images.summerSide && rug.images.winterSide && (
              <div className="mt-6 border-t border-ink/10 pt-5">
                <p className="label-caps text-shadow/60 mb-3">
                  {t(
                    'Reversible — this piece has two faces',
                    'Réversible — cette pièce a deux faces',
                  )}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setActiveImage(`${BASE}${rug.images.summerSide}`)
                      setActiveSide('summer')
                    }}
                    className={`label-caps border-b pb-0.5 transition-colors ${
                      activeSide === 'summer'
                        ? 'border-ink text-ink'
                        : 'border-shadow/30 text-shadow/60 hover:text-ink'
                    }`}
                  >
                    {t('Summer side', 'Face été')}
                  </button>
                  <button
                    onClick={() => {
                      setActiveImage(`${BASE}${rug.images.winterSide}`)
                      setActiveSide('winter')
                    }}
                    className={`label-caps border-b pb-0.5 transition-colors ${
                      activeSide === 'winter'
                        ? 'border-ink text-ink'
                        : 'border-shadow/30 text-shadow/60 hover:text-ink'
                    }`}
                  >
                    {t('Winter side', 'Face hiver')}
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: museum label + curatorial note */}
          <motion.div
            variants={fadeRiseStagger}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start"
          >
            <MuseumLabel rug={rug} locale={locale === 'ar' ? 'en' : locale} />

            <div className="mt-8 pt-6 border-t border-ink/10">
              <p className="label-caps text-shadow/55 mb-4">
                {t('Curatorial note', 'Note curatoriale')}
              </p>
              <p className="prose-body text-pretty leading-relaxed">{note}</p>
            </div>

            <div className="mt-10 pt-6 border-t border-ink/10 space-y-3">
              {/* Enquire button */}
              <button
                onClick={() => setEnquireOpen(true)}
                className="w-full py-3.5 border border-ink/30 font-sans text-[0.75rem] uppercase tracking-widest text-ink hover:bg-ink hover:text-bone transition-colors duration-300"
              >
                {t('Enquire about this piece', "S'enquérir de cette pièce")}
              </button>

              {/* WhatsApp button */}
              <a
                href={getWhatsAppUrl(title, rug.inventoryNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 flex items-center justify-center gap-2.5 border border-[#25D366]/40 bg-[#25D366]/8 font-sans text-[0.75rem] uppercase tracking-widest text-ink hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('Ask on WhatsApp', 'Demander sur WhatsApp')}
              </a>

              <p className="label-caps text-shadow/45 text-center">
                {t(
                  'Private viewings available in Marrakech',
                  'Visites privées disponibles à Marrakech',
                )}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Prev / Next */}
        <nav
          aria-label="Collection navigation"
          className="mt-20 pt-10 border-t border-ink/10 flex items-center justify-between"
        >
          {prev ? (
            <Link href={`/collection/${prev.slug}`} className="flex items-center gap-3 group">
              <ChevronLeft
                size={16}
                strokeWidth={1.5}
                className="text-shadow/50 group-hover:text-ink transition-colors"
              />
              <div>
                <p className="label-caps text-shadow/50 group-hover:text-shadow transition-colors">
                  {t('Previous', 'Précédent')}
                </p>
                <p className="font-serif text-sm font-light text-ink group-hover:text-shadow transition-colors mt-0.5">
                  {locale === 'fr' ? prev.titleFr : prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/collection/${next.slug}`}
              className="flex items-center gap-3 group text-right"
            >
              <div>
                <p className="label-caps text-shadow/50 group-hover:text-shadow transition-colors">
                  {t('Next', 'Suivant')}
                </p>
                <p className="font-serif text-sm font-light text-ink group-hover:text-shadow transition-colors mt-0.5">
                  {locale === 'fr' ? next.titleFr : next.title}
                </p>
              </div>
              <ChevronRight
                size={16}
                strokeWidth={1.5}
                className="text-shadow/50 group-hover:text-ink transition-colors"
              />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>

      <EnquireSheet
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        rugTitle={title}
        inventoryNumber={rug.inventoryNumber}
      />
    </>
  )
}

