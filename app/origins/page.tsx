import type { Metadata } from 'next'
import { origins } from '@/data/origins'
import OriginsContent from '@/components/OriginsContent'

export const metadata: Metadata = {
  title: 'Origins',
  description:
    "A map of the weaving regions Cosyrac sources from — Boujad, Azilal, Beni Ourain, Beni M'Guild, Taznakht, Mrirt, Zemour, High Atlas, Middle Atlas, Sahara, Rabat.",
}

export default function OriginsPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-24">
      {/* Header */}
      <div className="grid grid-cols-12 gap-6 mb-20">
        <div className="col-span-12 lg:col-span-7">
          <p className="label-caps text-shadow/60 mb-3">Les Origines</p>
          <h1 className="font-serif text-headline font-light text-ink leading-tight mb-6">
            The Weaving<br />Regions
          </h1>
          <p className="prose-body max-w-prose text-pretty">
            Morocco&apos;s textile traditions are not monolithic. Each region produces a distinct visual grammar,
            shaped by landscape, tribe, available dyes, and ceremony. What follows is a guide to the eleven regions
            from which Cosyrac sources its collection.
          </p>
        </div>
        <div className="col-span-12 lg:col-start-9 lg:col-span-4 flex items-end">
          <p className="label-caps text-shadow/45 leading-relaxed">
            من البحر الأبيض المتوسط<br />
            إلى الصحراء الكبرى
          </p>
        </div>
      </div>

      {/* Schematic map — SVG placeholder */}
      <div className="mb-20 border border-ink/8 bg-bone-dark/30 rounded-sm overflow-hidden">
        <MoroccoSchematic />
      </div>

      {/* Origin entries — client component for locale-aware rendering */}
      <OriginsContent origins={origins} />
    </div>
  )
}

function MoroccoSchematic() {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Schematic map of Morocco's weaving regions"
      className="w-full h-auto max-h-[400px]"
    >
      {/* Background */}
      <rect width="800" height="500" fill="#F4EFE7" />

      {/* Morocco outline — simplified */}
      <path
        d="M 120 60 L 280 40 L 420 50 L 520 80 L 580 140 L 600 220 L 560 320 L 480 420 L 380 460 L 240 470 L 140 420 L 80 340 L 60 240 L 80 140 Z"
        stroke="#6B5D4F"
        strokeWidth="1.5"
        fill="#EDE7DC"
        opacity="0.6"
      />

      {/* Atlas mountain range — rough line */}
      <path
        d="M 180 200 Q 300 160 420 180 Q 500 195 560 240"
        stroke="#8B3A2E"
        strokeWidth="1"
        strokeDasharray="4 3"
        opacity="0.5"
      />
      <text x="300" y="152" fontFamily="Georgia, serif" fontSize="9" fill="#8B3A2E" opacity="0.5" textAnchor="middle">
        High Atlas
      </text>

      {/* Region dots */}
      {[
        { x: 260, y: 200, label: 'Boujad', id: 'boujad' },
        { x: 320, y: 230, label: 'Azilal', id: 'azilal' },
        { x: 370, y: 180, label: "Beni M'Guild", id: 'beni-mguild' },
        { x: 430, y: 175, label: 'Mrirt', id: 'mrirt' },
        { x: 310, y: 175, label: 'Zemour', id: 'zemour' },
        { x: 450, y: 200, label: 'Beni Ourain', id: 'beni-ourain' },
        { x: 380, y: 270, label: 'High Atlas', id: 'high-atlas' },
        { x: 440, y: 310, label: 'Taznakht', id: 'taznakht' },
        { x: 300, y: 380, label: 'Sahara', id: 'sahara' },
        { x: 360, y: 230, label: 'Middle Atlas', id: 'middle-atlas' },
        { x: 215, y: 150, label: 'Rabat', id: 'rabat' },
      ].map((region) => (
        <g key={region.id}>
          <a href={`#${region.id}`}>
            <circle cx={region.x} cy={region.y} r="5" fill="#C8843A" opacity="0.7" />
            <circle cx={region.x} cy={region.y} r="10" fill="#C8843A" opacity="0.15" />
            <text
              x={region.x + 12}
              y={region.y + 4}
              fontFamily="Georgia, serif"
              fontSize="9"
              fill="#1A1715"
              opacity="0.75"
            >
              {region.label}
            </text>
          </a>
        </g>
      ))}

      {/* Atlantic Ocean label */}
      <text x="60" y="300" fontFamily="Georgia, serif" fontSize="9" fill="#2E3B4E" opacity="0.4" transform="rotate(-90, 60, 300)">
        Atlantic
      </text>

      {/* Marrakech star */}
      <g>
        <rect x="346" y="256" width="6" height="6" transform="rotate(45 349 259)" fill="#1A1715" opacity="0.4" />
        <text x="358" y="263" fontFamily="Georgia, serif" fontSize="8" fill="#1A1715" opacity="0.5">Marrakech</text>
      </g>

      {/* Legend */}
      <g>
        <circle cx="640" cy="40" r="4" fill="#C8843A" opacity="0.7" />
        <text x="650" y="44" fontFamily="Georgia, serif" fontSize="9" fill="#6B5D4F">Weaving region</text>
        <line x1="630" y1="58" x2="660" y2="58" stroke="#8B3A2E" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        <text x="665" y="62" fontFamily="Georgia, serif" fontSize="9" fill="#6B5D4F">Atlas range</text>
      </g>
    </svg>
  )
}
