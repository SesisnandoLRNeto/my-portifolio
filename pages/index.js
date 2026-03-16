import { ChevronRightIcon } from "@chakra-ui/icons"
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

const MotionBox = motion(Box)

const entries = [
  {
    year: "2017",
    type: "work",
    role: "Student Intranet Creator",
    org: "Lab Environment Project"
  },
  {
    year: "2018",
    type: "edu",
    role: "B.Sc. in Software Engineering",
    org: "Federal University of Amazonas (UFAM)"
  },
  {
    year: "2019–2020",
    type: "work",
    role: "Information Systems Developer",
    org: "GESIN / SEDUC-AM"
  },
  {
    year: "2020",
    type: "work",
    role: "Fullstack Developer",
    org: "ApoemaFabSoft"
  },
  {
    year: "2020–2021",
    type: "work",
    role: "Fullstack Developer",
    org: "Creathus Institute"
  },
  {
    year: "2021–2022",
    type: "edu",
    role: "MBA in Full-Stack Web Development",
    org: "IGTI"
  },
  {
    year: "2021–2023",
    type: "work",
    role: "Mid-level Fullstack Developer",
    org: "Eldorado Institute"
  },
  {
    year: "2022–2026",
    type: "edu",
    role: "M.Sc. in Software Engineering",
    org: "Cesar School"
  },
  {
    year: "2023–2025",
    type: "work",
    role: "Senior Fullstack Developer — Motorola",
    org: "Eldorado Institute"
  },
  {
    year: "2024",
    type: "work",
    role: "Software Engineer — Ticket Sales",
    org: "Ingresse"
  },
  {
    year: "2024–2026",
    type: "work",
    role: "Senior Software Engineer — Protexxa",
    org: "Novatics"
  },
  {
    year: "2025–Present",
    type: "work",
    role: "Contributor Developer",
    org: "TJAM",
    current: true
  },
  {
    year: "2026–Present",
    type: "work",
    role: "Senior Software Engineer — Appen",
    org: "Novatics",
    current: true
  }
]

const typeConfig = {
  work: { badge: "blue", label: "Work", color: "blue.400" },
  edu: { badge: "teal", label: "Education", color: "teal.400" }
}

const TimelineItem = ({ entry, index }) => {
  const spineBg = useColorModeValue("gray.200", "whiteAlpha.200")
  const yearColor = useColorModeValue("gray.400", "gray.500")
  const roleColor = useColorModeValue("gray.800", "whiteAlpha.900")
  const orgColor = useColorModeValue("gray.500", "gray.400")

  const { year, type, role, org, current } = entry
  const { badge, label, color } = typeConfig[type]

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
            color={yearColor}
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
            color={roleColor}
            lineHeight="1.4"
          >
            {role}
          </Text>
          <Text fontSize="xs" color={orgColor} mt="1px">
            {org}
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  )
}

const BioTimeline = () => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200")
  const labelColor = useColorModeValue("gray.400", "gray.500")

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
            <Text fontSize="11px" color={labelColor}>
              {cfg.label}
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
          Hi there! I&apos;m a passionate full-stack developer from Brazil,
          dedicated to crafting impactful software solutions.
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sesisnando Rodrigues
            </Heading>
            <p>(Full Stack Engineer)</p>
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
              alt="Sesisnando"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Profile
          </Heading>
          <Paragraph>
            Sesisnando is a dedicated Software Engineer and full-stack developer
            with a deep passion for creating impactful digital solutions. He
            believes in the power of code to make a difference and enjoys
            tackling challenges head-on. When he&apos;s not coding, you&apos;ll
            find him playing games or spending quality time with friends.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portifolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioTimeline />
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I &#9829;
          </Heading>
          <Paragraph>
            When I&apos;m not coding, I love diving into the world of heavy
            metal, playing guitar, exploring new technologies using AI and
            enjoying RPG and Board Games with friends.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the page
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/SesisnandoLRNeto/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  SesinandoLRNeto
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
