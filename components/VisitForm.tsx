'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import emailjs from '@emailjs/browser'

const PUBLIC_KEY  = 'ifObhtmllyV-ckei9'
const SERVICE_ID  = 'service_hzi0ico'
const TEMPLATE_ID = 'template_u6s7mgy'

export default function VisitForm() {
  const { t } = useI18n()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="py-16 flex flex-col items-center text-center gap-4">
        <div className="w-10 h-px bg-saffron mx-auto mb-2" />
        <h3 className="font-serif text-[1.5rem] font-light text-ink">
          {t('Thank you', 'Merci')}
        </h3>
        <p className="prose-body text-shadow max-w-[340px]">
          {t('We will be in touch within 48 hours.', 'Nous vous contacterons dans les 48 heures.')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-name" className="label-caps text-shadow/70">
          {t('Name', 'Nom')} <span className="text-madder">*</span>
        </label>
        <input id="visit-name" name="from_name" type="text" required autoComplete="name"
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
          placeholder={t('Your full name', 'Votre nom complet')} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-email" className="label-caps text-shadow/70">
          {t('Email', 'E-mail')} <span className="text-madder">*</span>
        </label>
        <input id="visit-email" name="from_email" type="email" required autoComplete="email"
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
          placeholder="your@email.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-dates" className="label-caps text-shadow/70">
          {t('Preferred dates', 'Dates preferees')}
        </label>
        <input id="visit-dates" name="dates" type="text"
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
          placeholder={t('e.g. late March, flexible', 'ex. fin mars, flexible')} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-rug" className="label-caps text-shadow/70">
          {t('Rug reference (optional)', 'Reference tapis (optionnel)')}
        </label>
        <input id="visit-rug" name="rug_ref" type="text"
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
          placeholder={t('Inventory number or title', 'Numero inventaire ou titre')} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="visit-message" className="label-caps text-shadow/70">
          {t('Message', 'Message')}
        </label>
        <textarea id="visit-message" name="message" rows={4}
          className="bg-transparent border-b border-ink/25 py-2.5 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors resize-none"
          placeholder={t('Tell us what brings you...', 'Dites-nous ce qui vous amene...')} />
      </div>

      {status === 'error' && (
        <p className="text-madder text-sm text-center">
          {t('Something went wrong. Please try again.', 'Une erreur est survenue.')}
        </p>
      )}

      <div className="pt-2">
        <button type="submit" disabled={status === 'sending'}
          className="w-full py-4 border border-ink/30 font-sans text-[0.75rem] uppercase tracking-widest text-ink hover:bg-ink hover:text-bone transition-colors duration-300 disabled:opacity-50">
          {status === 'sending' ? t('Sending...', 'Envoi...') : t('Send Enquiry', 'Envoyer la demande')}
        </button>
      </div>

      <p className="label-caps text-shadow/40 text-center leading-relaxed">
        {t('We respond within 48 hours', 'Reponse sous 48 heures')}
      </p>
    </form>
  )
}
