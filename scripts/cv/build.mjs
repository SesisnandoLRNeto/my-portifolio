// Builds the CV PDFs (one per language) from the same data the site uses:
// locales/*.json (profile, jobs.<id>.cv, cv.*), data/works.json (dates) and data/cv.json (contact).
// Runs as part of `npm run build` (before `next build`), so a site update ships a new CV.
// cvStart overrides start when the CV role began later than the job page period.
// Output: public/cv/sesisnando-cv-<locale>.pdf
import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"
import React from "react"
import {
  Document,
  Font,
  Link,
  Page,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
  renderToFile
} from "@react-pdf/renderer"

const require = createRequire(import.meta.url)
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const readJson = file =>
  JSON.parse(fs.readFileSync(path.join(root, file), "utf8"))

const works = readJson("data/works.json")
const contact = readJson("data/cv.json")
const locales = ["en", "pt-BR", "es"]

const fontFile = weight =>
  require.resolve(
    `@fontsource/open-sans/files/open-sans-latin-${weight}-normal.woff`
  )
Font.register({
  family: "Open Sans",
  fonts: [
    { src: fontFile(400), fontWeight: 400 },
    { src: fontFile(500), fontWeight: 500 },
    { src: fontFile(600), fontWeight: 600 },
    { src: fontFile(700), fontWeight: 700 }
  ]
})
Font.registerHyphenationCallback(word => [word])

const ink = "#3f3f3f"
const soft = "#5c5c5c"

const s = StyleSheet.create({
  page: {
    fontFamily: "Open Sans",
    fontSize: 7.8,
    color: soft,
    paddingTop: 24,
    paddingBottom: 18,
    paddingHorizontal: 30,
    lineHeight: 1.28
  },
  name: {
    fontSize: 24,
    lineHeight: 1.2,
    letterSpacing: 7,
    textAlign: "center",
    color: ink,
    fontWeight: 400
  },
  title: {
    fontSize: 9.5,
    lineHeight: 1.2,
    letterSpacing: 3,
    textAlign: "center",
    marginTop: 4,
    color: soft
  },
  rule: { borderBottomWidth: 0.8, borderBottomColor: "#8a8a8a", marginTop: 8 },
  columns: { flexDirection: "row", marginTop: 8 },
  left: { width: "36%", paddingRight: 16 },
  right: { width: "64%", paddingLeft: 6 },
  heading: {
    fontSize: 10,
    lineHeight: 1.2,
    letterSpacing: 2.4,
    color: ink,
    marginBottom: 5,
    marginTop: 2,
    textTransform: "uppercase"
  },
  dashed: {
    borderBottomWidth: 0.6,
    borderBottomColor: "#9a9a9a",
    borderStyle: "dashed",
    marginVertical: 6
  },
  contactRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  icon: { width: 9, height: 9, marginRight: 7 },
  link: {
    color: ink,
    fontWeight: 700,
    textDecoration: "underline",
    marginBottom: 2
  },
  plainLink: { color: soft, textDecoration: "none" },
  grid: { flexDirection: "row", flexWrap: "wrap" },
  gridItem: {
    width: "50%",
    flexDirection: "row",
    marginBottom: 1.5,
    fontSize: 7.6
  },
  bullet: { width: 7 },
  langRow: { flexDirection: "row", marginBottom: 1.5 },
  langName: { width: 62 },
  bold: { fontWeight: 700, color: ink },
  eduItem: { flexDirection: "row", marginBottom: 5 },
  job: { marginBottom: 4 },
  jobRole: { fontSize: 10, lineHeight: 1.25, fontWeight: 700, color: ink },
  jobHead: { flexDirection: "row", justifyContent: "space-between" },
  jobOrg: { fontWeight: 700, color: ink, fontSize: 8 },
  jobItem: { flexDirection: "row", marginTop: 1.5, paddingLeft: 6 },
  paragraph: { textAlign: "justify" }
})

const h = React.createElement

// Small line icons (24px grid), drawn as paths so the PDF needs no image files.
const icons = {
  phone:
    "M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 2v14h10V4H7zm4 15.5h2",
  mail: "M3 5h18v14H3V5zm1 1v.5l8 6 8-6V6H4zm0 2v10h16V8l-8 6-8-6z",
  web: "M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-8 10h16M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20",
  pin: "M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
}
const Icon = ({ name }) =>
  h(
    Svg,
    { viewBox: "0 0 24 24", style: s.icon },
    h(Path, { d: icons[name], stroke: soft, strokeWidth: 1.6, fill: "none" })
  )

const Heading = ({ children }) => h(Text, { style: s.heading }, children)
const Dashed = () => h(View, { style: s.dashed })
const Bullet = ({ children, style }) =>
  h(
    View,
    { style: style || s.jobItem, wrap: false },
    h(Text, { style: s.bullet }, "•"),
    h(Text, { style: { flex: 1 } }, children)
  )

