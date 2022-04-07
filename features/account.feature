Feature: Account tests should be under this section
    
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


