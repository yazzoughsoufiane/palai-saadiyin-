import type { Region } from '@/data/rugs'
import Link from 'next/link'

interface RegionTagProps {
  region: Region
  linked?: boolean
  className?: string
}

export default function RegionTag({ region, linked = false, className = '' }: RegionTagProps) {
  const base = `label-caps text-shadow/65 border-b border-shadow/25 pb-0.5 hover:text-ink hover:border-ink/40 transition-colors duration-200 ${className}`

  if (linked) {
    return (
      <Link
        href={`/collection?region=${encodeURIComponent(region)}`}
        className={base}
        aria-label={`View all ${region} rugs`}
      >
        {region}
      </Link>
    )
  }

  return <span className={base}>{region}</span>
}
