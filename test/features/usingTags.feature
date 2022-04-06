Feature: Using tags

   As a developer
   I want to be able to select tags for checking accessibility issues

   Scenario: Selecting a tag
      Given I am on "http://cucumber-puppeteer-axe.com/multipleIssues.html"
      When I use the tag "wcag2a"
      Then I detect 2 accessibility issues
