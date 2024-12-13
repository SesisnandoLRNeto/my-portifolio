import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-items"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import EldoradoLogo from "../public/images/logo-institute-eldorado.png"
import CreathusLogo from "../public/images/logo-institute-creathus.png"
import IngresseLogo from "../public/images/logo-ingresse.png"
import ProtexxaLogo from "../public/images/logo-protexxa.png"
import GenericLogo from "../public/images/generic-enterprise.png"
import SeducLogo from "../public/images/logo-seduc-am.png"

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
              id="protexxa"
              title="Protexxa"
              thumbnail={ProtexxaLogo}
            >
              A global cybersecurity platform & services company{" "}
            </WorkGridItem>
          </Section>

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
            <WorkGridItem
              id="apoema"
              title="ApoemaFabsoft"
              thumbnail={GenericLogo}
            >
              A Sofware Factory on development to IoT systems in agro-business
              industry
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem id="gesin" title="GESIN" thumbnail={SeducLogo}>
              A State Department of Education in Amazonas
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
