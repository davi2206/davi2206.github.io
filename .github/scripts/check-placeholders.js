const fg = require("fast-glob");
const fs = require("fs");

const placeholders = [
  "ELEPHANT",
  "TODO",
  "FIXME",
];

const files = fg.sync([
  "**/*.md",
  "**/*.njk",
  "**/*.html",
], {
  ignore: [
    "_site/**",
    "node_modules/**"
  ]
});

let errors = 0;

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");

  for (const p of placeholders) {
    const regex = new RegExp(`\\b${p}\\b`, "i");

    if (regex.test(text)) {
      console.log(`${file}: contains "${p}"`);
      errors++;
    }
  }
}

if (errors) {
  process.exit(1);
}