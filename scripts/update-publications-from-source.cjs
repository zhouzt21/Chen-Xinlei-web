const fs = require("fs");
const { spawnSync } = require("child_process");

const htmlPath = process.argv[2];
if (!htmlPath) {
  console.error("Usage: node scripts/update-publications-from-source.cjs <html-file>");
  process.exit(1);
}

const extracted = spawnSync(
  process.execPath,
  ["scripts/extract-publications.cjs", htmlPath],
  { encoding: "utf8" }
);

if (extracted.status !== 0) {
  process.stderr.write(extracted.stderr);
  process.exit(extracted.status || 1);
}

const publications = JSON.parse(extracted.stdout).map((publication) => {
  const venue = publication.venue.replace(/\s+/g, " ").trim();
  const noteParts = [];
  const venueText = publication.venueText.replace(/\s+/g, " ").trim();

  if (/\bOral\b/i.test(venue) && !/Oral/i.test(noteParts.join(" "))) {
    noteParts.push("Oral");
  }
  if (/Highlight/i.test(venue)) {
    noteParts.push("Highlight");
  }

  const acceptance = venueText.match(/\(Acceptance [^)]+\)/i);
  if (acceptance) {
    noteParts.push(acceptance[0].replace(/[()]/g, ""));
  }

  if (/Best Paper Award/i.test(venueText)) {
    noteParts.push("Best Paper Award");
  }

  const ccf = venueText.match(/\(CCF-[^)]+\)/i);
  if (ccf) {
    noteParts.push(ccf[0].replace(/[()]/g, ""));
  }

  return {
    title: publication.title,
    venue,
    type: publication.type,
    year: publication.year || inferYear(publication),
    note: [...new Set(noteParts)].join("; "),
    image: publication.image,
    link: publication.link,
    authors: publication.authors
  };
});

function inferYear(publication) {
  const title = publication.title.toLowerCase();
  if (title.includes("soscheduler")) return "2024";
  return "";
}

function jsString(value) {
  return JSON.stringify(value);
}

function imageExpression(imagePath) {
  if (!imagePath) return "asset(\"images/favicon-32x32.png\")";
  if (/^https?:\/\//i.test(imagePath)) return jsString(imagePath);
  return `asset(${jsString(imagePath)})`;
}

function itemToJs(publication) {
  return `  {
    title: ${jsString(publication.title)},
    venue: ${jsString(publication.venue)},
    type: ${jsString(publication.type)},
    year: ${jsString(publication.year)},
    note: ${jsString(publication.note)},
    image: ${imageExpression(publication.image)},
    link: ${jsString(publication.link)},
    authors: ${jsString(publication.authors)}
  }`;
}

const newBlock = `const publications = [\n${publications
  .map(itemToJs)
  .join(",\n")}];\n\n`;

const scriptPath = "script.js";
const script = fs.readFileSync(scriptPath, "utf8");
const start = script.indexOf("const publications = [");
const end = script.indexOf("const awards = [", start);

if (start < 0 || end < 0) {
  throw new Error("Could not locate publications block in script.js");
}

fs.writeFileSync(scriptPath, script.slice(0, start) + newBlock + script.slice(end));

console.log(
  `Updated ${scriptPath}: ${publications.length} publications (${publications.filter((p) => p.type === "Conference").length} conference, ${publications.filter((p) => p.type === "Journal").length} journal).`
);
