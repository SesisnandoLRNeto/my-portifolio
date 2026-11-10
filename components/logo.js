import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { useT } from "../libs/i18n"

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/tag.png`
  const { t } = useT()
  return (
    <Link href="/">
      <LogoBox>
        <Image
          src={footPrintImg}
          width={20}
          height={20}
          alt={t("nav.logoAlt")}
        />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily="M PLUS Rounded 1c"
          whiteSpace="nowrap"
          fontWeight="bold"
          ml={3}
        >
          Sesisnando L R Neto
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
