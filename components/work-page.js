import {
  Badge,
  Box,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "./work"
import P from "./paragraph"
import Layout from "./layouts/article"
import works from "../data/works.json"
import { useT } from "../libs/i18n"

const year = value => (value ? value.slice(0, 4) : value)

// One job page, drawn from data/works.json and jobs.<id> in the dictionary.
const WorkPage = ({ id }) => {
  const { t } = useT()
  const work = works.find(w => w.id === id)
  const job = t(`jobs.${id}`)
  const start = year(work.start)
  const end = work.end ? year(work.end) : t("works.present")
  const period = start === end ? start : `${start}-${end}`

  return (
    <Layout title={work.name}>
      <Container>
        <Title>
          {work.name} <Badge>{period}</Badge>
        </Title>
        <P>{job.intro}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("works.labels.website")}</Meta>
            {work.websiteOffline ? (
              <Text as="span" color="text-muted">
                {work.website} ({t("works.labels.offline")})
              </Text>
            ) : (
              <Link href={work.website} isExternal>
                {work.website} <ExternalLinkIcon mx="2px" />
              </Link>
            )}
          </ListItem>
          <ListItem>
            <Meta>{t("works.labels.platform")}</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>{t("works.labels.role")}</Meta>
            <span>{job.role}</span>
          </ListItem>
          <ListItem>
            <Meta>{t("works.labels.stack")}</Meta>
            <span>{job.stack}</span>
          </ListItem>
        </List>

        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          {t("works.labels.description")}
        </Heading>
        <P>{job.lead}</P>
        {job.sections.map(section => (
          <Box key={section.title} mt={4}>
            <strong>{section.title}</strong>
            <P>{section.text}</P>
          </Box>
        ))}

        {job.achievements.length > 0 && (
          <>
            <Heading display="inline-block" as="h3" fontSize={20} mt={8} mb={4}>
              {t("works.labels.achievements")}
            </Heading>
            <UnorderedList spacing={1}>
              {job.achievements.map(item => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}

        <Box mt={8}>
          {work.images.map(image => (
            <WorkImage key={image.src} src={image.src} alt={image.alt} />
          ))}
        </Box>
      </Container>
    </Layout>
  )
}

export default WorkPage
