const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");

const regex = /!\[[^\]]*]\((.*?)\)/g;

let errors = 0;

for (const file of fg.sync("**/*.md", {
    ignore:["node_modules/**","_site/**"]
})) {

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

process.exit(errors ? 1 : 0);