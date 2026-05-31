'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import type { Rug } from '@/data/rugs'
import RegionTag from './RegionTag'
import { fadeRise } from '@/lib/motion'

interface RugCardProps {
  rug: Rug
  priority?: boolean
  className?: string
}

export default function RugCard({ rug, priority = false, className = '' }: RugCardProps) {
  const { locale } = useI18n()
  const cardRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.06)
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.06)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const title = locale === 'fr' ? rug.titleFr : rug.title
  const aspectRatio = rug.dimensions.h / rug.dimensions.w

  return (
    <motion.div
      ref={cardRef}
      variants={fadeRise}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`group relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/collection/${rug.slug}`}
        className="block focus-visible:outline-none"
        aria-label={`View ${title} — ${rug.region}, ${rug.inventoryNumber}`}
      >
        {/* Image wrapper */}
        <motion.div
          className="relative overflow-hidden bg-bone-dark"
          style={{
            x: springX,
            y: springY,
            aspectRatio: `${rug.dimensions.w} / ${rug.dimensions.h}`,
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${rug.images.primary}`}
            alt={`${title}. ${rug.region} rug, ${rug.yearRange}. ${rug.dimensions.w} × ${rug.dimensions.h} cm.`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0U4RTBEMyIvPjwvc3ZnPg=="
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-700" />
        </motion.div>

        {/* Caption — floats in margin-like position */}
        <div className="mt-3 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-serif text-[1.0625rem] font-light text-ink leading-tight truncate">
              {title}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <RegionTag region={rug.region} />
              <span className="text-shadow/40 text-[0.625rem]">·</span>
              <span className="label-caps text-shadow/60">{rug.yearRange}</span>
            </div>
          </div>
          <span className="label-caps text-shadow/40 shrink-0 pt-0.5">{rug.inventoryNumber}</span>
        </div>
      </Link>
    </motion.div>
  )
}
