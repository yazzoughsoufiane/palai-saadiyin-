'use client'

import { useCallback, useMemo, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { SlidersHorizontal, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Rug, Region, Technique, Era } from '@/data/rugs'
import { ALL_REGIONS } from '@/data/rugs'
import RugCard from './RugCard'
import { useI18n } from '@/lib/i18n'
import clsx from 'clsx'

interface CollectionGalleryProps {
  rugs: Rug[]
}

type Filter = {
  region?: Region
  technique?: Technique
  era?: Era
}

export default function CollectionGallery({ rugs }: CollectionGalleryProps) {
  const { t } = useI18n()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(false)

  const activeFilters: Filter = useMemo(() => ({
    region: (searchParams.get('region') as Region) || undefined,
    technique: (searchParams.get('technique') as Technique) || undefined,
    era: (searchParams.get('era') as Era) || undefined,
  }), [searchParams])

  const setFilter = useCallback((key: keyof Filter, value: string | undefined) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }, [searchParams, router, pathname])

  const clearAll = () => {
    router.push(pathname, { scroll: false })
  }

  const filtered = useMemo(() => {
    return rugs.filter((r) => {
      if (activeFilters.region && r.region !== activeFilters.region) return false
      if (activeFilters.technique && r.technique !== activeFilters.technique) return false
      if (activeFilters.era && r.era !== activeFilters.era) return false
      return true
    })
  }, [rugs, activeFilters])

  const hasFilters = Object.values(activeFilters).some(Boolean)

  const techniques: Array<{ value: Technique; en: string; fr: string }> = [
    { value: 'knotted', en: 'Hand-knotted', fr: 'Noué main' },
    { value: 'flatweave', en: 'Flatweave / Kilim', fr: 'Tissage plat' },
    { value: 'rag', en: 'Boucherouite', fr: 'Boucherouite' },
  ]

  const eras: Array<{ value: Era; en: string; fr: string }> = [
    { value: 'vintage', en: 'Vintage', fr: 'Vintage' },
    { value: 'contemporary', en: 'Contemporary', fr: 'Contemporain' },
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
      {/* Filter trigger row */}
      <div className="flex items-center justify-between border-t border-ink/10 py-4 mb-8">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Active filter tags */}
          {hasFilters && (
            <>
              {activeFilters.region && (
                <FilterTag label={activeFilters.region} onRemove={() => setFilter('region', undefined)} />
              )}
              {activeFilters.technique && (
                <FilterTag label={activeFilters.technique} onRemove={() => setFilter('technique', undefined)} />
              )}
              {activeFilters.era && (
                <FilterTag label={activeFilters.era} onRemove={() => setFilter('era', undefined)} />
              )}
              <button
                onClick={clearAll}
                className="label-caps text-shadow/50 hover:text-madder transition-colors"
              >
                {t('Clear all', 'Tout effacer')}
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="label-caps text-shadow/50">
            {filtered.length} {t('works', 'œuvres')}
          </span>
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="flex items-center gap-2 label-caps text-shadow/70 hover:text-ink transition-colors"
            aria-expanded={filterOpen}
            aria-controls="filter-panel"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            {t('Filter', 'Filtrer')}
          </button>
        </div>
      </div>

      <div className="flex gap-8 lg:gap-12 items-start">
        {/* Filter panel — left rail */}
        <AnimatePresence>
          {filterOpen && (
            <motion.aside
              id="filter-panel"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-52 shrink-0 sticky top-24"
              aria-label="Collection filters"
            >
              <div className="space-y-8">
                {/* Region */}
                <FilterGroup
                  label={t('Region', 'Région')}
                  items={ALL_REGIONS.map((r) => ({ value: r, label: r }))}
                  active={activeFilters.region}
                  onSelect={(v) => setFilter('region', v === activeFilters.region ? undefined : v)}
                />

                {/* Technique */}
                <FilterGroup
                  label={t('Technique', 'Technique')}
                  items={techniques.map((tc) => ({ value: tc.value, label: t(tc.en, tc.fr) }))}
                  active={activeFilters.technique}
                  onSelect={(v) => setFilter('technique', v === activeFilters.technique ? undefined : v as Technique)}
                />

                {/* Era */}
                <FilterGroup
                  label={t('Era', 'Ère')}
                  items={eras.map((e) => ({ value: e.value, label: t(e.en, e.fr) }))}
                  active={activeFilters.era}
                  onSelect={(v) => setFilter('era', v === activeFilters.era ? undefined : v as Era)}
                />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-[1.25rem] font-light text-shadow">
                {t('No works match these filters.', 'Aucune œuvre ne correspond à ces filtres.')}
              </p>
              <button onClick={clearAll} className="mt-4 label-caps border-b border-shadow/30 pb-0.5 hover:text-ink transition-colors">
                {t('Clear filters', 'Effacer les filtres')}
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFilters.region ?? ''}-${activeFilters.technique ?? ''}-${activeFilters.era ?? ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                role="group"
                aria-label={t('Rug gallery — use arrow keys to navigate', 'Galerie de tapis — utilisez les touches fléchées pour naviguer')}
                className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8"
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return
                  const cards = Array.from(
                    e.currentTarget.querySelectorAll<HTMLAnchorElement>('a[href^="/collection/"]')
                  )
                  const idx = cards.indexOf(document.activeElement as HTMLAnchorElement)
                  if (idx === -1) return
                  e.preventDefault()
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    cards[Math.min(idx + 1, cards.length - 1)]?.focus()
                  } else {
                    cards[Math.max(idx - 1, 0)]?.focus()
                  }
                }}
              >
                {filtered.map((rug, i) => (
                  <div key={rug.slug} className="break-inside-avoid">
                    <RugCard rug={rug} priority={i < 3} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  )
}

function FilterTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="flex items-center gap-1.5 label-caps border-b border-ink/25 pb-0.5 text-ink">
      {label}
      <button onClick={onRemove} aria-label={`Remove ${label} filter`}>
        <X size={10} strokeWidth={2} />
      </button>
    </span>
  )
}

function FilterGroup({
  label,
  items,
  active,
  onSelect,
}: {
  label: string
  items: Array<{ value: string; label: string }>
  active?: string
  onSelect: (value: string) => void
}) {
  return (
    <div>
      <p className="label-caps text-shadow/60 mb-3">{label}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.value}>
            <button
              onClick={() => onSelect(item.value)}
              className={clsx(
                'label-caps text-left transition-colors duration-150',
                active === item.value
                  ? 'text-ink border-b border-ink pb-0.5'
                  : 'text-shadow/60 hover:text-shadow',
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
