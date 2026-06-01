import type { Rug } from '@/data/rugs'

interface MuseumLabelProps {
  rug: Rug
  locale?: 'en' | 'fr' | 'ar'
}

const techniqueLabel: Record<string, { en: string; fr: string }> = {
  knotted: { en: 'Hand-knotted pile', fr: 'Poil noué main' },
  flatweave: { en: 'Flatweave / Kilim', fr: 'Tissage plat / Kilim' },
  rag: { en: 'Rag-woven / Boucherouite', fr: 'Tissage de chiffon / Boucherouite' },
}

const eraLabel: Record<string, { en: string; fr: string }> = {
  contemporary: { en: 'Contemporary', fr: 'Contemporain' },
}

export default function MuseumLabel({ rug, locale = 'en' }: MuseumLabelProps) {
  const title = locale === 'fr' ? rug.titleFr : rug.title
  const technique = techniqueLabel[rug.technique]?.[locale === 'fr' ? 'fr' : 'en'] ?? rug.technique
  const era = eraLabel[rug.era]?.[locale === 'fr' ? 'fr' : 'en'] ?? rug.era

  const rows: Array<{ label: string; value: string }> = [
    {
      label: locale === 'fr' ? 'Région' : 'Region',
      value: rug.tribe ? `${rug.region} — ${rug.tribe}` : rug.region,
    },
    {
      label: locale === 'fr' ? 'Datation' : 'Date',
      value: rug.yearRange,
    },
    {
      label: locale === 'fr' ? 'Technique' : 'Technique',
      value: technique,
    },
    {
      label: locale === 'fr' ? 'Ère' : 'Era',
      value: era,
    },
    {
      label: locale === 'fr' ? 'Matériaux' : 'Materials',
      value: rug.materials,
    },
    {
      label: locale === 'fr' ? 'Dimensions' : 'Dimensions',
      value: `${rug.dimensions.w} × ${rug.dimensions.h} ${rug.dimensions.unit}`,
    },
    ...(rug.weaverNote
      ? [{
          label: locale === 'fr' ? 'Note de tisserand' : 'Weaver note',
          value: rug.weaverNote,
        }]
      : []),
    {
      label: locale === 'fr' ? 'Inventaire №' : 'Inventory №',
      value: rug.inventoryNumber,
    },
  ]

  return (
    <div className="museum-label" aria-label={`Artwork details for ${title}`}>
      {/* Title */}
      <h1 className="font-serif text-title font-light text-ink mb-1 text-pretty">
        {title}
      </h1>

      {/* Subtitle / region line */}
      <p className="label-caps text-shadow/70 mb-6">
        {rug.region}{rug.tribe ? ` · ${rug.tribe}` : ''} · {rug.yearRange}
      </p>

      {/* Hairline */}
      <div className="border-t border-ink/12 mb-6" />

      {/* Spec rows */}
      <dl className="space-y-0">
        {rows.map((row) => (
          <div key={row.label} className="flex gap-4 py-2 border-b border-ink/8 last:border-0">
            <dt className="label-caps text-shadow/55 w-28 shrink-0 pt-px">{row.label}</dt>
            <dd className="font-sans text-[0.875rem] text-ink/90 leading-relaxed">{row.value}</dd>
          </div>
        ))}
      </dl>

      {/* Motifs */}
      {rug.motifs.length > 0 && (
        <div className="mt-5 pt-4 border-t border-ink/12">
          <dt className="label-caps text-shadow/55 mb-2">
            {locale === 'fr' ? 'Motifs' : 'Motifs'}
          </dt>
          <dd className="flex flex-wrap gap-x-3 gap-y-1">
            {rug.motifs.map((m) => (
              <span key={m} className="font-sans text-[0.8125rem] text-ink/70 italic">{m}</span>
            ))}
          </dd>
        </div>
      )}
    </div>
  )
}
