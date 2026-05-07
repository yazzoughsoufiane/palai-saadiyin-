'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import type { Origin } from '@/data/origins'

interface OriginsContentProps {
  origins: Origin[]
}

export default function OriginsContent({ origins }: OriginsContentProps) {
  const { locale, t } = useI18n()

  return (
    <div className="space-y-0">
      {origins.map((origin, i) => (
        <div
          key={origin.id}
          className="grid grid-cols-12 gap-6 py-12 border-t border-ink/10 group"
          id={origin.id}
        >
          {/* Number */}
          <div className="col-span-1 hidden lg:flex">
            <span className="label-caps text-shadow/30 pt-1">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Motif */}
          <div className="col-span-3 lg:col-span-2 flex items-start">
            <div
              className="w-16 h-16 opacity-65"
              dangerouslySetInnerHTML={{ __html: origin.svgMotif }}
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="col-span-9 lg:col-span-6">
            <div className="mb-4">
              <div className="flex items-baseline gap-3 flex-wrap mb-1">
                <h2 className="font-serif text-[1.75rem] font-light text-ink">
                  {locale === 'fr' ? origin.nameFr : origin.name}
                </h2>
                <span className="font-serif text-[1rem] text-shadow/70 italic" lang="ar" dir="rtl">
                  {origin.nameAr}
                </span>
              </div>
              <p className="label-caps text-shadow/55">{origin.region}</p>
              {origin.tribe && (
                <p className="label-caps text-shadow/45 mt-0.5">{origin.tribe}</p>
              )}
            </div>

            <p className="prose-body text-pretty mb-4">
              {locale === 'fr' ? origin.descriptionFr : origin.description}
            </p>

            <div className="border-l-2 border-saffron/40 pl-4 mt-5">
              <p className="label-caps text-shadow/55 mb-1">
                {t('Visual signature', 'Signature visuelle')}
              </p>
              <p className="font-sans text-sm text-ink/80 italic">
                {locale === 'fr' ? origin.visualSignatureFr : origin.visualSignature}
              </p>
            </div>
          </div>

          {/* Link */}
          <div className="col-span-12 lg:col-span-3 flex items-start justify-end">
            <Link
              href={`/collection?region=${encodeURIComponent(origin.collectionFilter)}`}
              className="label-caps border-b border-shadow/25 pb-0.5 hover:text-ink hover:border-ink/50 transition-colors"
              aria-label={`${t('View', 'Voir')} ${locale === 'fr' ? origin.nameFr : origin.name} ${t('rugs in the collection', 'tapis dans la collection')}`}
            >
              {t('View works', 'Voir les œuvres')} →
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
