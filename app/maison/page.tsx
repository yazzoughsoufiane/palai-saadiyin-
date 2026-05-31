import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MaisonValues from '@/components/MaisonValues'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'La Maison',
  description:
    'The story of Cosyrac — a Marrakech rug house working with Palais Saadien, a former palace near Bab Laksour in the ancient Medina.',
}

export default function MaisonPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-24">
      {/* Header */}
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 lg:col-span-8">
          <p className="label-caps text-shadow/60 mb-3">La Maison · The House</p>
          <h1 className="font-serif text-headline font-light text-ink leading-tight">
            Cosyrac
          </h1>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div className="relative h-[50vw] min-h-[300px] max-h-[600px] overflow-hidden mb-20 bg-bone-dark">
        <Image
          src={`${BASE}/rugs/ps-hero-primary.jpg`}
          alt="Interior of Cosyrac — stacked folded rugs against raw plaster walls."
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent" />
      </div>

      {/* Story */}
      <div className="grid grid-cols-12 gap-6 mb-20">
        <div className="col-span-12 lg:col-span-7 lg:col-start-2">
          <h2 className="font-serif text-[2rem] font-light text-ink mb-8">
            A house near Bab Laksour
          </h2>

          <div className="prose-body space-y-5 text-pretty">
            <p>
              Cosyrac works with Palais Saadien, a former palace in the heart of the ancient
              Medina of Marrakech, a few steps from Bab El Ksour — one of the oldest gates of the
              imperial city. The building dates to the Saadian period; its courtyard, with its cedar
              columns and carved stucco, has served many purposes over the centuries. Today it is a
              house of carpets.
            </p>
            <p>
              Cosyrac has worked with Palais Saadien for decades, drawing on a collection that spans
              every major Moroccan weaving tradition — from the undyed ivory Beni Ourain of the
              northeastern Atlas to the saturated cardinal reds of Boujad, from the Azilal plateau&apos;s
              diary-like improvisation to the elemental rush mats of the Tuareg south. The guiding
              principle is simple: every piece must be one of one, vegetable-dyed, reversible, and
              worthy of the name artwork.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="col-span-12 lg:col-start-9 lg:col-span-4">
          <blockquote className="border-l-2 border-saffron pl-5 mt-8 lg:mt-0">
            <p className="font-serif text-[1.25rem] font-light text-ink leading-snug italic text-pretty">
              &ldquo;The carpet is a woman&apos;s storytelling canvas. Every knot is a word;
              every row, a sentence. When you learn to read this language, you hear a voice
              that has been speaking for centuries.&rdquo;
            </p>
            <footer className="mt-4">
              <cite className="label-caps text-shadow/70 not-italic">
                Palais Saadien<br />
                Marrakech
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>

      <MaisonValues />

      {/* Atelier image grid */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 lg:col-span-5">
          <div className="relative aspect-[4/5] bg-bone-dark overflow-hidden">
            <Image
              src="/rugs/ps-2024-009-primary.svg"
              alt="Detail of a hand-knotted pile — the knots visible at the selvage edge."
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-start-7 lg:col-span-6 flex flex-col gap-4">
          <div className="relative aspect-video bg-bone-dark overflow-hidden">
            <Image
              src="/rugs/ps-2024-012-primary.svg"
              alt="Stacks of folded Boujad rugs in the Cosyrac storeroom."
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-video bg-bone-dark overflow-hidden">
            <Image
              src="/rugs/ps-2024-007-primary.svg"
              alt="A Zemour kilim hung against the carved plaster arcade of the palais."
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-ink/10 pt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div>
          <p className="font-serif text-[1.375rem] font-light text-ink">
            Visit the house. See the rugs in the light they were made for.
          </p>
          <p className="label-caps text-shadow/55 mt-1">By appointment, always.</p>
        </div>
        <Link
          href="/visit"
          className="shrink-0 px-6 py-3 border border-ink/30 font-sans text-[0.75rem] uppercase tracking-widest text-ink hover:bg-ink hover:text-bone transition-colors duration-300"
        >
          Plan a visit
        </Link>
      </div>
    </div>
  )
}
