const { Given } = require('cucumber');
const { navigateTo } = require('../support/browser');

Given('I am on {string}', async function(url) {
  await navigateTo(url);
});
