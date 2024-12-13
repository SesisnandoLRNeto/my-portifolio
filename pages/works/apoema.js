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
  <Layout title="ApoemaFabSoft">
    <Container>
      <Title>
        ApoemaFabSoft <Badge>2020</Badge>
      </Title>
      <P>
        ApoemaFabSoft is a software factory on the development and maintenance
        of an IoT systems for the agro-business sector, integrating real-time
        data and device management.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://apoemafabsoft.com.br/">
            [disabled]https://apoemafabsoft.com.br/{""}{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>System Analyst</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Ionic and Firebase</span>
        </ListItem>
      </List>
      {/* its should be componentized */}
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        I had extensive experience working with the following technology stack,
        particularly in the context of IoT solutions for the agro-business
        sector:
        <br />
        <br />
        <strong>Ionic for PWA Solutions: </strong>
        <br />
        Developed Progressive Web Applications (PWAs) using Ionic, delivering
        cross-platform experiences with a focus on performance and accessibility
        for agro-business systems.
        <br />
        <br />
        <strong>Firebase: </strong>
        <br />
        Leveraged Firebase for real-time data synchronization, authentication,
        and backend services, ensuring responsive and scalable solutions
        tailored to the needs of agro-business IoT applications.
        <br />
        <br />
        <strong>IoT for Agro-Business: </strong>
        <br />
        Implemented IoT systems for the agro-business industry, connecting
        devices and sensors to optimize farming processes and improve
        operational efficiency.
        <br />
        <br />
      </P>
      <br />
      <WorkImage src="/images/generic-enterprise.png" alt="generic" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
