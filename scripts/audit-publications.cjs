const fs = require("fs");
const { spawnSync } = require("child_process");

const htmlPath = process.argv[2];
if (!htmlPath) {
  console.error("Usage: node scripts/audit-publications.cjs <html-file>");
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

const oldPublications = JSON.parse(extracted.stdout);
const script = fs.readFileSync("script.js", "utf8");
const start = script.indexOf("const publications = [");
const end = script.indexOf("const awards = [", start);
const currentBlock = start >= 0 && end > start ? script.slice(start, end) : "";
const currentTitles = [...currentBlock.matchAll(/title: "([^"]+)"/g)].map(
  (match) => match[1]
);

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const currentTitleSet = new Set(currentTitles.map(normalize));
const missing = oldPublications.filter(
  (publication) => !currentTitleSet.has(normalize(publication.title))
);

const shortened = currentTitles.filter((title) => {
  const titleWords = title.split(/\s+/).filter(Boolean).length;
  if (titleWords > 3) return false;
  return oldPublications.some((publication) =>
    normalize(publication.title).includes(normalize(title))
  );
});

const oldByType = oldPublications.reduce((acc, publication) => {
  acc[publication.type] = (acc[publication.type] || 0) + 1;
  return acc;
}, {});

console.log(
  JSON.stringify(
    {
      sourceTotal: oldPublications.length,
      sourceByType: oldByType,
      currentTotal: currentTitles.length,
      missingTotal: missing.length,
      shortenedLikely: shortened,
      missingTitles: missing.map((publication) => ({
        type: publication.type,
        year: publication.year,
        venue: publication.venue,
        title: publication.title
      }))
    },
    null,
    2
  )
);
