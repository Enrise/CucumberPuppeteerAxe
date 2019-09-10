[![Build Status](https://travis-ci.org/Enrise/CucumberPuppeteerAxe.svg?branch=master)](https://travis-ci.org/Enrise/CucumberPuppeteerAxe)

# CucumberPuppeteerAxe
Step definitions to test webpages for accessibility issues with AxeCore

## How to use

This setup relies on the package [cucumber-puppeteer](https://www.npmjs.com/package/cucumber-puppeteer) to work properly.

Checkout [this setup](https://github.com/Enrise/accessibility-checker-infrastructure) to see how you can use this in your project.

If you're using docker then you should checkout [puppeteer-cucumber](https://github.com/Enrise/puppeteer-cucumber). It is a pre-build docker container for testing with cucumber and puppeteer. This package is also included so you can check for accessibility issues right away!

## Available steps

### Select tags

```gherkin
Given I use the accessibility standards "wcag2a,wcag2aa"
```

This statement will set the tags for standards you want to use for the scenario you are running.

Select the standards you want to use. See the [axe website](https://www.deque.com/axe/axe-for-web/documentation/api-documentation/#options-parameter) for a list of supported tags.

### Disable rules

```gherkin
When I disable the accessibility rule "color-contrast,link-name"
```

Disable accessibility rules for the current scenario

### Test the whole page

```gherkin
Then the page should be accessible
```

### Test a section of a page

```gherkin
Then the section "#content" should be accessible
```

### Exclude something when testing the whole page

```gherkin
Then the page excluding "#content img" should be accessible
```

### Exclude something when testing a section

```gherkin
Then the section "#homepage" excluding "img" should be accessible
```
