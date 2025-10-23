"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages, type SupportedLocale } from "./messages";

const DEFAULT_LOCALE: SupportedLocale = "en-US";
const STORAGE_KEY = "smuv-locale";

type TranslationContextValue = {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (path: string, fallback?: string) => string;
};

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

const getMessage = (locale: SupportedLocale, path: string, fallback?: string) => {
  const segments = path.split(".");
  let current: unknown = messages[locale];
  for (const segment of segments) {
    if (typeof current === "object" && current !== null && segment in current) {
      current = (current as Record<string, unknown>)[segment];
    } else {
      return fallback ?? path;
    }
  }
  return typeof current === "string" ? current : fallback ?? path;
};

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored && stored in messages) {
      setLocaleState(stored as SupportedLocale);
    }
  }, []);

  const setLocale = (nextLocale: SupportedLocale) => {
    setLocaleState(nextLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    }
  };

  const value = useMemo<TranslationContextValue>(() => ({
    locale,
    setLocale,
    t: (path: string, fallback?: string) => getMessage(locale, path, fallback),
  }), [locale]);

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
