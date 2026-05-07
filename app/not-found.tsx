import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Not Found',
}

export default function NotFound() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-40 pb-32">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 lg:col-start-2">
          <p className="label-caps text-shadow/40 mb-6 tracking-widest">404</p>
          <h1 className="font-serif text-headline font-light text-ink leading-tight mb-8">
            This piece is not<br />
            <span className="italic">in our collection.</span>
          </h1>
          <p className="prose-body mb-10 max-w-prose text-pretty">
            The page you are looking for may have been moved, or the inventory reference
            may have changed. Return to the collection to browse all available works.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/collection"
              className="px-6 py-3 border border-ink/30 font-sans text-[0.75rem] uppercase tracking-widest text-ink hover:bg-ink hover:text-bone transition-colors duration-300"
            >
              Browse the collection
            </Link>
            <Link
              href="/"
              className="px-6 py-3 font-sans text-[0.75rem] uppercase tracking-widest text-shadow/60 hover:text-ink transition-colors duration-300"
            >
              Return home
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-start-10 lg:col-span-3 flex items-end pb-4">
          <p className="label-caps text-shadow/35 leading-relaxed">
            Palais Saadiyin<br />
            16 Rue My Taïb Kssour<br />
            Marrakech, Médina
          </p>
        </div>
      </div>
    </div>
  )
}
