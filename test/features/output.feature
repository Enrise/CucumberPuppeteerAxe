Feature: Outputting axe results

   As a developer
   I want output in my cli that makes sense

Scenario: One error

    When I have the following axe result
        """
        {
            "violations": [
                {
                    "id": "test-rule",
                    "impact": "serious",
                    "description": "test description",
                    "helpUrl": "https://test.url",
                    "nodes": [
                        {
                            "html": "<html string/>",
                            "target": ["html"]
                        }
                    ]
                }
            ]
        }
        """
    Then the generated output should look like
        """

         serious   Violation of test-rule with 1 occurrences!
          test description. Invalid elements at:
           - html   <html string/>
          For details, see: https://test.url
        
        """

Scenario: Multiple nodes

    When I have the following axe result
        """
        {
            "violations": [
                {
                    "id": "test-rule",
                    "impact": "serious",
                    "description": "test description",
                    "helpUrl": "https://test.url",
                    "nodes": [
                        {
                            "html": "<html string/>",
                            "target": ["html"]
                        },
                        {
                            "div": "<div string/>",
                            "target": ["div", "div2"]
                        }
                    ]
                }
            ]
        }
        """
    Then the generated output should look like
        """
        
         serious   Violation of test-rule with 2 occurrences!
          test description. Invalid elements at:
           - html   <html string/>
           - div div2   undefined
          Select all elements with: html, div div2
          For details, see: https://test.url

        """

Scenario: Multiple violations

    When I have the following axe result
        """
        {
            "violations": [
                {
                    "id": "test-rule",
                    "impact": "serious",
                    "description": "1th test description",
                    "helpUrl": "https://test1.url",
                    "nodes": [
                        {
                            "html": "<html string/>",
                            "target": ["html"]
                        }
                    ]
                },
                {
                    "impact": "moderate",
                    "description": "2nd test description",
                    "helpUrl": "https://test2.url",
                    "nodes": [
                        {
                            "div": "<div string/>",
                            "target": ["div", "div2"]
                        }
                    ]
                }
            ]
        }
        """
    Then the generated output should look like
        """ 

         serious   Violation of test-rule with 1 occurrences!
          1th test description. Invalid elements at:
           - html   <html string/>
          For details, see: https://test1.url

         moderate  Violation of undefined with 1 occurrences!
          2nd test description. Invalid elements at:
           - div div2   undefined
          For details, see: https://test2.url

        """
