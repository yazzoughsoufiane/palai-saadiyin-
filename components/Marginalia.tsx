import { ReactNode } from 'react'
import clsx from 'clsx'

interface MarginaliaProps {
  children: ReactNode
  side?: 'left' | 'right'
  className?: string
}

export default function Marginalia({ children, side = 'right', className = '' }: MarginaliaProps) {
  return (
    <aside
      className={clsx(
        'font-sans text-[0.8125rem] text-shadow/65 leading-relaxed',
        side === 'left' ? 'text-right' : 'text-left',
        className,
      )}
      aria-label="Marginal note"
    >
      {children}
    </aside>
  )
}
