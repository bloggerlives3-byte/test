"use client";

import { useTranslation } from "@/i18n/TranslationProvider";

const LOCALES = [
  { value: "en-US", labelKey: "localeSwitcher.enUS" },
  { value: "en-GB", labelKey: "localeSwitcher.enGB" },
  { value: "es-ES", labelKey: "localeSwitcher.esES" },
];

const LocaleSwitcher = () => {
  const { locale, setLocale, t } = useTranslation();

  return (
    <label className="flex items-center gap-2 text-xs text-[color:var(--color-foreground)]/60">
      <span>{t("localeSwitcher.label", "Language")}</span>
      <select
        className="rounded-full border border-[color:var(--color-border)] bg-transparent px-2 py-1 text-xs"
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
      >
        {LOCALES.map((option) => (
          <option key={option.value} value={option.value}>
            {t(option.labelKey, option.value)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LocaleSwitcher;
