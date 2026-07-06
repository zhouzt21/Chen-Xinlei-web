const { chromium } = require("playwright");

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = "http://127.0.0.1:8000/";

(async () => {
  const browser = await chromium.launch({ executablePath: chromePath });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".publication-item");

  const result = await page.evaluate(() => {
    const items = [...document.querySelectorAll(".publication-item")];
    const visibleByType = (type) =>
      items.filter((item) => type === "All" || item.dataset.type === type).length;
    return {
      total: items.length,
      conference: visibleByType("Conference"),
      journal: visibleByType("Journal"),
      nonCorresponding: items
        .filter((item) => !/Xinlei Chen[^,;]*†/.test(item.textContent))
        .map((item) => item.querySelector("h3")?.textContent.trim()),
      year2026: items.filter((item) => item.dataset.year === "2026").length
    };
  });

  console.log(JSON.stringify(result, null, 2));

  if (result.total === 0) throw new Error("No publications rendered.");
  if (result.nonCorresponding.length) {
    throw new Error(
      `Rendered non-corresponding publications: ${result.nonCorresponding.join("; ")}`
    );
  }

  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
