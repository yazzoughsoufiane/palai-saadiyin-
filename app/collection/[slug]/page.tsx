import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { rugs, getRugBySlug } from '@/data/rugs'
import RugDetailPage from '@/components/RugDetailPage'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return rugs.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const rug = getRugBySlug(params.slug)
  if (!rug) return {}
  return {
    title: rug.title,
    description: `${rug.region} rug, ${rug.yearRange}. ${rug.materials}. ${rug.inventoryNumber}. One of one. Cosyrac, Marrakech.`,
    openGraph: {
      title: `${rug.title} — Cosyrac`,
      description: rug.curatorialNote.slice(0, 200),
    },
  }
}

export default function RugPage({ params }: Props) {
  const rug = getRugBySlug(params.slug)
  if (!rug) notFound()

  const index = rugs.findIndex((r) => r.slug === params.slug)
  const prev = index > 0 ? rugs[index - 1] : null
  const next = index < rugs.length - 1 ? rugs[index + 1] : null

  return <RugDetailPage rug={rug} prev={prev} next={next} />
}