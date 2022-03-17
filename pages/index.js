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
          Hello everyone, I&apos;m a full-stack developer based in Brazil!
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
            Work
          </Heading>
          <Paragraph>
            Sesisnando is a code-loving Software Engineer, full-stack developer
            and a full passion for building digital solutions he wants. He
            believes it is possible to change the world with code. When it is
            not coding, he loves to play games and gather with his friends.
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
            Graduated in Software Engineer at Federal University of Amazonas
            (UFAM)
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked at Information System Management (GESIN/SEDUC-AM)
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked at ApoemaFabSoft
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at Creathus Institute
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed in the MBA in Full stack web Development at Information
            Technology Management Institute (IGTI)
          </BioSection>
          <BioSection>
            <BioYear>2021 to Present</BioYear>
            Work at Eldorado Institute
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I &#9829;
          </Heading>
          <Paragraph>
            Art, Music, Guitar, Blockchain, RPG and Board Games
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
