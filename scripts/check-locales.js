// Fails (exit 1) when a locale misses a key that locales/en.json has.
// Array items count as keys too (jobs.appen.sections.0.title), an empty
// string counts as missing, and a list or object of the wrong type fails.
const fs = require("fs")
const path = require("path")

const dir = path.join(__dirname, "..", "locales")
const read = name => JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"))

// Every node, containers included, so a deleted empty list ([]) is caught too.
const kind = value =>
  Array.isArray(value) ? "array" : value === null ? "null" : typeof value

const nodes = (node, prefix = "") => {
  const self = prefix ? [[prefix, node]] : []
  if (node !== null && typeof node === "object") {
    return self.concat(
      Object.entries(node).flatMap(([key, value]) =>
        nodes(value, prefix ? `${prefix}.${key}` : key)
      )
    )
  }
  return self
}

const lookup = (dict, key) =>
  key
    .split(".")
    .reduce((node, part) => (node == null ? node : node[part]), dict)

const english = nodes(read("en.json"))
const others = fs
  .readdirSync(dir)
  .filter(file => file.endsWith(".json") && file !== "en.json")

let failed = false
for (const file of others) {
  const dict = read(file)
  const missing = english
    .filter(([key, source]) => {
      const value = lookup(dict, key)
      return (
        value === undefined ||
        value === null ||
        value === "" ||
        kind(value) !== kind(source)
      )
    })
    .map(([key]) => key)
  if (missing.length) {
    failed = true
    console.error(`${file}: ${missing.length} missing key(s)`)
    missing.forEach(key => console.error(`  - ${key}`))
  } else {
    console.log(`${file}: ok (${english.length} keys)`)
  }
}

process.exit(failed ? 1 : 0)
