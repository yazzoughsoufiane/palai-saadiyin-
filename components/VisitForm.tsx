'use client'

import type React from 'react'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import emailjs from '@emailjs/browser'

const PUBLIC_KEY = 'ifObhtmllyV-ckei9'
const SERVICE_ID = 'service_hzi0ico'
const TEMPLATE_ID = 'template_nxemj5l'

export default function VisitForm() {
  const { t } = useI18n()

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error'
  >('idle')

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setStatus('sending')

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      )

      form.reset()
      setStatus('sent')
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="py-20 flex flex-col items-center text-center">
        <div className="w-12 h-px bg-saffron mb-5" />

        <p className="label-caps text-shadow/60 mb-3">
          {t(
            'Appointment Request Sent',
            'Demande envoyee'
          )}
        </p>

        <h3 className="font-serif text-[2rem] leading-tight font-light text-ink max-w-[520px]">
          {t(
            'Thank you for your enquiry.',
            'Merci pour votre demande.'
          )}
        </h3>

        <p className="mt-5 prose-body text-shadow max-w-[420px] leading-relaxed">
          {t(
            'Our team will contact you within 48 hours to arrange your private viewing.',
            'Notre equipe vous contactera sous 48 heures pour organiser votre visite privee.'
          )}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="visit-name"
          className="label-caps text-shadow/70"
        >
          {t('Name', 'Nom')}
          <span className="text-madder ml-1">*</span>
        </label>

        <input
          id="visit-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t(
            'Your full name',
            'Votre nom complet'
          )}
          className="bg-transparent border-b border-ink/20 py-3 font-sans text-sm text-ink placeholder:text-shadow/40 focus:outline-none focus:border-ink/60 transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="visit-email"
          className="label-caps text-shadow/70"
        >
          {t('Email', 'E-mail')}
          <span className="text-madder ml-1">*</span>
        </label>

        <input
          id="visit-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          className="bg-transparent border-b border-ink/20 py-3 font-sans text-sm text-ink placeholder:text-shadow/40 focus:outline-none focus:border-ink/60 transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="visit-dates"
          className="label-caps text-shadow/70"
        >
          {t(
            'Preferred Dates',
            'Dates preferees'
          )}
        </label>

        <input
          id="visit-dates"
          name="preferred_dates"
          type="text"
          placeholder={t(
            'e.g. late March, flexible',
            'ex. fin mars, flexible'
          )}
          className="bg-transparent border-b border-ink/20 py-3 font-sans text-sm text-ink placeholder:text-shadow/40 focus:outline-none focus:border-ink/60 transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="visit-rug"
          className="label-caps text-shadow/70"
        >
          {t(
            'Rug Reference (optional)',
            'Reference tapis (optionnel)'
          )}
        </label>

        <input
          id="visit-rug"
          name="rug_reference"
          type="text"
          placeholder={t(
            'Inventory number or title',
            'Numero inventaire ou titre'
          )}
          className="bg-transparent border-b border-ink/20 py-3 font-sans text-sm text-ink placeholder:text-shadow/40 focus:outline-none focus:border-ink/60 transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="visit-message"
          className="label-caps text-shadow/70"
        >
          {t('Message', 'Message')}
        </label>

        <textarea
          id="visit-message"
          name="message"
          rows={5}
          placeholder={t(
            'Tell us what brings you to CRAC...',
            'Dites-nous ce qui vous amene chez CRAC...'
          )}
          className="bg-transparent border-b border-ink/20 py-3 font-sans text-sm text-ink placeholder:text-shadow/40 focus:outline-none focus:border-ink/60 transition-colors duration-300 resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="border border-madder/20 bg-madder/5 px-5 py-4 text-center">
          <p className="text-sm text-madder tracking-wide">
            {t(
              'Something went wrong. Please try again.',
              'Une erreur est survenue. Veuillez reessayer.'
            )}
          </p>
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group relative w-full overflow-hidden border border-ink/25 py-4 transition-all duration-500 hover:bg-ink disabled:opacity-50"
        >
          <span className="relative z-10 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-ink transition-colors duration-500 group-hover:text-bone">
            {status === 'sending'
              ? t('Sending...', 'Envoi...')
              : t(
                  'Send Enquiry',
                  'Envoyer la demande'
                )}
          </span>
        </button>
      </div>

      <div className="pt-1 text-center">
        <p className="label-caps text-shadow/40 leading-relaxed">
          {t(
            'Private appointments · Response within 48 hours',
            'Visites privees · Reponse sous 48 heures'
          )}
        </p>
      </div>
    </form>
  )
}