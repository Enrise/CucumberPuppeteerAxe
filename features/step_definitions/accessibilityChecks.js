const { Then, Given } = require('@axe-core/puppeteer');
const { accessibilityCheck } = require('../support/accessibilityCheck');

Given('I disable the accessibility rule(s) {string}', function(rule) {
  this.axeDisableRules = rule.split(',');
});

Given('I use the accessibility standard(s) {string}', function(tag) {
  this.axeUseTags = tag.split(',');
});

Then('the page should be accessible', async function() {
  await accessibilityCheck(this);
});

Then('the page excluding {string} should be accessible', async function(
  excludeSelector
) {
  await accessibilityCheck(this, null, excludeSelector);
});

Then('the section {string} should be accessible', async function(
  includeSelector
) {
  await accessibilityCheck(this, includeSelector);
});

Then(
  'the section {string} excluding {string} should be accessible',
  async function(includeSelector, excludeSelector) {
    await accessibilityCheck(this, includeSelector, excludeSelector);
  }
);
