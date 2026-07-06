const { chromium } = require("playwright");

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = "http://127.0.0.1:8000/";

async function openPage(viewport) {
  const browser = await chromium.launch({ executablePath: chromePath });
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  const badResponses = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("response", (response) => {
    if (response.status() >= 400) {
      badResponses.push({
        status: response.status(),
        url: response.url()
      });
    }
  });

  await page.goto(url, { waitUntil: "networkidle" });
  return { browser, page, errors, badResponses };
}

(async () => {
  const desktop = await openPage({ width: 1440, height: 1100 });
  await desktop.page.screenshot({
    path: "screenshots/home-desktop.png",
    fullPage: true
  });

  const counts = await desktop.page.evaluate(() => ({
    sections: document.querySelectorAll("main section").length,
    nav: document.querySelectorAll(".quick-nav a").length,
    news: document.querySelectorAll("#news-list li").length,
    visibleNews: [...document.querySelectorAll("#news-list li")].filter(
      (li) => !li.classList.contains("is-hidden")
    ).length,
    projects: document.querySelectorAll(".project-card").length,
    pubs: document.querySelectorAll(".publication-item").length,
    filters: document.querySelectorAll("#publication-filters button").length
  }));

  await desktop.page.click("#toggle-news");
  const expandedNews = await desktop.page.evaluate(
    () =>
      [...document.querySelectorAll("#news-list li")].filter(
        (li) => !li.classList.contains("is-hidden")
      ).length
  );

  await desktop.page.click("#publication-filters button[data-filter=Journal]");
  const journalState = await desktop.page.evaluate(() => ({
    visible: [...document.querySelectorAll(".publication-item")].filter(
      (item) => !item.hidden
    ).length,
    hidden: [...document.querySelectorAll(".publication-item")].filter(
      (item) => item.hidden
    ).length
  }));

  await desktop.page.click('.quick-nav a[href="#projects"]');
  await desktop.page.waitForTimeout(350);
  const activeNav = await desktop.page
    .locator(".quick-nav a.active")
    .textContent()
    .catch(() => null);

  const desktopErrors = desktop.errors;
  await desktop.browser.close();

  const mobile = await openPage({ width: 390, height: 1200 });
  await mobile.page.screenshot({
    path: "screenshots/home-mobile.png",
    fullPage: true
  });
  const mobileOverflow = await mobile.page.evaluate(() => {
    const rootWidth = document.documentElement.clientWidth;
    return [...document.querySelectorAll("body *")]
      .filter((node) => !node.classList.contains("quick-nav"))
      .filter((node) => node.scrollWidth > rootWidth + 1)
      .slice(0, 8)
      .map((node) => ({
        tag: node.tagName,
        className: node.className,
        scrollWidth: node.scrollWidth,
        rootWidth
      }));
  });
  const mobileErrors = mobile.errors;
  const badResponses = [...desktop.badResponses, ...mobile.badResponses];
  await mobile.browser.close();

  console.log(
    JSON.stringify(
      {
        counts,
        expandedNews,
        journalState,
        activeNav,
        mobileOverflow,
        badResponses,
        errors: [...desktopErrors, ...mobileErrors]
      },
      null,
      2
    )
  );
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
