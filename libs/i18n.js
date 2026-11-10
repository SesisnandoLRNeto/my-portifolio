import { useRouter } from "next/router"
import en from "../locales/en.json"
import ptBR from "../locales/pt-BR.json"
import es from "../locales/es.json"

export const dictionaries = { en, "pt-BR": ptBR, es }

const lookup = (dict, key) =>
  key
    .split(".")
    .reduce((node, part) => (node == null ? node : node[part]), dict)

// t("home.profile") returns the text for the current locale, falling back to English.
// Arrays and objects come back as they are, for lists like jobs.<id>.sections.
export const useT = () => {
  const { locale } = useRouter()
  const dict = dictionaries[locale] || en
  const t = key => lookup(dict, key) ?? lookup(en, key) ?? key
  return { t, locale: locale || "en" }
}

export const cvHref = locale => `/cv/sesisnando-cv-${locale || "en"}.pdf`
