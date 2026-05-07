'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import type { JournalEntry } from '@/data/journal'

interface JournalListProps {
  entries: JournalEntry[]
}

export default function JournalList({ entries }: JournalListProps) {
  const { locale, t } = useI18n()

  return (
    <div className="space-y-0">
      {entries.map((entry, i) => {
        const title = locale === 'fr' ? entry.titleFr : entry.title
        const subtitle = locale === 'fr' ? (entry.subtitleFr ?? entry.subtitle) : entry.subtitle
        const body = locale === 'fr' ? entry.bodyFr : entry.body

        const dateStr = new Date(entry.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })

        return (
          <Link
            key={entry.slug}
            href={`/journal/${entry.slug}`}
            className="group block py-10 border-t border-ink/10 hover:bg-bone-dark/30 -mx-6 px-6 lg:-mx-12 lg:px-12 transition-colors duration-300"
          >
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-1 hidden lg:block">
                <span className="label-caps text-shadow/30 group-hover:text-shadow transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-2">
                <p className="label-caps text-shadow/50 mb-3">
                  {dateStr}
                  {' · '}
                  {entry.readingTime} {t('min read', 'min de lecture')}
                </p>
                <h2 className="font-serif text-[1.75rem] lg:text-[2rem] font-light text-ink leading-tight group-hover:text-shadow transition-colors">
                  {title}
                </h2>
                {subtitle && (
                  <p className="font-serif text-[1rem] font-light text-shadow/70 italic mt-1">
                    {subtitle}
                  </p>
                )}
                <p className="prose-body mt-4 text-pretty line-clamp-3">
                  {body.slice(0, 280)}…
                </p>
              </div>
              <div className="col-span-12 lg:col-start-10 lg:col-span-3 flex items-center lg:justify-end">
                <span className="label-caps border-b border-shadow/30 pb-0.5 group-hover:text-ink group-hover:border-ink transition-colors text-shadow/60">
                  {t('Read', 'Lire')} →
                </span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
