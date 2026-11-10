import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"
import projects from "../../data/projects.json"
import { useT } from "../../libs/i18n"

// Adding a project needs only an entry in data/projects.json,
// its text under projects.items.<id> in each locale, and its images.
export const getStaticPaths = ({ locales }) => ({
  paths: locales.flatMap(locale =>
    projects.map(project => ({ params: { id: project.id }, locale }))
  ),
  fallback: false
})

export const getStaticProps = ({ params }) => ({
  props: { id: params.id }
})

const Project = ({ id }) => {
  const { t } = useT()
  const project = projects.find(p => p.id === id)
  const text = t(`projects.items.${id}`)

  return (
    <Layout title={project.name}>
      <Container>
        <Title parent="projects">{project.name}</Title>
        <P>{text.goal}</P>

        <Box ml={4} my={4}>
          <Box>
            <Meta>GitHub</Meta>
            <Link href={project.github} isExternal>
              {project.github.replace("https://", "")}{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
          <Box mt={1}>
            <Meta>{t("projects.labels.stack")}</Meta>
            <span>{project.stack.join(", ")}</span>
          </Box>
        </Box>

        <Heading as="h3" fontSize={20} mt={6} mb={3}>
          {t("projects.labels.motivation")}
        </Heading>
        <P>{text.motivation}</P>

        <Heading as="h3" fontSize={20} mt={6} mb={3}>
          {t("projects.labels.goals")}
        </Heading>
        <UnorderedList spacing={1}>
          {text.goals.map(goal => (
            <ListItem key={goal}>{goal}</ListItem>
          ))}
        </UnorderedList>

        {text.note && (
          <Text mt={4} fontSize="sm" color="text-muted">
            {text.note}
          </Text>
        )}

        {project.images.length > 0 && (
          <>
            <Heading as="h3" fontSize={20} mt={8} mb={3}>
              {t("projects.labels.screenshots")}
            </Heading>
            {project.images.map((image, i) => (
              <Image
                key={image.src}
                src={image.src}
                alt={t(`projects.items.${id}.images.${i}`)}
                mb={4}
                borderRadius="lg"
                w="full"
                loading="lazy"
              />
            ))}
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Project
