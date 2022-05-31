Feature: Sidecar Registration Flow
    @Smoke
    Scenario Outline: User should be able to register
        Given I navigate to login page
        And I navigate to sign up page
        And I validate sign up page appears
        When I register a user with "<packages>" package
        And I validate order summary page appears

    Examples: 
        |packages|
        |basicPackage|
        |essentialPackage|
        |premiumPackage|
        |customizedPackage|
        