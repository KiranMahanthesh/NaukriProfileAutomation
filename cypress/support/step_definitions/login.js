import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const loginUrl = "https://rahulshettyacademy.com/locatorspractice/"; // Sample login page URL

Given("I open the login page", () => {
  cy.visit(loginUrl);
});

