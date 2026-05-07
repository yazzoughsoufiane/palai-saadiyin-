'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import type { JournalEntry } from '@/data/journal'
import Marginalia from './Marginalia'
import ScrollProgress from './ScrollProgress'

interface JournalArticleProps {
  entry: JournalEntry
  prev: JournalEntry | null
  next: JournalEntry | null
}

export default function JournalArticle({ entry, prev, next }: JournalArticleProps) {
  const { locale, t } = useI18n()

  const title = locale === 'fr' ? entry.titleFr : entry.title
  const subtitle = locale === 'fr' ? (entry.subtitleFr ?? entry.subtitle) : entry.subtitle
  const body = locale === 'fr' ? entry.bodyFr : entry.body
  const paragraphs = body.split('\n\n').filter(Boolean)

  const dateStr = new Date(entry.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const prevTitle = prev ? (locale === 'fr' ? prev.titleFr : prev.title) : null
  const nextTitle = next ? (locale === 'fr' ? next.titleFr : next.title) : null

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-24">
      <ScrollProgress />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-12">
        <ol className="flex items-center gap-2">
          <li>
            <Link
              href="/journal"
              className="label-caps text-shadow/55 hover:text-ink transition-colors"
            >
              Journal
            </Link>
          </li>
          <li aria-hidden="true" className="label-caps text-shadow/30">·</li>
          <li>
            <span className="label-caps text-ink/70">{title}</span>
          </li>
        </ol>
      </nav>

      {/* Article */}
      <article className="grid grid-cols-12 gap-6">
        {/* Header */}
        <header className="col-span-12 lg:col-span-8 lg:col-start-3 mb-10">
          <p className="label-caps text-shadow/50 mb-5">
            {dateStr} · {entry.readingTime} {t('min read', 'min de lecture')}
          </p>
          <h1 className="font-serif text-headline font-light text-ink leading-tight mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="font-serif text-[1.25rem] font-light text-shadow/75 italic">
              {subtitle}
            </p>
          )}
          <div className="mt-8 w-12 h-px bg-saffron" />
        </header>

        {/* Body */}
        <div
          className="col-span-12 lg:col-span-7 lg:col-start-3 space-y-6"
          role="main"
          aria-label={t('Article body', "Corps de l'article")}
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`font-sans leading-[1.75] text-pretty text-ink/85 ${
                i === 0 ? 'text-[1.125rem]' : 'text-[1.0625rem]'
              }`}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Margin note */}
        <aside
          className="col-span-12 lg:col-span-2 lg:col-start-11 mt-0 lg:mt-32"
          aria-label={t('Reading context', 'Contexte de lecture')}
        >
          <div className="sticky top-28">
            <Marginalia>
              <p className="label-caps text-shadow/50 mb-2">
                {t('From the archive', "De l'archive")}
              </p>
              <p className="text-xs text-shadow/55 leading-relaxed">
                Palais Saadiyin<br />
                Marrakech, Médina<br />
                16 Rue My Taïb Kssour
              </p>
            </Marginalia>
          </div>
        </aside>
      </article>

      {/* Prev / Next */}
      <nav
        aria-label={t('Journal navigation', 'Navigation du journal')}
        className="mt-20 pt-10 border-t border-ink/10 flex items-center justify-between"
      >
        {prev ? (
          <Link href={`/journal/${prev.slug}`} className="group flex flex-col gap-1">
            <span className="label-caps text-shadow/50 group-hover:text-shadow transition-colors">
              ← {t('Previous', 'Précédent')}
            </span>
            <span className="font-serif text-[1rem] font-light text-ink group-hover:text-shadow transition-colors">
              {prevTitle}
            </span>
          </Link>
        ) : <div />}

        {next ? (
          <Link href={`/journal/${next.slug}`} className="group flex flex-col gap-1 text-right">
            <span className="label-caps text-shadow/50 group-hover:text-shadow transition-colors">
              {t('Next', 'Suivant')} →
            </span>
            <span className="font-serif text-[1rem] font-light text-ink group-hover:text-shadow transition-colors">
              {nextTitle}
            </span>
          </Link>
        ) : <div />}
      </nav>
    </div>
  )
}
