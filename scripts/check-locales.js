// Fails (exit 1) when a locale misses a key that locales/en.json has.
// Array items count as keys too (jobs.appen.sections.0.title), and an empty
// string counts as missing, so a half-translated list is caught.
const fs = require("fs")
const path = require("path")

const dir = path.join(__dirname, "..", "locales")
const read = name => JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"))

const leaves = (node, prefix = "") => {
  if (node !== null && typeof node === "object") {
    return Object.entries(node).flatMap(([key, value]) =>
      leaves(value, prefix ? `${prefix}.${key}` : key)
    )
  }
  return [[prefix, node]]
}

const lookup = (dict, key) =>
  key
    .split(".")
    .reduce((node, part) => (node == null ? node : node[part]), dict)

const english = leaves(read("en.json"))
const others = fs
  .readdirSync(dir)
  .filter(file => file.endsWith(".json") && file !== "en.json")

let failed = false
for (const file of others) {
  const dict = read(file)
  const missing = english
    .map(([key]) => key)
    .filter(key => {
      const value = lookup(dict, key)
      return value === undefined || value === null || value === ""
    })
  if (missing.length) {
    failed = true
    console.error(`${file}: ${missing.length} missing key(s)`)
    missing.forEach(key => console.error(`  - ${key}`))
  } else {
    console.log(`${file}: ok (${english.length} keys)`)
  }
}

process.exit(failed ? 1 : 0)
