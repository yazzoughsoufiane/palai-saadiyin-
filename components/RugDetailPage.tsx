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
              style={{ aspectRatio: `${rug.dimensions.w} / ${rug.dimensions.h}` }}
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

            <div className="mt-10 pt-6 border-t border-ink/10">
              <button
                onClick={() => setEnquireOpen(true)}
                className="w-full py-3.5 border border-ink/30 font-sans text-[0.75rem] uppercase tracking-widest text-ink hover:bg-ink hover:text-bone transition-colors duration-300"
              >
                {t('Enquire about this piece', "S'enquérir de cette pièce")}
              </button>
              <p className="label-caps text-shadow/45 text-center mt-3">
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
