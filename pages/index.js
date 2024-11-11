import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import NextLink from "next/link"
import { BioSection, BioYear } from "../components/bio"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"

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
            <p>(Developer)</p>
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
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portifolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <BioSection>
            <BioYear>2019</BioYear>
            Graduated with a degree in Software Engineering from the Federal
            University of Amazonas (UFAM).
          </BioSection>

          <BioSection>
            <BioYear>2019</BioYear>
            Developed information systems at the Department of Education
            (GESIN/SEDUC-AM).
          </BioSection>

          <BioSection>
            <BioYear>2020</BioYear>
            Innovated solutions at ApoemaFabSoft.
          </BioSection>

          <BioSection>
            <BioYear>2021</BioYear>
            Contributed to various projects at Creathus Institute.
          </BioSection>

          <BioSection>
            <BioYear>2021</BioYear>
            Earned an MBA in Full-Stack Web Development from IGTI.
          </BioSection>

          <BioSection>
            <BioYear>2021 to Present</BioYear>
            Building impactful tech solutions at Eldorado Institute.
          </BioSection>

          <BioSection>
            <BioYear>2024</BioYear>
            Building software solution at Ingresse Company from Latin America.
          </BioSection>
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
