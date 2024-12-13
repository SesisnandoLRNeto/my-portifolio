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
  <Layout title="GESIN/SEDUC">
    <Container>
      <Title>
        GESIN/ SEDUC-AM <Badge>2019-2020</Badge>
      </Title>
      <P>
        The creation of the State Department of Education (SEDUC) occurred in
        1946 through Law 1,596, dated January 5, 1946, initially named the
        General Directorate of the Department of Education and Culture. With Law
        12, dated May 9, 1953, the first change in its nomenclature occurred,
        and it was renamed the Department of Education, Culture, and Health.
        Later that same year, under Law 65, dated July 21, 1953, it was renamed
        the Department of Education, Health, and Social Assistance. Two years
        later, under Law 108, dated December 23, 1955, it was named the
        Department of Education and Culture. Another change occurred 46 years
        later, with Law 2,032, dated May 2, 1991, when it was renamed the State
        Department of Education, Culture, and Sports. The current name, State
        Department of Education and Quality of Teaching (SEDUC), was established
        by Law 2,600, dated February 4, 2000.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.seduc.am.gov.br/">
            https://www.seduc.am.gov.br/{""} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>System developer</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Debian, web page hosted and Wordpress</span>
        </ListItem>
      </List>

      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        Description
      </Heading>
      <P>
        Managed, maintained, and provided support for Linux servers hosting
        several corporate and educational websites. Ensured high availability
        and performance during live operations.
      </P>

      <br />
      <WorkImage src="/images/logo-seduc-am.png" alt="seduc" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
