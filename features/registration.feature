 Feature: Sidecar Registration Flow
    @Smoke
    Scenario Outline: EB user should be able to successfully register with all provided packages
        Given I navigate to login page
        And I navigate to sign up page
        And I validate sign up page appears
        When I register an EB user with "<packages>" package and "<state>" state
        Then I validate order summary page appears

    Examples: 
        |packages|state|
        |basicPackage|TX|
        |essentialPackage|TX|
        |premiumPackage|TX|
        |customizedPackage|TX|
        
    @Smoke
    Scenario Outline: ACA user should be able to successfully register with all provided packages
        Given I navigate to login page
        And I navigate to sign up page
        And I validate sign up page appears
        When I register an ACA user with "<packages>" package for "<state>" state
        Then I validate order summary page appears
    Examples: 
        |packages|state|
        |bronzePackage|OH|
        |silverPackage|OH|
        |goldPackage|OH|