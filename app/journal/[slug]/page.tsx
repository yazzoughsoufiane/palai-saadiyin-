import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { journal } from '@/data/journal'
import JournalArticle from '@/components/JournalArticle'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return journal.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = journal.find((e) => e.slug === params.slug)
  if (!entry) return {}
  return {
    title: entry.title,
    description: entry.subtitle ?? entry.body.slice(0, 160),
  }
}

export default function JournalEntryPage({ params }: Props) {
  const entry = journal.find((e) => e.slug === params.slug)
  if (!entry) notFound()

  const index = journal.findIndex((e) => e.slug === params.slug)
  const prev = index > 0 ? journal[index - 1] : null
  const next = index < journal.length - 1 ? journal[index + 1] : null

  return <JournalArticle entry={entry} prev={prev} next={next} />
}
