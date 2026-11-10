import NextLink from "next/link"
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import projects from "../data/projects.json"
import { useT } from "../libs/i18n"

const Projects = () => {
  const { t } = useT()
  return (
    <Layout title={t("projects.title")}>
      <Container>
        <Heading as="h3" fontSize={20} mb={2}>
          {t("projects.title")}
        </Heading>
        <Text mb={6} color="text-muted">
          {t("projects.intro")}
        </Text>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {projects.map(project => (
            <Section key={project.id} delay={0.2}>
              <LinkBox as="article" textAlign="center">
                {project.images[0] ? (
                  <Image
                    src={project.images[0].src}
                    alt={t(`projects.items.${project.id}.images.0`)}
                    borderRadius="12px"
                    w="full"
                    aspectRatio={16 / 10}
                    objectFit="cover"
                    objectPosition="top"
                    loading="lazy"
                  />
                ) : (
                  <Flex
                    borderRadius="12px"
                    w="full"
                    aspectRatio={16 / 10}
                    align="center"
                    justify="center"
                    bg="blackAlpha.200"
                    fontFamily="mono"
                    fontSize="lg"
                  >
                    {project.name}
                  </Flex>
                )}
                <LinkOverlay as={NextLink} href={`/projects/${project.id}`}>
                  <Text mt={2} fontSize={20}>
                    {project.name}
                  </Text>
                </LinkOverlay>
                <Text fontSize={14}>
                  {t(`projects.items.${project.id}.goal`)}
                </Text>
                <Text fontSize={12} color="text-muted" mt={1}>
                  {project.stack.join(" · ")}
                </Text>
              </LinkBox>
            </Section>
          ))}
        </SimpleGrid>
        <Box h={4} />
      </Container>
    </Layout>
  )
}

export default Projects
