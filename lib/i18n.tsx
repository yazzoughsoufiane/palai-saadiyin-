'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

export type Locale = 'en' | 'fr' | 'ar'

interface I18nContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (en: string, fr: string, ar?: string) => string
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (en) => en,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const stored = localStorage.getItem('ps-locale') as Locale | null
    if (stored && ['en', 'fr', 'ar'].includes(stored)) {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('ps-locale', l)
    if (l === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', l)
    }
  }

  const t = (en: string, fr: string, ar?: string): string => {
    if (locale === 'fr') return fr
    if (locale === 'ar' && ar) return ar
    return en
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
