Feature: Login

  Background:


  Scenario: Verf login
      Given I am on the login page
    When I log in as "standard_user" with password "secret_sauce"
    Then I should see the "Products" page

  
