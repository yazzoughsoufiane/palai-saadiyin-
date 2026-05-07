'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Rug } from '@/data/rugs'
import RugCard from './RugCard'
import { fadeRiseStagger } from '@/lib/motion'
import { useI18n } from '@/lib/i18n'

interface HomeFeaturedProps {
  rugs: Rug[]
}

export default function HomeFeatured({ rugs }: HomeFeaturedProps) {
  const { t } = useI18n()

  const colSpans = [
    'col-span-12 lg:col-span-5',
    'col-span-12 lg:col-span-4 lg:col-start-7',
    'col-span-12 lg:col-span-6 lg:col-start-4',
    'col-span-12 lg:col-span-4',
    'col-span-12 lg:col-span-5 lg:col-start-6',
  ]

  const topOffsets = [
    'lg:mt-0',
    'lg:mt-24',
    'lg:mt-12',
    'lg:mt-0',
    'lg:mt-20',
  ]

  return (
    <section
      className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16"
      aria-labelledby="featured-heading"
    >
      {/* Section label */}
      <div className="flex items-baseline justify-between mb-12 lg:mb-16">
        <div>
          <h2
            id="featured-heading"
            className="label-caps-lg text-shadow/70"
          >
            {t('Currently on view', 'En ce moment', 'المعروض حالياً')}
          </h2>
          <div className="mt-1 w-8 h-px bg-saffron" />
        </div>
        <Link
          href="/collection"
          className="label-caps text-shadow/60 hover:text-ink border-b border-shadow/25 pb-0.5 transition-colors"
        >
          {t('View full collection', 'Voir la collection complète', 'عرض المجموعة الكاملة')} →
        </Link>
      </div>

      {/* Asymmetric grid */}
      <motion.div
        variants={fadeRiseStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-12 gap-6 lg:gap-8"
      >
        {rugs.slice(0, 5).map((rug, i) => (
          <div
            key={rug.slug}
            className={`${colSpans[i % colSpans.length]} ${topOffsets[i % topOffsets.length]}`}
          >
            <RugCard rug={rug} priority={i === 0} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
