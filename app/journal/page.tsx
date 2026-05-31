import type { Metadata } from 'next'
import { journal } from '@/data/journal'
import JournalList from '@/components/JournalList'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Essays from Cosyrac — on Berber visual language, the reversible carpet, vegetable dyes of the Atlas, and the art of weaving.',
}

export default function JournalPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-24">
      {/* Header */}
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 lg:col-span-7">
          <p className="label-caps text-shadow/60 mb-3">Le Journal</p>
          <h1 className="font-serif text-headline font-light text-ink leading-tight">
            Journal
          </h1>
        </div>
      </div>

      <JournalList entries={journal} />
    </div>
  )
}
