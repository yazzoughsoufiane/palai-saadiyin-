import type { Metadata } from 'next'
import VisitForm from '@/components/VisitForm'

export const metadata: Metadata = {
  title: 'Visit & Enquire',
  description:
    'Visit Palais Saadiyin at 16 Rue My Taïb Kssour, Bab El Ksour, Medina, Marrakech. By appointment for private viewings. Worldwide shipping via DHL and UPS.',
}

export default function VisitPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-24">
      {/* Header */}
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 lg:col-span-7">
          <p className="label-caps text-shadow/60 mb-3">Visite & Contact</p>
          <h1 className="font-serif text-headline font-light text-ink leading-tight">
            Visit &<br />Enquire
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        {/* Left: address, hours, map */}
        <div className="col-span-12 lg:col-span-5">
          {/* Address */}
          <div className="mb-10">
            <p className="label-caps text-shadow/60 mb-4">Address</p>
            <address className="not-italic">
              <p className="font-serif text-[1.5rem] font-light text-ink leading-snug mb-2">
                Palais Saadiyin
              </p>
              <p className="font-sans text-sm text-shadow leading-relaxed mb-1">
                16 Rue My Taïb Kssour<br />
                Bab El Ksour, Médina<br />
                Marrakech 40000<br />
                Royaume du Maroc
              </p>
              <p className="font-sans text-sm text-shadow" lang="ar" dir="rtl">
                ١٦ درب موسى طيب كصور · باب القصور<br />
                المدينة القديمة · مراكش
              </p>
            </address>
          </div>

          {/* Map */}
          <div className="border border-ink/10 overflow-hidden mb-10 bg-bone-dark/40">
            <MedinalMap />
            <div className="px-4 py-3 border-t border-ink/8">
              <a
                href="https://maps.google.com/?q=16+Rue+My+Taïb+Kssour+Marrakech"
                target="_blank"
                rel="noopener noreferrer"
                className="label-caps text-shadow/60 hover:text-ink transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="mb-10">
            <p className="label-caps text-shadow/60 mb-4">Hours</p>
            <div className="font-sans text-sm text-shadow leading-relaxed space-y-2">
              <div className="flex gap-6">
                <span className="text-ink w-36">Saturday – Thursday</span>
                <span>09:00 – 19:00</span>
              </div>
              <div className="flex gap-6">
                <span className="text-ink w-36">Friday</span>
                <span>By appointment</span>
              </div>
            </div>
            <p className="mt-4 font-sans text-sm text-shadow/80 italic">
              Private viewings available outside regular hours — enquire below.
            </p>
          </div>

          {/* Languages */}
          <div className="mb-10">
            <p className="label-caps text-shadow/60 mb-4">Languages spoken</p>
            <div className="flex flex-wrap gap-3">
              {['Arabic', 'French', 'English', 'Spanish', 'Italian'].map((lang) => (
                <span key={lang} className="label-caps border border-ink/15 px-2.5 py-1">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Shipping */}
          <div>
            <p className="label-caps text-shadow/60 mb-4">Worldwide Shipping</p>
            <div className="font-sans text-sm text-shadow leading-relaxed space-y-3">
              <p className="text-ink font-medium">We ship to any country in the world.</p>
              <p>
                Every rug is carefully wrapped and shipped via{' '}
                <span className="text-ink">DHL</span>,{' '}
                <span className="text-ink">UPS</span>, or overland bus freight —
                depending on destination and rug dimensions.
              </p>
              <p>
                Mention your country in the enquiry form and we will provide
                a shipping quote within 24 hours.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {['DHL', 'UPS', 'Bus Freight'].map((carrier) => (
                <span key={carrier} className="label-caps border border-ink/15 px-2.5 py-1">
                  {carrier}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="sticky top-28">
            <p className="label-caps text-shadow/60 mb-2">Enquiry form</p>
            <h2 className="font-serif text-[1.75rem] font-light text-ink mb-8">
              Reserve a private appointment
            </h2>
            <VisitForm />
          </div>
        </div>
      </div>
    </div>
  )
}

function MedinalMap() {
  return (
    <svg
      viewBox="0 0 400 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Schematic map showing Palais Saadiyin near Bab El Ksour in the Marrakech Medina"
      className="w-full h-auto"
    >
      <rect width="400" height="280" fill="#EDE7DC" />

      {/* Street grid — simplified Medina */}
      <line x1="0" y1="140" x2="400" y2="140" stroke="#D5CCBF" strokeWidth="6" />
      <line x1="200" y1="0" x2="200" y2="280" stroke="#D5CCBF" strokeWidth="4" />
      <line x1="100" y1="0" x2="80" y2="280" stroke="#D5CCBF" strokeWidth="2" opacity="0.5" />
      <line x1="300" y1="0" x2="320" y2="280" stroke="#D5CCBF" strokeWidth="2" opacity="0.5" />
      <line x1="0" y1="80" x2="400" y2="90" stroke="#D5CCBF" strokeWidth="2" opacity="0.5" />
      <line x1="0" y1="200" x2="400" y2="190" stroke="#D5CCBF" strokeWidth="2" opacity="0.5" />
      <line x1="50" y1="0" x2="40" y2="280" stroke="#D5CCBF" strokeWidth="1" opacity="0.3" />
      <line x1="350" y1="0" x2="360" y2="280" stroke="#D5CCBF" strokeWidth="1" opacity="0.3" />

      {/* Bab El Ksour — gate */}
      <rect x="90" y="130" width="20" height="20" rx="10" fill="#2E3B4E" opacity="0.3" />
      <text x="116" y="144" fontFamily="Georgia, serif" fontSize="9" fill="#2E3B4E" opacity="0.6">
        Bab El Ksour
      </text>

      {/* Rue My Taïb Kssour */}
      <line x1="110" y1="140" x2="210" y2="145" stroke="#8B3A2E" strokeWidth="2" opacity="0.6" />
      <text x="135" y="132" fontFamily="Georgia, serif" fontSize="8" fill="#8B3A2E" opacity="0.7">
        Rue My Taïb Kssour
      </text>

      {/* Palais Saadiyin marker */}
      <circle cx="195" cy="143" r="6" fill="#C8843A" />
      <circle cx="195" cy="143" r="12" fill="#C8843A" opacity="0.2" />
      <text x="210" y="135" fontFamily="Georgia, serif" fontSize="10" fill="#1A1715" fontWeight="400">
        Palais
      </text>
      <text x="210" y="148" fontFamily="Georgia, serif" fontSize="10" fill="#1A1715" fontWeight="400">
        Saadiyin
      </text>

      {/* Jemaa el-Fna reference */}
      <rect x="180" y="55" width="40" height="25" rx="2" fill="#6B5D4F" opacity="0.12" />
      <text x="200" y="71" fontFamily="Georgia, serif" fontSize="8" fill="#6B5D4F" opacity="0.7" textAnchor="middle">
        Jemaa
      </text>
      <text x="200" y="81" fontFamily="Georgia, serif" fontSize="8" fill="#6B5D4F" opacity="0.7" textAnchor="middle">
        el-Fna
      </text>

      {/* Compass */}
      <g transform="translate(360, 30)">
        <circle cx="0" cy="0" r="12" fill="none" stroke="#6B5D4F" strokeWidth="0.5" opacity="0.4" />
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#6B5D4F" strokeWidth="0.75" opacity="0.4" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#6B5D4F" strokeWidth="0.75" opacity="0.4" />
        <text x="0" y="-14" fontFamily="Georgia, serif" fontSize="7" fill="#6B5D4F" opacity="0.5" textAnchor="middle">N</text>
      </g>
    </svg>
  )
}
