import type { Metadata } from 'next'
import HomeHero from '@/components/HomeHero'
import HomeFeatured from '@/components/HomeFeatured'
import HomeOriginStrip from '@/components/HomeOriginStrip'
import Marquee from '@/components/Marquee'
import { getFeaturedRugs } from '@/data/rugs'
import { origins } from '@/data/origins'

export const metadata: Metadata = {
  title: 'CRAC — Cosy Rug Art Collection, Marrakech',
  description:
    'Your trusted destination for authentic Moroccan rugs. Discover handwoven Berber, Arabic, and Saharan carpets with expert guidance on every purchase. 16 Rue My Taïb Kssour, Medina, Marrakech.',
}

export default function HomePage() {
  const featured = getFeaturedRugs()

  return (
    <>
      <HomeHero />
      <Marquee />

      {/* Intent paragraph */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-start-2 lg:col-span-7">
            <p className="font-serif text-[1.25rem] lg:text-[1.5rem] font-light text-ink leading-[1.55] text-pretty">
              At Cosy Rug Art Collection, we are dedicated to offering an exceptional rug-buying
              experience rooted in knowledge, authenticity, and care. Our gallery presents a
              curated selection of handwoven Moroccan rugs — each one unique, each one with a
              story. We provide detailed documentation for every carpet you acquire: its origin,
              weaving tradition, materials, and cultural significance. Whether you are a first-time
              buyer or a seasoned collector, we are here to guide you at every step.
            </p>
          </div>
          <div className="col-span-12 lg:col-start-10 lg:col-span-3 flex items-end">
            <p className="label-caps text-shadow/55 leading-relaxed">
              زرابي مصنوعة يدويًا<br />
              من صوف الغنم الحيّ<br />
              وأصبغة نباتية طبيعية
            </p>
          </div>
        </div>
      </section>

      {/* Currently on view */}
      <HomeFeatured rugs={featured} />

      {/* Origins strip */}
      <HomeOriginStrip origins={origins} />

      {/* Footer prelude */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28 border-t border-ink/10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <p className="label-caps text-shadow/50 mb-3">Visit</p>
            <p className="font-serif text-[1.75rem] font-light text-ink leading-tight">
              By appointment,<br />
              <span className="italic">always.</span>
            </p>
          </div>
          <div className="col-span-12 lg:col-start-7 lg:col-span-5 flex flex-col justify-center gap-2">
            <p className="font-sans text-sm text-shadow leading-relaxed">
              16 Rue My Taïb Kssour, Bab El Ksour<br />
              Médina, Marrakech 40000, Maroc
            </p>
            <p className="font-sans text-sm text-shadow" lang="ar" dir="rtl">
              ١٦ درب موسى طيب كصور · باب القصور · المدينة القديمة
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
