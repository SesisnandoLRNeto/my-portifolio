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
  <Layout title="Protexxa">
    <Container>
      <Title>
        Protexxa <Badge>2024-Present</Badge>
      </Title>
      <P>
        Protexxa is a B2B SaaS cybersecurity platform that leverages Artificial
        Intelligence to rapidly identify, evaluate, predict, and resolve cyber
        issues for employees.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://protexxa.com/">
            https://protexxa.com/{""} <ExternalLinkIcon mx="2px" />
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
          <span>ReactJs and Nodejs</span>
        </ListItem>
      </List>
      {/* its should be componentized */}
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        I am currently working with Node.js, Express, and React (TypeScript)
        frameworks, leveraging a comprehensive set of AWS services and modern
        development practices to deliver high-quality web security applications.
        Specifically, I am developing robust systems for Protexxa, a Canadian
        contractor, that integrate seamlessly with cloud services and emphasize
        security, scalability, and performance.
        <br />
        <br />
        <strong>Fullstack Development: </strong>
        <br />
        Expertise in both backend and frontend technologies using Node.js,
        Express, and ReactJs, ensuring seamless integration and optimal
        performance of web applications.
        <br />
        <br />
        <strong>AWS Cloud Services: </strong>
        <br />
        Proficient in utilizing AWS services such as Cognito for authentication,
        Elastic Beanstalk for deployment, and other AWS tools to enhance
        scalability, reliability, and security. Some services to mention here:
        S3 Bucket, Kafka MSK, SNS, SQS, Cloudfront and EC2
        <br />
        <br />
        <strong>Performance Monitoring: </strong>
        <br />
        Utilizing OpenTelemetry and Rollbar for monitoring and improving
        application performance.
        <br />
        <br />
        <strong>Machine Learning Services: </strong>
        <br />
        Incorporating AWS Comprehend and AWS Personalize to enhance application
        capabilities with machine learning features.
        <br />
        <br />
      </P>
      <br />
      <WorkImage src="/images/logo-novatics.png" alt="novatics" />
      <WorkImage src="/images/logo-protexxa.png" alt="protexxa" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
