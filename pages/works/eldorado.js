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
        Eldorado <Badge>2021-2024</Badge>
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
          <span>NodeJS, Angular and AWS</span>
        </ListItem>
      </List>

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        I&apos;ve worked with Angular and Node.js frameworks, leveraging a
        comprehensive set of methodologies and tools to deliver high-quality
        software solutions. My current focus is on developing an Enterprise
        Mobility Management (EMM) system, encompassing various critical aspects
        such as CI/CD, code practices, and leadership roles like Chapter Leads.
        My approach includes:
        <br />
        <br />
        <strong>Agile Methodologies: </strong> <br />
        Expert in both Behavior-Driven Development (BDD) and Test-Driven
        Development (TDD) to ensure continuous delivery and iterative progress.
        <br />
        <br />
        <strong>Domain-Driven Design (DDD): </strong> <br />
        Applying DDD principles to create robust and scalable architectures that
        align closely with business needs, particularly within the EMM domain.
        <br />
        <br />
        <strong> Unit Testing: </strong> <br />
        Utilizing Jasmine and Karma to build and maintain a solid suite of unit
        tests, ensuring code reliability and performance within the EMM system.
        <br />
        <br />
        <strong>Automation Testing: </strong> <br />
        Proficient with Protractor and Selenium to automate end-to-end testing,
        enhancing the efficiency and accuracy of the testing process, crucial
        for maintaining the integrity of the EMM platform.
        <br />
        <br /> <strong>CI/CD & Code Practices: </strong> <br />
        Actively involved in implementing CI/CD pipelines and best coding
        practices to streamline development and deployment processes, ensuring
        consistent and high-quality software delivery. <br />
        <br />
        <strong>Chapter Leads: </strong> <br />
        Leading and mentoring teams in best practices, fostering collaboration
        and continuous improvement across the development lifecycle.
        <br />
        <br />
        <strong>AWS: </strong>
        <br />
        Some services those I&apos;ve worked on: SES, S3 Bucket, Cloudfront,
        Kinesis, Glue Jobs and Crawlers, API Gateway, Lambda functions, SQS,
        SNS, EC2, ECS and ECR
        <br />
      </P>

      <br />

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Archievements
      </Heading>
      <P>
        <li>
          Successfully awarded a prize for excellence by the institute in 2022.
        </li>
        <li>
          Optimized cloud costs and performance for important features using
          planning and Proof of Concepts.
        </li>
        <li>
          Participated in the entire microfrontend architectural migration
        </li>
        <li>
          Trained and tested a LLM to learn patterns and convert them from
          natural language into SQL queries into database. The goal was to help
          users with Advanced filters
        </li>
      </P>

      <br />
      <WorkImage src="/images/logo-institute-eldorado.png" alt="eldorado" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
