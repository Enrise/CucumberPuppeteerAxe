Feature: Detecting issues

   As a developer
   I want to check pages for accessibility issues

   Scenario Outline: Detecting issues
      Given I am on "http://cucumber-puppeteer-axe.com/<PAGE>"
      Then I detect <ISSUES> accessibility issues

         Scenarios:
         | PAGE                | ISSUES |
         | noIssues.html       | 0      |
         | oneIssue.html       | 1      |
         | multipleIssues.html | 4      |
