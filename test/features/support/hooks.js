const { After, AfterAll } = require('cucumber');
const { closePage, closeBrowser } = require('./browser');

After(async () => {
  await closePage();
});

AfterAll(async () => {
  await closeBrowser();
});
