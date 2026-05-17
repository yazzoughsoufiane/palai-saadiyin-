'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : 130])

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] max-h-[1080px] overflow-hidden"
      aria-label="Hero — Palais Saadiyin"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110 will-change-transform"
        aria-hidden="true"
      >
        <Image
          src="/rugs/ps-hero-primary.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/25 to-ink/65" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-end pb-16 lg:pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">

        {/* Tagline — slides up from clip */}
        <div className="overflow-hidden mb-5">
          <motion.p
            initial={{ y: '115%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="label-caps text-bone/65 tracking-[0.18em]"
          >
            Maison de tapis · Marrakech · depuis les origines
          </motion.p>
        </div>

        {/* Title — each word on its own clipped line */}
        <h1 className="font-serif font-light text-bone text-display leading-[0.92] tracking-tight">
          {['Palais', 'Saadiyin'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: '108%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + i * 0.18,
                }}
                className="block"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="label-caps text-bone/35 tracking-[0.2em]">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-bone/35 to-transparent animate-scroll-indicator" />
        </motion.div>
      </div>
    </section>
  )
}
