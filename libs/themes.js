import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: props => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  // Light theme only: teal button text that passes WCAG AA on the beige body.
  // Solid teal.500 with gray.900 text is 4.8:1 (white was 3.51:1);
  // outline/ghost text teal.700 is 5.99:1 (teal.600 was 4.11:1).
  Button: {
    variants: {
      solid: props =>
        props.colorScheme === "teal"
          ? { color: mode("gray.900", undefined)(props) }
          : {},
      outline: props =>
        props.colorScheme === "teal"
          ? { color: mode("teal.700", undefined)(props) }
          : {},
      ghost: props =>
        props.colorScheme === "teal"
          ? { color: mode("teal.700", undefined)(props) }
          : {}
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode("#3d4aed", "#ff63c3")(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  glassTeal: "#88ccca"
}

// Text colors only. Light values are checked against the beige body #f0e7db
// for WCAG AA (4.5:1): gray.600 is 6.15:1. Dark values against #202023.
const semanticTokens = {
  colors: {
    "text-muted": { default: "gray.600", _dark: "gray.400" },
    "text-strong": { default: "gray.800", _dark: "whiteAlpha.900" }
  }
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  semanticTokens,
  components,
  colors,
  fonts
})

export default theme
