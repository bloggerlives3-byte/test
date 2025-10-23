import enUS from "./en-US";
import enGB from "./en-GB";
import esES from "./es-ES";

export const messages = {
  "en-US": enUS,
  "en-GB": enGB,
  "es-ES": esES,
};

export type SupportedLocale = keyof typeof messages;
