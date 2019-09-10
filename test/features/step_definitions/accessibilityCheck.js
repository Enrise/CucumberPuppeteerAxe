const { Then, When } = require('cucumber');
const { expect } = require('chai');
const {
  countViolations,
  getAxePuppeteer
} = require('../../../features/support/accessibilityCheck');
const { scope } = require('../support/browser');

Then('I detect {int} accessibility issues', async function(amount) {
  this.page = scope.page;
  const axe = getAxePuppeteer(this, this.axeInclude, this.axeExclude);
  const result = await axe.analyze();
  const violationCount = countViolations(result);
  expect(violationCount).to.equal(amount);
});

When('I exclude {string}', function(selector) {
  this.axeExclude = selector;
});

When('I include only {string}', function(selector) {
  this.axeInclude = selector;
});

When('I disable {string}', function(rules) {
  this.axeDisableRules = rules.split(',');
});

When('I use the tag(s) {string}', function(tags) {
  this.axeUseTags = tags.split(',');
});
