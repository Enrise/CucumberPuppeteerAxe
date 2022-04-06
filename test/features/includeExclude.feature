Feature: Including or excluding parts

   As a developer
   I want to be able to include/exclude parts of a page when checking for accessibility issues

   Scenario: Excluding parts of a page
      Given I am on "http://cucumber-puppeteer-axe.com/multipleIssues.html"
      When I exclude "img"
      Then I detect 3 accessibility issues

   Scenario: Testing a section of a page
      Given I am on "http://cucumber-puppeteer-axe.com/multipleIssues.html"
      When I include only ".include"
      Then I detect 2 accessibility issues