const formatDate = (value, dict) => {
  if (!value) return dict.cv.present
  const [year, month] = value.split("-")
  return month ? `${dict.cv.months[Number(month) - 1]} ${year}` : year
}

const ContactRow = ({ icon, children, href }) =>
  h(
    View,
    { style: s.contactRow },
    h(Icon, { name: icon }),
    href
      ? h(Link, { src: href, style: s.plainLink }, children)
      : h(Text, null, children)
  )

const Left = ({ dict }) => {
  const cv = dict.cv
  return h(
    View,
    { style: s.left },
    h(Heading, null, cv.sections.contact),
    h(
      ContactRow,
      { icon: "phone", href: `tel:${contact.phone.replace(/\s/g, "")}` },
      contact.phone
    ),
    h(
      ContactRow,
      { icon: "mail", href: `mailto:${contact.email}` },
      contact.email
    ),
    h(ContactRow, { icon: "web", href: contact.website }, contact.website),
    h(ContactRow, { icon: "pin" }, cv.location),
    h(Dashed),
    h(Heading, null, cv.sections.links),
    h(Link, { src: contact.github, style: s.link }, "GitHub"),
    h(Link, { src: contact.linkedin, style: s.link }, "LinkedIn"),
    h(Dashed),
    h(Heading, null, cv.sections.skills),
    h(
      View,
      { style: s.grid },
      cv.skills.map(skill =>
        h(Bullet, { key: skill, style: s.gridItem }, skill)
      )
    ),
    h(Dashed),
    h(Heading, null, cv.sections.languages),
    cv.languages.map(lang =>
      h(
        View,
        { key: lang.name, style: s.langRow },
        h(Text, { style: s.bullet }, "•"),
        h(Text, { style: s.langName }, lang.name),
        h(Text, { style: s.bold }, lang.level)
      )
    ),
    h(Dashed),
    h(Heading, null, cv.sections.education),
    cv.education.map(item =>
      h(
        View,
        { key: item.course, style: s.eduItem, wrap: false },
        h(Text, { style: s.bullet }, "•"),
        h(
          View,
          { style: { flex: 1 } },
          h(Text, { style: s.bold }, `${item.course}, ${item.school}`),
          h(Text, null, item.date)
        )
      )
    ),
    h(Dashed),
    h(Heading, null, cv.sections.certifications),
    cv.certifications.map(item =>
      h(
        Bullet,
        { key: item.name, style: s.langRow },
        `${item.name}, `,
        h(Text, { style: s.bold }, item.issuer)
      )
    ),
    h(Dashed),
    h(Heading, null, cv.sections.internship),
    h(
      View,
      { wrap: false },
      h(Text, { style: s.bold }, cv.internship.role),
      h(Text, null, `${cv.internship.org}, ${cv.internship.period}`),
      h(Text, { style: { marginTop: 2 } }, cv.internship.text)
    )
  )
}

const Job = ({ title, org, period, lines, technologies, dict }) =>
  h(
    View,
    { style: s.job, wrap: false },
    h(Text, { style: s.jobRole }, title),
    h(
      View,
      { style: s.jobHead },
      h(Text, { style: s.jobOrg }, org),
      h(Text, null, period)
    ),
    lines.map(line => h(Bullet, { key: line }, line)),
    technologies &&
      h(
        Bullet,
        null,
        h(Text, { style: s.bold }, `${dict.cv.keyTechnologies}: `),
        technologies
      )
  )

const Right = ({ dict }) => {
  const cv = dict.cv
  return h(
    View,
    { style: s.right },
    h(Heading, null, cv.sections.profile),
    h(Text, { style: s.paragraph }, cv.profile),
    h(View, { style: { height: 5 } }),
    h(Heading, null, cv.sections.experience),
    works.map(work => {
      const job = dict.jobs[work.id].cv
      return h(Job, {
        key: work.id,
        title: job.role,
        org: job.org,
        period: `${formatDate(work.cvStart || work.start, dict)} - ${formatDate(work.end, dict)}`,
        lines: job.summary,
        technologies: job.technologies,
        dict
      })
    })
  )
}

const Cv = ({ dict, locale }) =>
  h(
    Document,
    {
      title: `${dict.cv.name} - ${dict.cv.title}`,
      author: dict.cv.name,
      language: locale
    },
    h(
      Page,
      { size: "A4", style: s.page },
      h(Text, { style: s.name }, dict.cv.name.toUpperCase()),
      h(Text, { style: s.title }, dict.cv.title.toUpperCase()),
      h(View, { style: s.rule }),
      h(View, { style: s.columns }, h(Left, { dict }), h(Right, { dict }))
    )
  )

const outDir = path.join(root, "public/cv")
fs.mkdirSync(outDir, { recursive: true })

for (const locale of locales) {
  const dict = readJson(`locales/${locale}.json`)
  const file = path.join(outDir, `sesisnando-cv-${locale}.pdf`)
  await renderToFile(h(Cv, { dict, locale }), file)
  console.log(`cv: ${path.relative(root, file)}`)
}
