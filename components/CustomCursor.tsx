'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

type CursorState = 'default' | 'rug' | 'link'

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [isActive, setIsActive] = useState(false)
  const prefersReduced = useReducedMotion()

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const x = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const y = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    // Never hide the native cursor if reduced motion is preferred
    if (prefersReduced) return
    // Only activate on true pointer devices (not touch)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let activated = false

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      // Hide native cursor only after we have confirmed the mouse position
      if (!activated) {
        activated = true
        document.body.style.cursor = 'none'
        setIsActive(true)
      }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a[href^="/collection/"]')) setCursorState('rug')
      else if (t.closest('a, button, [role="button"]')) setCursorState('link')
      else setCursorState('default')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.body.style.cursor = ''
    }
  }, [mouseX, mouseY, prefersReduced])

  if (!isActive) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      aria-hidden="true"
    >
      {/* Expanding ring — shows on rug or link hover */}
      <motion.div
        animate={{
          width: cursorState === 'rug' ? 54 : cursorState === 'link' ? 18 : 0,
          height: cursorState === 'rug' ? 54 : cursorState === 'link' ? 18 : 0,
          opacity: cursorState === 'default' ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/30 flex items-center justify-center"
      >
        <motion.span
          animate={{ opacity: cursorState === 'rug' ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="font-sans text-[0.45rem] uppercase tracking-[0.2em] text-ink/75 select-none"
        >
          View
        </motion.span>
      </motion.div>

      {/* Dot — always visible, shifts color on rug hover */}
      <motion.div
        animate={{
          width: cursorState === 'default' ? 6 : 4,
          height: cursorState === 'default' ? 6 : 4,
          backgroundColor:
            cursorState === 'rug' ? '#C8843A' : 'rgba(26,23,21,0.8)',
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
    </motion.div>
  )
}
