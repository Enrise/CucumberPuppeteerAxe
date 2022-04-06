const { AxePuppeteer } = require('@axe-core/pupeeteer');
const { expect } = require('chai');
const axeResultsFormatter = require('./axeResultsFormatter');

const countViolations = ({ violations }) => {
  return violations.reduce((count, violation) => {
    return count + violation.nodes.length;
  }, 0);
};

const accessibilityCheck = async (world, include, exclude) => {
  const axe = getAxePuppeteer(world, include, exclude);
  const results = await axe.analyze();
  const count = countViolations(results);
  world.attach('\n' + axeResultsFormatter(results));
  expect(count, `We found ${count} accessibility violations`).to.equal(0);
};

const getAxePuppeteer = (world, include, exclude) => {
  const axe = new AxePuppeteer(world.page);
  if (world.axeDisableRules != undefined) {
    axe.disableRules(world.axeDisableRules);
  }
  if (world.axeUseTags != undefined) {
    axe.withTags(world.axeUseTags);
  }
  if (include) {
    axe.include(include);
  }
  if (exclude) {
    axe.exclude(exclude);
  }
  return axe;
};

module.exports = {
  countViolations,
  axeResultsFormatter,
  accessibilityCheck,
  getAxePuppeteer
};
