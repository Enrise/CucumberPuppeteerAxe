const puppeteer = require('puppeteer');

const scope = {
  driver: puppeteer,
  page: null,
  browser: null
};

const getBrowser = async function() {
  if (!scope.browser) {
    scope.browser = await scope.driver.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox']
    });
  }
};

const navigateTo = async url => {
  await getBrowser();
  scope.page = await scope.browser.newPage();
  await scope.page.goto(url, { waitUntil: 'networkidle2' });
};

const closePage = async () => {
  // Here we check if a scenario has instantiated a browser and a current page
  if (scope.browser && scope.page) {
    // close the web page down
    await scope.page.close();
    // wipe the context's currentPage value
    scope.page = null;
  }
};

const closeBrowser = async () => {
  if (scope.browser) {
    await scope.browser.close();
  }
};

module.exports = {
  getBrowser,
  navigateTo,
  closePage,
  closeBrowser,
  scope
};
