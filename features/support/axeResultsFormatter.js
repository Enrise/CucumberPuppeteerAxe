const colors = require('colors');

const colorLink = colors.underline.blue;
const colorSelector = colors.cyan;
const colorHtml = colors.gray;
const colorsImpact = {
  minor: colors.bgWhite.black(' minor    '),
  moderate: colors.bgYellow.white(' moderate '),
  serious: colors.bgRed.white(' serious  '),
  critical: colors.bgRed.white(' CRITICAL ')
};

const selectorToString = (selectors, separator) => {
  separator = separator || ' ';
  return selectors
    .reduce((prev, curr) => prev.concat(curr), [])
    .join(separator);
};

const axeResultsFormatter = ({ violations }) => {
  return violations.reduce(
    (message, violation) =>
      (message += '\n' + violationMessage(violation) + '\n'),
    ''
  );
};

const violationMessage = violation =>
  messageTitle(violation) +
  messageInvalidElements(violation) +
  messageSelectAllElements(violation) +
  messageDetails(violation);

const messageTitle = violation =>
  `${colorsImpact[violation.impact]} Violation of ${violation.id} with ${
    violation.nodes.length
  } occurrences!\n`;

const messageInvalidElements = violation =>
  `  ${violation.description}. Invalid elements at:\n` +
  nodesToSelectorList(violation.nodes);

const messageSelectAllElements = violation =>
  violation.nodes.length > 1
    ? '  Select all elements with: ' +
      nodesToSingleSelector(violation.nodes) +
      '\n'
    : '';

const messageDetails = violation =>
  `  For details, see: ${colorLink(violation.helpUrl.split('?')[0])}`;

const nodesToSelectorList = nodes =>
  nodes
    .map(
      node =>
        '   - ' +
        colorSelector(selectorToString(node.target)) +
        `   ${colorHtml(node.html)}\n`
    )
    .join('');

const nodesToSingleSelector = nodes =>
  colorSelector(nodes.map(node => selectorToString(node.target)).join(', '));

module.exports = axeResultsFormatter;
