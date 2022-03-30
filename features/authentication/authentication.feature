Feature: Sidecar Login Feature
    
    Scenario: Login with valid credentials
        Given I navigate to login page
        And I verify login page
        When I login to system
        Then I validate authenticated user dashboard
    
    Scenario: User should be able to reset the password
        Given I navigate to login page
        When I click forgot password
        And I verify forgot password page
        Then I validate resetting my password

