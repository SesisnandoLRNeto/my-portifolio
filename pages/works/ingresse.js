import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Ingresse">
    <Container>
      <Title>
        Ingresse <Badge>2024-</Badge>
      </Title>
      <P>
        Ingresse is the leading company in technology and solutions for events and entertainment in Latin America. Through innovation, digital security, and a deep understanding of the entertainment market, we connect our clients with what truly matters: people and stories.
        With over 10 years of experience in the Brazilian market, we&apos;ve built a portfolio with key players in the entertainment industry in our country, and have sold tickets for the largest New Year&apos;s Eve events, Carnaval, festivals, label parties, and nightclubs. We have ensured our high standards in security, customer service, and seamless access for over 5 thousand producers and 5.5 million users in Latin America.
        We aim to extend this ou expertise in entertainment and ticketing beyond our borders. Ingresse&apos;s entry into Spain and Uruguay marks the beginning of our world operations.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.ingresse.com/">
          https://www.ingresse.com// <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular and ReactJs</span>
        </ListItem>
      </List>

      <WorkImage src="/images/logo-ingresse.png" alt="ingresse" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
