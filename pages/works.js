import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-items"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import EldoradoLogo from "../public/images/logo-institute-eldorado.png"
import CreathusLogo from "../public/images/logo-institute-creathus.png"
import IngresseLogo from "../public/images/logo-ingresse.png"


const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <Section delay={0.3}>
            <WorkGridItem
              id="ingresse"
              title="Ingresse"
              thumbnail={IngresseLogo}
            >
              A Software Solution for events and entertainment in Latin America
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="eldorado"
              title="Eldorado"
              thumbnail={EldoradoLogo}
            >
             A Research and Development Institute
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="creathus"
              title="Creathus"
              thumbnail={CreathusLogo}
            >
              A Research and Development Institute
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            {/* <WorkGridItem id="eldorado" title="Eldorado" thumbnail={EldoradoLogo}>
            An institute for development research
          </WorkGridItem> */}
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
