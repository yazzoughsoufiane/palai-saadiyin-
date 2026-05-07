'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { sheetVariants } from '@/lib/motion'
import { useI18n } from '@/lib/i18n'

interface EnquireSheetProps {
  isOpen: boolean
  onClose: () => void
  rugTitle?: string
  inventoryNumber?: string
}

export default function EnquireSheet({ isOpen, onClose, rugTitle, inventoryNumber }: EnquireSheetProps) {
  const { t } = useI18n()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 900))
    setStatus('sent')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — subtle, not a full dim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink/10 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sheet */}
          <motion.aside
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label={t('Enquire about this piece', 'S\'enquérir de cette pièce')}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-bone shadow-2xl shadow-ink/10 flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between px-8 pt-10 pb-6 border-b border-ink/10">
              <div>
                <p className="label-caps text-shadow/60 mb-1">
                  {t('Palais Saadiyin', 'Palais Saadiyin')}
                </p>
                <h2 className="font-serif text-[1.5rem] font-light text-ink">
                  {t('Enquire', 'S\'enquérir')}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-shadow/50 hover:text-ink transition-colors"
                aria-label={t('Close', 'Fermer')}
              >
                <X strokeWidth={1.5} size={20} />
              </button>
            </div>

            {/* Context */}
            {rugTitle && (
              <div className="px-8 py-5 bg-bone-dark/50">
                <p className="label-caps text-shadow/60 mb-1">{t('Regarding', 'À propos de')}</p>
                <p className="font-serif text-[1rem] font-light text-ink">{rugTitle}</p>
                {inventoryNumber && (
                  <p className="label-caps text-shadow/50 mt-0.5">{inventoryNumber}</p>
                )}
              </div>
            )}

            {status === 'sent' ? (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
                <div className="w-10 h-px bg-saffron mx-auto mb-2" />
                <h3 className="font-serif text-[1.5rem] font-light text-ink">
                  {t('Thank you', 'Merci')}
                </h3>
                <p className="prose-body text-shadow max-w-[280px]">
                  {t(
                    'Mohammed Khaoulani or a member of our team will reply within 48 hours.',
                    'Mohammed Khaoulani ou un membre de notre équipe vous répondra sous 48 heures.',
                  )}
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 label-caps border-b border-ink/30 pb-0.5 hover:text-shadow transition-colors"
                >
                  {t('Close', 'Fermer')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col px-8 py-8 gap-6" noValidate>
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="label-caps text-shadow/70">
                    {t('Name', 'Nom')} <span aria-hidden="true" className="text-madder">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="bg-transparent border-b border-ink/25 py-2 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
                    placeholder={t('Your name', 'Votre nom')}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="label-caps text-shadow/70">
                    {t('Email', 'E-mail')} <span aria-hidden="true" className="text-madder">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="bg-transparent border-b border-ink/25 py-2 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors"
                    placeholder={t('your@email.com', 'votre@email.com')}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <label htmlFor="message" className="label-caps text-shadow/70">
                    {t('Message', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="bg-transparent border-b border-ink/25 py-2 font-sans text-sm text-ink placeholder-shadow/40 focus:outline-none focus:border-ink/60 transition-colors resize-none"
                    placeholder={t(
                      'Tell us what draws you to this piece, any questions about dimensions, condition, or shipping…',
                      'Dites-nous ce qui vous attire dans cette pièce, toute question sur les dimensions, l\'état ou l\'expédition…',
                    )}
                  />
                </div>

                {/* Appointment option */}
                <div className="flex items-start gap-3">
                  <input
                    id="appointment"
                    name="appointment"
                    type="checkbox"
                    className="mt-0.5 accent-ink"
                  />
                  <label htmlFor="appointment" className="label-caps text-shadow/65 leading-relaxed cursor-pointer">
                    {t('I would like to arrange a private viewing in Marrakech', 'Je souhaite organiser une visite privée à Marrakech')}
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 border border-ink/30 font-sans text-[0.75rem] uppercase tracking-widest text-ink hover:bg-ink hover:text-bone transition-colors duration-300 disabled:opacity-50"
                  >
                    {status === 'sending'
                      ? t('Sending…', 'Envoi…')
                      : t('Send Enquiry', 'Envoyer la demande')}
                  </button>
                </div>

                <p className="label-caps text-shadow/45 text-center leading-relaxed">
                  {t(
                    'We respond within 48 hours. No automated replies.',
                    'Nous répondons sous 48 heures. Pas de réponses automatiques.',
                  )}
                </p>
              </form>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
