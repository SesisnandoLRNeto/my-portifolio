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
  <Layout title="Creathus">
    <Container>
      <Title>
        Creathus <Badge>2020-2021</Badge>
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
          <Meta>Role</Meta>
          <span> Fullstack developer</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Springboot, VueJS and ReactJs</span>
        </ListItem>
      </List>

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        I have solid experience working with the following technology stack,
        particularly in developing solutions for industrial customers:
        <br />
        <br />
        <strong> ReactJS:</strong>
        <br />
        Developed interactive and high-performance web applications using
        React’s component-driven architecture.
        <br />
        <br />
        <strong> Spring Boot: </strong>
        <br />
        Created robust and scalable backend services, leveraging Spring Boot for
        streamlined development and efficient deployment.
        <br />
        <br />
        <strong>TDD with JUnit:</strong>
        <br />
        Applied Test-Driven Development practices using JUnit to ensure high
        code quality and maintainability, focusing on delivering reliable
        software solutions.
        <br />
        <br />
        <strong> Shopfloor Systems:</strong>
        <br />
        Delivered tailored shopfloor systems for industrial customers, enhancing
        operational efficiency and supporting real-time data management on the
        production floor.
        <br />
        <br />
      </P>

      <br />

      <WorkImage src="/images/logo-institute-creathus.png" alt="creathus" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
