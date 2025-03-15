Feature: Update Naukri Profile
  As a user, I want to update my Naukri profile so that my information stays up to date.

  Scenario: Successfully update profile details
    Given I am on the Naukri login page
    When I log in with Google SSO
    And I navigate to the profile section
    And I upload my resume
    #And I logout the session
