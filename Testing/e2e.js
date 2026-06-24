const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch({
        headless: "new",
        args:["--window-size=1620,1080"]
    });
    const page = await browser.newPage();
    await page.goto('https://newbreak.church/blog/');
    console.log('Page loaded');
    await page.setViewport({ width: 1620, height: 1080 });
    const coursePageLink= "#post-1539 > div > div.fl-builder-content.fl-builder-content-1539.fl-builder-content-primary.fl-builder-global-templates-locked > div.fl-row.fl-row-full-width.fl-row-bg-color.fl-node-f2ay1tvkingo.fl-row-default-height.fl-row-align-center > div > div.fl-row-content.fl-row-fixed-width.fl-node-content > div.fl-col-group.fl-node-710gxdyzvwi5 > div > div > div > div > div.fl-post-grid > div:nth-child(1) > div > div.fl-post-grid-text > h2 > a";
    await page.waitForSelector(coursePageLink);
    await page.click(coursePageLink);
    await browser.close();
})();