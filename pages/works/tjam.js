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
        TJAM <Badge>2025</Badge>
      </Title>
      <P>
        The digital judicial process, also called the virtual or electronic
        process, can be defined as a computer system that reproduces the entire
        judicial procedure in electronic form, replacing the recording of
        procedural acts on paper with the storage and handling of case files in
        digital form.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.tjam.jus.br/">
            https://www.tjam.jus.br/{""} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Staff developer </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
      </List>

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        I&apos;m working with a legacy system which is passing through an entire
        migration of tecnologies to match with modern applications
        <br />
        <br />
        <strong>Java: </strong>
        <br />
        Built modular and responsive web applications for Justice department,
        leveraging Java&apos;s component, based on the requirements of key
        figures in the judiciary and their demands for the functioning of the
        system. Projudi is very simple and secure to use. Lawyers and citizens
        who wish to file a complaint with the Special Courts can use the
        Internet or go to the courts' service desk. These requests will be
        recorded electronically, with automatic distribution and registration of
        the case. From then on, all acts will be performed using the computer,
        eliminating the use of paper.
        <br />
      </P>
      <br />

      <WorkImage src="/images/logo-tjam.png" alt="tjam" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
