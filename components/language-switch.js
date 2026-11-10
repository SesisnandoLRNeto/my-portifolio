import { useRouter } from "next/router"
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup
} from "@chakra-ui/react"
import { IoGlobeOutline } from "react-icons/io5"
import { useT } from "../libs/i18n"

const short = { en: "EN", "pt-BR": "PT", es: "ES" }

const LanguageSwitch = () => {
  const router = useRouter()
  const { t, locale } = useT()

  const change = next => {
    // Next.js reads this cookie on "/" so a return visit opens the same language.
    document.cookie = `NEXT_LOCALE=${next}; max-age=31536000; path=/; SameSite=Lax`
    router.push(router.asPath, router.asPath, { locale: next, scroll: false })
  }

  return (
    <Menu isLazy>
      <MenuButton
        as={Button}
        variant="ghost"
        size="md"
        px={2}
        leftIcon={<IoGlobeOutline />}
        aria-label={t("nav.language")}
      >
        {short[locale]}
      </MenuButton>
      <MenuList minW="10rem">
        <MenuOptionGroup type="radio" value={locale} onChange={change}>
          {router.locales.map(l => (
            <MenuItemOption key={l} value={l} lang={l}>
              {t(`languages.${l}`)}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export default LanguageSwitch
