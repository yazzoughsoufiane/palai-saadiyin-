'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Origin } from '@/data/origins'
import { useI18n } from '@/lib/i18n'

interface HomeOriginStripProps {
  origins: Origin[]
}

const highlight = new Set(['Boujad', 'Azilal', 'Beni Ourain', 'High Atlas', 'Sahara'])

export default function HomeOriginStrip({ origins }: HomeOriginStripProps) {
  const { t } = useI18n()
  const shown = origins.filter((o) => highlight.has(o.name))

  return (
    <section
      className="border-t border-ink/10 bg-bone"
      aria-labelledby="origins-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 id="origins-heading" className="label-caps-lg text-shadow/70">
            {t('Origins', 'Origines', 'الأصول')}
          </h2>
          <Link
            href="/origins"
            className="label-caps text-shadow/60 hover:text-ink border-b border-shadow/25 pb-0.5 transition-colors"
          >
            {t('All regions', 'Toutes les régions', 'جميع المناطق')} →
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-8 lg:gap-0 lg:grid lg:grid-cols-5 pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
          {shown.map((origin, i) => (
            <motion.div
              key={origin.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 lg:shrink lg:border-r last:border-r-0 border-ink/10 lg:px-6 first:pl-0"
            >
              <Link
                href={`/collection?region=${encodeURIComponent(origin.collectionFilter)}`}
                className="group flex flex-col gap-4 min-w-[160px] lg:min-w-0"
                aria-label={`View ${origin.name} rugs`}
              >
                {/* SVG motif */}
                <div
                  className="w-14 h-14 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  dangerouslySetInnerHTML={{ __html: origin.svgMotif }}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-serif text-[1.125rem] font-light text-ink group-hover:text-shadow transition-colors duration-200">
                    {t(origin.name, origin.nameFr, origin.nameAr)}
                  </p>
                  <p className="label-caps text-shadow/55 mt-0.5">{origin.region.split(',')[0]}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
