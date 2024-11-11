import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { GridItem } from "../components/grid-items"

import Layout from "../components/layouts/article"
import Section from "../components/section"

import thumbnailBloomTaxonomy from "../public/images/deepen-learning.png"

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="A Step-by-Step Approach to Master Complex Topics"
            thumbnail={thumbnailBloomTaxonomy}
            href="https://medium.com/@nandolrneto/a-step-by-step-approach-to-master-complex-topics-0f9063ae622a"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
