'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

export default function VisitForm() {
  const { t } = useI18n()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 900))
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="py-16 flex flex-col items-center text-center gap-4">
        <div className="w-10 h-px bg-saffron mx-auto mb-2" />
        <h3 className="font-serif text-[1.5rem] font-light text-ink">
          {t('Thank you', 'Merci')}
        </h3>
        <p className="prose-body text-shadow max-w-[340px]">
          {t(
            'We will be in touch within 48 hours to confirm your visit or viewing.',
            'Nous vous contacterons dans les 48 heures pour confirmer votre visite.',
          )}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-name" className="label-caps text-shadow/70">
          {t('Name', 'Nom')} <span className="text-madder" aria-hidden="true">*</span>
        </label>
        <input
          id="visit-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
          placeholder={t('Your full name', 'Votre nom complet')}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-email" className="label-caps text-shadow/70">
          {t('Email', 'E-mail')} <span className="text-madder" aria-hidden="true">*</span>
        </label>
        <input
          id="visit-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {/* Preferred dates */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-dates" className="label-caps text-shadow/70">
          {t('Preferred dates', 'Dates préférées')}
        </label>
        <input
          id="visit-dates"
          name="dates"
          type="text"
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
          placeholder={t('e.g. late March, flexible', 'ex. fin mars, flexible')}
        />
      </div>

      {/* Rug reference */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-rug" className="label-caps text-shadow/70">
          {t('Rug reference (optional)', 'Référence tapis (optionnel)')}
        </label>
        <input
          id="visit-rug"
          name="rug"
          type="text"
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
          placeholder={t('Inventory № or title', 'N° d\'inventaire ou titre')}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-message" className="label-caps text-shadow/70">
          {t('Message', 'Message')}
        </label>
        <textarea
          id="visit-message"
          name="message"
          rows={4}
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors resize-none"
          placeholder={t(
            'Tell us what brings you — a particular region, technique, or a specific piece…',
            'Dites-nous ce qui vous amène — une région, une technique, ou une pièce particulière…',
          )}
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-4 border border-ink/30 font-sans text-[0.75rem] uppercase tracking-widest text-ink hover:bg-ink hover:text-bone transition-colors duration-300 disabled:opacity-50"
        >
          {status === 'sending'
            ? t('Sending…', 'Envoi…')
            : t('Send Enquiry', 'Envoyer la demande')}
        </button>
      </div>

      <p className="label-caps text-shadow/40 text-center leading-relaxed">
        {t(
          'We respond within 48 hours · No automated replies',
          'Réponse sous 48 heures · Aucune réponse automatique',
        )}
      </p>
    </form>
  )
}
