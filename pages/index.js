import { ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  Circle,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from "next/link"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { cvHref, useT } from "../libs/i18n"

const MotionBox = motion(Box)

const entries = [
  { key: "lab", start: "2017", type: "work" },
  { key: "ufam", start: "2018", type: "edu" },
  { key: "gesin", start: "2019", end: "2020", type: "work" },
  { key: "apoema", start: "2020", type: "work" },
  { key: "creathus", start: "2020", end: "2021", type: "work" },
  { key: "igti", start: "2021", end: "2022", type: "edu" },
  { key: "eldoradoMid", start: "2021", end: "2023", type: "work" },
  { key: "cesar", start: "2022", end: "2026", type: "edu" },
  { key: "eldoradoSenior", start: "2023", end: "2025", type: "work" },
  { key: "ingresse", start: "2024", type: "work" },
  { key: "protexxa", start: "2024", end: "2026", type: "work" },
  { key: "tjam", start: "2025", end: "present", type: "work", current: true },
  { key: "appen", start: "2026", end: "present", type: "work", current: true }
]

const typeConfig = {
  work: { badge: "blue", color: "blue.400" },
  edu: { badge: "teal", color: "teal.400" }
}

const TimelineItem = ({ entry, index }) => {
  const spineBg = useColorModeValue("gray.200", "whiteAlpha.200")
  const { t } = useT()

  const { key, start, end, type, current } = entry
  const { badge, color } = typeConfig[type]
  const label = t(`home.legend.${type}`)
  const role = t(`home.timeline.${key}.role`)
  const org = t(`home.timeline.${key}.org`)
  const year = end
    ? `${start}–${end === "present" ? t("home.present") : end}`
    : start

  return (
    <MotionBox
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Flex align="flex-start">
        <Box w="95px" flexShrink={0} pt="3px" pr={3} textAlign="right">
          <Text
            fontSize="10px"
            fontWeight="500"
            color="text-muted"
            whiteSpace="nowrap"
            letterSpacing="0.03em"
          >
            {year}
          </Text>
        </Box>

        <Flex direction="column" align="center" flexShrink={0} w="14px">
          <Circle
            size={current ? "11px" : "9px"}
            bg={current ? color : "transparent"}
            borderWidth="1.5px"
            borderColor={color}
            mt="3px"
          />
          <Box flex={1} w="1px" bg={spineBg} minH="24px" />
        </Flex>

        <Box flex={1} pl={3} pb={4}>
          <Badge
            colorScheme={badge}
            fontSize="9px"
            mb={1}
            borderRadius="full"
            px={2}
          >
            {label}
          </Badge>
          <Text
            fontSize="sm"
            fontWeight="500"
            color="text-strong"
            lineHeight="1.4"
          >
            {role}
          </Text>
          <Text fontSize="xs" color="text-muted" mt="1px">
            {org}
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  )
}

const BioTimeline = () => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200")
  const { t } = useT()

  return (
    <Box>
      <Flex
        gap={4}
        mb={5}
        pb={3}
        borderBottom="0.5px solid"
        borderColor={borderColor}
      >
        {Object.entries(typeConfig).map(([key, cfg]) => (
          <Flex key={key} align="center" gap={1.5}>
            <Circle size="8px" bg={cfg.color} />
            <Text fontSize="11px" color="text-muted">
              {t(`home.legend.${key}`)}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Box>
        {entries.map((entry, i) => (
          <TimelineItem key={i} entry={entry} index={i} />
        ))}
      </Box>
    </Box>
  )
}

const Page = () => {
  const { t, locale } = useT()
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          {t("home.greeting")}
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sesisnando Rodrigues
            </Heading>
            <p>({t("home.role")})</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="90px"
              display="inline-block"
              borderRadius="full"
              src="/images/sesisnando.jpeg"
              alt={t("home.photoAlt")}
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t("home.profileTitle")}
          </Heading>
          <Paragraph>{t("home.profile")}</Paragraph>
          <Flex justify="center" gap={3} my={4} wrap="wrap">
            <Button
              as={NextLink}
              href="/works"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              {t("home.portfolioButton")}
            </Button>
            <Button
              as="a"
              href={cvHref(locale)}
              download
              leftIcon={<DownloadIcon />}
              colorScheme="teal"
              variant="outline"
            >
              {t("home.cvButton")}
            </Button>
          </Flex>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t("home.bioTitle")}
          </Heading>
          <BioTimeline />
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t("home.loveTitle")}
          </Heading>
          <Paragraph>{t("home.love")}</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t("home.onTheWebTitle")}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/SesisnandoLRNeto/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  SesisnandoLRNeto
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/sesisnando-rodrigues/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Sesisnando Rodrigues
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
