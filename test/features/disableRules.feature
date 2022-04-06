Feature: Disabling rules

   As a developer
   I want to be able to disable certain rules when checking for accessibility issues

   Scenario: Disabling a rule
      Given I am on "http://cucumber-puppeteer-axe.com/multipleIssues.html"
      When I disable "page-has-heading-one"
      Then I detect 3 accessibility issues

   Scenario: Disabling two rules
      Given I am on "http://cucumber-puppeteer-axe.com/multipleIssues.html"
      When I disable "page-has-heading-one,link-name"
      Then I detect 2 accessibility issues
