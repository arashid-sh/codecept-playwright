Feature: Account tests should be under this section
    @Smoke @C8843
    Scenario Outline: User should be able to see account tabs
        Given I navigate to login page
        And I login to system
        When I navigate to account page
        Then I should see account "<elements>" and "<tabs>" on account page

    Examples: 
              |elements|tabs|
              |link_profile|Profile|
              |link_coverage|My coverage|
              |link_billing|Billing|
              |link_settings|Notifications|
              |link_cards|Benefit card|
              |link_documents|Documents|
              |link_help|Help|
              |link_signOut|Sign out|

    
    Scenario: Template for logging in as a single ASO subscriber  
        Given I login as an ASO subscriber

    
    Scenario: Template for logging in as an ASO subscriber with spouse 
        Given I login as an ASO subscriber with a spouse
    
   
    Scenario: Template for logging in as an ASO subscriber with spouse and child
        Given I login as an ASO subscriber with a spouse and a child
