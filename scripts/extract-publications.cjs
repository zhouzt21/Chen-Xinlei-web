const fs = require("fs");

const htmlPath = process.argv[2];
if (!htmlPath) {
  console.error("Usage: node scripts/extract-publications.cjs <html-file>");
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, "utf8");

function stripTags(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&dagger;|†/g, "†")
    .replace(/&ast;|\*/g, "*")
    .replace(/<[^>]+>/g, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s+/g, "\n")
    .trim();
}

function extractBlock(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) {
    throw new Error(`Could not find block: ${startMarker}`);
  }
  return html.slice(start, end);
}

function extractRows(block, type) {
  return [...block.matchAll(/<tr[\s\S]*?<\/tr>/gi)]
    .map((match) => match[0])
    .map((row) => {
      const imageMatch = row.match(/<img[^>]+src=['"]([^'"]+)['"]/i);
      const titleMatch = row.match(/<p>\s*<a href=['"]([^'"]+)['"]>\s*<b>([\s\S]*?)<\/b>\s*<\/a>\s*<\/p>/i);
      if (!titleMatch) return null;

      const link = titleMatch[1].trim();
      const title = stripTags(titleMatch[2]);
      const afterTitle = row.slice(row.indexOf(titleMatch[0]) + titleMatch[0].length);
      const venueMatch = afterTitle.match(/<p><i>([\s\S]*?)<\/i><\/p>/i);
      const venueText = venueMatch ? stripTags(venueMatch[1]) : "";
      const authorsHtml = venueMatch
        ? afterTitle.slice(0, afterTitle.indexOf(venueMatch[0]))
        : afterTitle;

      const bracketMatch = venueText.match(/\[([^\]]+)\]/);
      const yearMatch = venueText.match(/\b(20\d{2})\b/);

      return {
        type,
        title,
        link,
        image: imageMatch ? imageMatch[1].trim() : "",
        authors: stripTags(authorsHtml),
        venue: bracketMatch ? bracketMatch[1].replace(/\s+/g, " ").trim() : venueText,
        venueText,
        year: yearMatch ? yearMatch[1] : ""
      };
    })
    .filter(Boolean);
}

const conferenceBlock = extractBlock(
  "Conference Publications (*: Co-primary authors;",
  "Journal Publications (*: Co-primary authors;"
);
const journalBlock = extractBlock(
  "Journal Publications (*: Co-primary authors;",
  "Selected Awards"
);

const publications = [
  ...extractRows(conferenceBlock, "Conference"),
  ...extractRows(journalBlock, "Journal")
];

console.log(JSON.stringify(publications, null, 2));
