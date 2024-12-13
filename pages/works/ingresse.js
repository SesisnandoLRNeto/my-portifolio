import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => (
  <Layout title="Ingresse">
    <Container>
      <Title>
        Ingresse <Badge>2024</Badge>
      </Title>
      <P>
        Ingresse is the leading company in technology and solutions for events
        and entertainment in Latin America. Through innovation, digital
        security, and a deep understanding of the entertainment market, we
        connect our clients with what truly matters: people and stories. With
        over 10 years of experience in the Brazilian market, we&apos;ve built a
        portfolio with key players in the entertainment industry in our country,
        and have sold tickets for the largest New Year&apos;s Eve events,
        Carnaval, festivals, label parties, and nightclubs. We have ensured our
        high standards in security, customer service, and seamless access for
        over 5 thousand producers and 5.5 million users in Latin America. We aim
        to extend this ou expertise in entertainment and ticketing beyond our
        borders. Ingresse&apos;s entry into Spain and Uruguay marks the
        beginning of our world operations.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.ingresse.com/">
            https://www.ingresse.com/{""} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Sr Front end developer </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular and ReactJs</span>
        </ListItem>
      </List>

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        I&apos;ve had hands-on experience working with a diverse range of
        technologies, specifically in developing systems for selling tickets for
        events: AngularJS: Developed and maintained dynamic, single-page
        applications for event ticketing systems, with a strong focus on user
        experience and performance to ensure a seamless purchasing process.
        <br />
        <br />
        <strong>ReactJS: </strong>
        <br />
        Built modular and responsive web applications for ticketing platforms,
        leveraging React&apos;s component-based architecture to support high
        traffic and scalability during peak sales periods.
        <br />
        <br /> <strong>AWS:</strong>
        <br />
        Utilized Amazon Web Services to deploy, manage, and scale event
        ticketing systems, ensuring reliability, security, and efficiency in
        handling large volumes of transactions. Some services I&apos;ve worked
        on: Cloudfront, S3 Bucket and Route 53
      </P>
      <br />

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Archievements
      </Heading>
      <P>
        <li>
          Focused on improving user experience and system scalability, I was
          able to participated in the design and implementation of the Cruzeiro
          soccer club module and it was delivered on time
        </li>
      </P>

      <br />

      <WorkImage src="/images/logo-taking.png" alt="talking" />

      <WorkImage src="/images/logo-ingresse.png" alt="ingresse" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
