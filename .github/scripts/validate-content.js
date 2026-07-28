const fg = require("fast-glob");
const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

const placeholders = [
  "ELEPHANT",
  "TODO",
  "FIXME",
];

const required = [
  "tags",
  "layout",
  "title",
  "date",
  "summary"
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

  if(file.endsWith(".md")) {
    // Check front matter
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

    // Check for missing images
    const regex = /!\[[^\]]*]\((.*?)\)/g;
    const dir = path.dirname(file);
    const text = fs.readFileSync(file,"utf8");

    let match;

    while ((match = regex.exec(text)) !== null) {

        const img = match[1];

        if (img.startsWith("http"))
            continue;

        const full = path.resolve(dir,img);

        if (!fs.existsSync(full)) {
            console.log(`${file}: missing image ${img}`);
            errors++;
        }
    }
  }
}

process.exit(errors ? 1 : 0);