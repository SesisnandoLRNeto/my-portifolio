import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Eldorado">
    <Container>
      <Title>
        Creathus <Badge>2020-</Badge>
      </Title>
      <P>
        Founded in January 2019 and Accredited in CAPDA (Commission for Research
        & Development Activities in the Amazon), Creathus is a genuinely
        Amazonian Institute of Technology that promotes the development of the
        Amazon Region and Brazil through Research, Development and Innovation
        projects, support for business developments and production chains, and
        connection with national and international ecosystems, fostering digital
        economy businesses, bioeconomy, Industry 4.0, innovative
        entrepreneurship and Human Resources training.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://creathus.org.br/">
            https://creathus.org.br/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Springboot, VueJS and React</span>
        </ListItem>
      </List>

      <WorkImage src="/images/logo-institute-creathus.png" alt="creathus" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
