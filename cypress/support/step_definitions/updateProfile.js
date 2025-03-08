import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I am on the Naukri login page", () => {
  cy.visit("https://www.naukri.com/nlogin/login", { headers: { "Accept-Encoding": "gzip, deflate", } });
  cy.wait(1000);
});

// Use while running in local
// When("I log in with valid credentials", () => {
//   cy.fixture("credentials").then((credentials) => {
//     cy.get('#usernameField').type(credentials.email);
//     cy.get('#passwordField').type(credentials.password, { log: false });
//     cy.get('.blue-btn').click();
//   });
// });

When("I log in with valid credentials", () => {
  cy.get('#usernameField').type(Cypress.env("NAUKRI_EMAIL"));
  cy.get('#passwordField').type(Cypress.env("NAUKRI_PASSWORD"), { log: false });
  cy.get('.blue-btn').click();
});

When("I navigate to the profile section", () => {
  //cy.get("a[href='/mnjuser/profile']").click(); // 
  cy.wait(3000);  // Adjust based on load time
  cy.get("a[href='/mnjuser/profile']", { timeout: 10000 }).should('be.visible').click();
});


When("I upload my resume", () => {
  cy.scrollTo(0, 300); 
  cy.get("input[value='Update resume']").click();
  cy.get('#attachCV').invoke('show').attachFile("Kiran_Resume_QA.pdf");
  cy.wait(1000)
  cy.get('.msg').should("be.visible").and("have.text", "Resume has been successfully uploaded.")
});

after(() => {
  Cypress.runner.stop();
});




