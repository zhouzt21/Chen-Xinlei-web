const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("http://127.0.0.1:8000/", { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".publication-item");

  async function count(filter) {
    await page.click(`#publication-filters button[data-filter-group="type"][data-filter="${filter}"]`);
    return page.evaluate(
      () =>
        [...document.querySelectorAll(".publication-item")].filter(
          (item) => !item.classList.contains("is-filtered-out")
        ).length
    );
  }

  const sampleTagStyle = await page.locator(".publication-meta span").first().evaluate((el) => {
    const style = getComputedStyle(el);
    return {
      fontWeight: style.fontWeight,
      backgroundColor: style.backgroundColor,
      color: style.color,
      borderColor: style.borderColor
    };
  });

  console.log(
    JSON.stringify(
      {
        all: await count("All"),
        conference: await count("Conference"),
        journal: await count("Journal"),
        year2026: await (async () => {
          await page.click('#publication-filters button[data-filter-group="type"][data-filter="All"]');
          await page.click('#publication-filters button[data-filter-group="year"][data-filter="2026"]');
          return page.evaluate(
            () =>
              [...document.querySelectorAll(".publication-item")].filter(
                (item) => !item.classList.contains("is-filtered-out")
              ).length
          );
        })(),
        sampleTagStyle
      },
      null,
      2
    )
  );
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
