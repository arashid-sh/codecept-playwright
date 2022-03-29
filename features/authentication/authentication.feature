Feature: Sidecar Login Feature
    
    Scenario: Login with valid credentials
        Given I navigate to login page
        And I verify login page
        When I login to system
        Then I validate authenticated user dashboard

