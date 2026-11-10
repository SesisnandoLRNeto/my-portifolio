import Logo from "./logo"
import NextLink from "next/link"
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react"
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "./theme-toggle-button"
import LanguageSwitch from "./language-switch"
import { cvHref, useT } from "../libs/i18n"

const useInactiveColor = () => useColorModeValue("gray.800", "whiteAlpha.900")

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useInactiveColor()
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? "glassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  const { t, locale } = useT()
  const inactiveColor = useInactiveColor()

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            {t("nav.works")}
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            {t("nav.projects")}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {t("nav.posts")}
          </LinkItem>
          <Link
            href={cvHref(locale)}
            download
            p={2}
            color={inactiveColor}
            display="inline-flex"
            alignItems="center"
            gap={1}
          >
            <DownloadIcon boxSize={3} />
            {t("nav.cv")}
          </Link>
        </Stack>

        <Box flex={1} align="right" whiteSpace="nowrap">
          <LanguageSwitch />
          <Box ml={1} display="inline-block">
            <ThemeToggleButton />
          </Box>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label={t("nav.menu")}
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  {t("nav.about")}
                </MenuItem>
                <MenuItem as={NextLink} href="/works">
                  {t("nav.works")}
                </MenuItem>
                <MenuItem as={NextLink} href="/projects">
                  {t("nav.projects")}
                </MenuItem>
                <MenuItem as={NextLink} href="/posts">
                  {t("nav.posts")}
                </MenuItem>
                <MenuItem
                  as="a"
                  href={cvHref(locale)}
                  download
                  icon={<DownloadIcon />}
                >
                  {t("nav.downloadCv")}
                </MenuItem>
                <MenuItem as={Link} href="https://github.com/SesisnandoLRNeto">
                  {t("nav.github")}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
