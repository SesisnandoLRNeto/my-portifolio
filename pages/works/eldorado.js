import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
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
        country's technological ecosystem, focusing on Open Innovation projects.
        We create disruptive solutions for markets such as IT/Telecom, Energy,
        Agribusiness, Oil&Gas, Health, Automotive, among others, and present
        success cases in emerging technologies, such as Artificial Intelligence,
        Computer Vision, Computer Graphics, Virtual and Augmented Reality,
        Virtual Assistants and Voice Interface, Big Data and Analytics, Embedded
        Systems, IoT and Blockchain. Throughout these years, we have formed and
        strengthened an extensive portfolio of clients, which includes large
        national and international companies, besides being constantly present
        in rankings of the best companies to work for in Brazil.
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
          <Meta>Stack</Meta>
          <span>NodeJS, Angular, React and Electron</span>
        </ListItem>
      </List>

      <WorkImage src="/images/logo-institute-eldorado.png" alt="eldorado" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from "../../components/chakra"
