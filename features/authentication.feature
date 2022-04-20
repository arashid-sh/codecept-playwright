Feature: Sidecar Login Feature
    
    Scenario: User should be able to login with valid credentials
        Given I navigate to login page
        And I verify login page
        When I login to system
        Then I validate authenticated user dashboard
    
    Scenario: User should be able to reset the password
        Given I navigate to login page
        When I click forgot password
        And I verify forgot password page
        Then I validate resetting my password

    Scenario: User should receive error on invalid credentials login attempt
        Given I navigate to login page
        When I try to login with invalid credentials
        Then I validate invalid login response