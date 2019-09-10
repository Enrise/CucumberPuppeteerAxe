const { When, Then } = require('cucumber');
const { expect } = require('chai');
const {
  axeResultsFormatter
} = require('../../../features/support/accessibilityCheck');

When('I have the following axe result', function(result) {
  this.axeOutput = JSON.parse(result);
});

Then('the generated output should look like', function(expectedOutput) {
  const output = axeResultsFormatter(this.axeOutput).replace(
    /\u001b\[.*?m/g,
    ''
  );
  expect(output).to.equal(expectedOutput);
});
