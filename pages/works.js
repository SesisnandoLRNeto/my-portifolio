import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-items"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import works from "../data/works.json"
import { useT } from "../libs/i18n"
import AppenLogo from "../public/images/logo-appen.png"
import TjamLogo from "../public/images/logo-tjam.png"
import ProtexxaLogo from "../public/images/logo-protexxa.png"
import IngresseLogo from "../public/images/logo-ingresse.png"
import EldoradoLogo from "../public/images/logo-institute-eldorado.png"
import CreathusLogo from "../public/images/logo-institute-creathus.png"
import GenericLogo from "../public/images/generic-enterprise.png"
import SeducLogo from "../public/images/logo-seduc-am.png"

const thumbnails = {
  appen: AppenLogo,
  tjam: TjamLogo,
  protexxa: ProtexxaLogo,
  ingresse: IngresseLogo,
  eldorado: EldoradoLogo,
  creathus: CreathusLogo,
  apoema: GenericLogo,
  gesin: SeducLogo
}

const Works = () => {
  const { t } = useT()
  return (
    <Layout title={t("works.title")}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t("works.title")}
        </Heading>

        <SimpleGrid columns={[2, 2, 2]} gap={6}>
          {works.map(work => (
            <Section key={work.id} delay={0.3}>
              <WorkGridItem
                id={work.id}
                title={work.name}
                thumbnail={thumbnails[work.id]}
              >
                {t(`jobs.${work.id}.summary`)}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
