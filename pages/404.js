import NextLink from "next/link"
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from "@chakra-ui/react"
import { useT } from "../libs/i18n"

const NotFound = () => {
  const { t } = useT()
  return (
    <Container>
      <Heading as="h1">{t("notFound.title")}</Heading>
      <Text>{t("notFound.text")}</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">{t("notFound.button")}</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
