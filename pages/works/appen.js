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
  <Layout title="Appen">
    <Container>
      <Title>
        Appen<Badge>2026-Present</Badge>
      </Title>
      <P>
        Appen is the leading provider of high-quality LLM training data and
        services with over 25 years of experience, providing high-quality
        datasets that power the world&apos;s leading AI models for decades.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://appen.com/">
            https://appen.com/{""} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Sr Fullstack Engineer </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nodejs and Spring Boot</span>
        </ListItem>
      </List>
      {/* its should be componentized */}
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        I&apos;sm working as a Senior Software Development Engineer at Appen, a
        global leader in AI data and machine learning solutions. In this role I
        build and maintain scalable, secure and high-performance distributed
        systems using a modern full-stack and microservices architecture. Appen
        provides enterprise-grade services and data tooling that accelerate
        advanced AI workflows and model development.
        <br />
        <br />
        <strong>Fullstack Development: </strong>
        <br />
        End-to-end design and implementation using Spring Boot and ReactJs,
        ensuring seamless interaction between backend APIs and frontend
        applications.
        <br />
        <br />
        <strong>AWS Cloud Services: </strong>
        <br />
        Leveraging AWS services such as Elastic Beanstalk for environment
        management, scalable deployment pipelines, and integrated observability.
        <br />
        <br />
        <strong>Performance Monitoring: </strong>
        <br />
        Implementing observability and performance tracking using Rollbar and
        New Relic to identify issues, optimize performance, and improve SLA
        adherence.
        <br />
        <br />
        <strong>Microservices & Integration: </strong>
        <br />
        Architecting and developing robust microservices with service
        decoupling, API contracts, and real-time event processing using Apache
        Kafka.
        <br />
        <br />
      </P>
      <br />
      <WorkImage src="/images/logo-novatics.png" alt="novatics" />
      <WorkImage src="/images/logo-appen.png" alt="appen" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
