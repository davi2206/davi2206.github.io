const fg = require("fast-glob");
const fs = require("fs");
const matter = require("gray-matter");

const required = [
  "tags",
  "layout",
  "title",
  "date",
  "summary"
];

let errors = 0;

for (const file of fg.sync("**/*.md", {
  ignore: ["node_modules/**", "_site/**"]
})) {

  const doc = matter(fs.readFileSync(file, "utf8"));

  for (const field of required) {
    if (!(field in doc.data)) {
      console.log(`${file}: missing ${field}`);
      errors++;
    }
  }

  if (doc.data.date) {
    if (Number.isNaN(Date.parse(doc.data.date))) {
      console.log(`${file}: invalid date`);
      errors++;
    }
  }
}

process.exit(errors ? 1 : 0);