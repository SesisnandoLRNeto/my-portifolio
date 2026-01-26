import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { GridItem } from "../components/grid-items"

import Layout from "../components/layouts/article"
import Section from "../components/section"

import thumbnailBloomTaxonomy from "../public/images/deepen-learning.png"
import thumbnailAiWritting from "../public/images/AI.jpeg"

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section delay={0.3}>
            <GridItem
              title="A Step-by-Step Approach to Master Complex Topics"
              thumbnail={thumbnailBloomTaxonomy}
              href="https://medium.com/@nandolrneto/a-step-by-step-approach-to-master-complex-topics-0f9063ae622a"
            />
          </Section>
          <Section delay={0.3}>
            <GridItem
              title="My Hard Decision to Become a Better Developer in the Age of AI"
              thumbnail={thumbnailAiWritting}
              href="https://medium.com/@nandolrneto/my-hard-decision-to-become-a-better-developer-in-the-age-of-ai-1f3cb91848c8?postPublishedType=initial"
            />
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
