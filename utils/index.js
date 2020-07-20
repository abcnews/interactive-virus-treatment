const fs = require("fs");

const testFolder = "./sequence";
const regex = /ks\.animate.*ks\.globalPause\(\)/gs;

fs.readdirSync(testFolder).forEach(file => {
  console.log(file);

  // Disregard .DS_Store
  if (file === ".DS_Store") return;

  // Read the file into memory
  const contents = fs.readFileSync(`./sequence/${file}`, "utf8");

  // Match the regex
  const found = contents.match(regex);
  console.log(found);

  // Insert extracted code into a module
  const insertedCode = `const animate = ks => { const tl = ${found} ; return tl; }; module.exports = animate;`;

  // Take off the SVG file extension
  const javaScriptFileName = file.slice(0, -3);

  // Write the file
  fs.writeFileSync(`./animations/${javaScriptFileName}js`, insertedCode);
});
