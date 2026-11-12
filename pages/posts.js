import { Badge, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { GridItem } from "../components/grid-items"

import Layout from "../components/layouts/article"
import Section from "../components/section"

import thumbnailBloomTaxonomy from "../public/images/deepen-learning.png"
import thumbnailAiWritting from "../public/images/AI.jpeg"
import thumbnailGuild from "../public/images/projects/guild/heroes.webp"
import { useT } from "../libs/i18n"

const Posts = () => {
  const { t, locale } = useT()
  const tag =
    locale === "en" ? null : (
      <Badge colorScheme="gray" fontSize="0.65em">
        {t("posts.inEnglish")}
      </Badge>
    )
  return (
    <Layout title={t("nav.posts")}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t("posts.title")}
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <Section delay={0.3}>
              <GridItem
                title="I Turned My AI Coding Agents Into an RPG Guild"
                thumbnail={thumbnailGuild}
                href="https://medium.com/@nandolrneto/i-turned-my-ai-coding-agents-into-an-rpg-guild-bb354e5a5e85"
              >
                {tag}
              </GridItem>
            </Section>
            <Section delay={0.3}>
              <GridItem
                title="A Step-by-Step Approach to Master Complex Topics"
                thumbnail={thumbnailBloomTaxonomy}
                href="https://medium.com/@nandolrneto/a-step-by-step-approach-to-master-complex-topics-0f9063ae622a"
              >
                {tag}
              </GridItem>
            </Section>
            <Section delay={0.3}>
              <GridItem
                title="My Hard Decision to Become a Better Developer in the Age of AI"
                thumbnail={thumbnailAiWritting}
                href="https://medium.com/@nandolrneto/my-hard-decision-to-become-a-better-developer-in-the-age-of-ai-1f3cb91848c8?postPublishedType=initial"
              >
                {tag}
              </GridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
