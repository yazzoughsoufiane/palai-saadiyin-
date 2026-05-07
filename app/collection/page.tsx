import type { Metadata } from 'next'
import { Suspense } from 'react'
import CollectionGallery from '@/components/CollectionGallery'
import { rugs } from '@/data/rugs'

export const metadata: Metadata = {
  title: 'Collection',
  description:
    'Browse the Palais Saadiyin collection of Moroccan rugs — Berber, kilim, Boucherouite, and Tuareg. Filter by region, technique, and era.',
}

export default function CollectionPage() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <p className="label-caps text-shadow/60 mb-3">La Collection</p>
            <h1 className="font-serif text-headline font-light text-ink leading-tight">
              The Collection
            </h1>
          </div>
          <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex items-end pb-2">
            <p className="font-sans text-sm text-shadow leading-relaxed">
              {rugs.length} works · All one of one<br />
              Vegetable-dyed · Reversible
            </p>
          </div>
        </div>
      </div>

      <Suspense fallback={
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
          <div className="border-t border-ink/10 py-4 mb-8" />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8 opacity-50 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="bg-bone-dark aspect-[2/3] w-full" />
                <div className="mt-3 h-4 bg-bone-dark rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      }>
        <CollectionGallery rugs={rugs} />
      </Suspense>
    </>
  )
}
