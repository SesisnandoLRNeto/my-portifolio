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
  <Layout title="Eldorado">
    <Container>
      <Title>
        Eldorado <Badge>2021-</Badge>
      </Title>
      <P>
        We operate in the areas of software, hardware, microelectronics, tests
        and trials, education and consulting, creating and executing projects
        and solutions focused on technology and innovation. The first step was
        taken in 1999, and today we already have more than a thousand employees
        working in four units distributed throughout Brazil, located in
        Brasília, Campinas, Manaus and Porto Alegre. Besides contributing to the
        digital transformation of companies, our purpose is to develop the
        country&apos;s technological ecosystem, focusing on Open Innovation
        projects. We create disruptive solutions for markets such as IT/Telecom,
        Energy, Agribusiness, Oil&Gas, Health, Automotive, among others, and
        present success cases in emerging technologies, such as Artificial
        Intelligence, Computer Vision, Computer Graphics, Virtual and Augmented
        Reality, Virtual Assistants and Voice Interface, Big Data and Analytics,
        Embedded Systems, IoT and Blockchain. Throughout these years, we have
        formed and strengthened an extensive portfolio of clients, which
        includes large national and international companies, besides being
        constantly present in rankings of the best companies to work for in
        Brazil.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.eldorado.org.br/o-eldorado/">
            https://www.eldorado.org.br/o-eldorado/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Sr Fullstack developer </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Angular, AWS and Electron</span>
        </ListItem>
      </List>

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        I am currently working with Angular and Node.js frameworks, leveraging a
        comprehensive set of methodologies and tools to deliver high-quality
        software solutions. My current focus is on developing an Enterprise
        Mobility Management (EMM) system, encompassing various critical aspects
        such as CI/CD, code practices, and leadership roles like Chapter Leads.
        My approach includes: Agile Methodologies: Expert in both
        Behavior-Driven Development (BDD) and Test-Driven Development (TDD) to
        ensure continuous delivery and iterative progress. Domain-Driven Design
        (DDD): Applying DDD principles to create robust and scalable
        architectures that align closely with business needs, particularly
        within the EMM domain. Unit Testing: Utilizing Jasmine and Karma to
        build and maintain a solid suite of unit tests, ensuring code
        reliability and performance within the EMM system. Automation Testing:
        Proficient with Protractor and Selenium to automate end-to-end testing,
        enhancing the efficiency and accuracy of the testing process, crucial
        for maintaining the integrity of the EMM platform. CI/CD & Code
        Practices: Actively involved in implementing CI/CD pipelines and best
        coding practices to streamline development and deployment processes,
        ensuring consistent and high-quality software delivery. Chapter Leads:
        Leading and mentoring teams in best practices, fostering collaboration
        and continuous improvement across the development lifecycle.
      </P>

      <br />

      <WorkImage src="/images/logo-institute-eldorado.png" alt="eldorado" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
