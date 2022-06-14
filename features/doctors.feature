Feature: Sidecar Find Doctors Flow
    @Smoke @C8858
    Scenario: User should be able to look for a doctor
        Given I navigate to login page
        And I login to system
        When I navigate to doctors page
        And I search for "David Wallis" doctor on "90503" zipcode
        Then I see the doctors name "David Wallis" his specialty "Internal Medicine" and address "520 N Prospect Ave Ste 309"