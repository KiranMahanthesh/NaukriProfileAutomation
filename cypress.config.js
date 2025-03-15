const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      

       // Load environment variables from GitHub Secrets
      config.env.NAUKRI_EMAIL = process.env.NAUKRI_EMAIL || "";
      config.env.NAUKRI_PASSWORD = process.env.NAUKRI_PASSWORD || "";

      return config;
    },
    
    specPattern: "cypress/e2e/*.feature",  // Feature files location
    stepDefinitions: "cypress/support/step_definitions/*.js",  // Step definitions location
    
    
    chromeWebSecurity: false,            // Disables Chrome security restrictions
    defaultCommandTimeout: 12000,        // Increases default timeout
    requestTimeout: 12000,               // Increases request timeout
    pageLoadTimeout: 12000,              // Extends page load timeout
    experimentalSessionAndOrigin: true,   // Enables cross-origin support
    failOnStatusCode: false,              // Prevents failures due to non-2xx responses
    viewportWidth: 1280,                  // Sets default viewport width
    viewportHeight: 720,                  // Sets default viewport height
    experimentalModifyObstructiveThirdPartyCode: true,
    modifyObstructiveCode: false,
    screenshotOnRunFailure: true,  // Ensure screenshots are captured
    video: true,                   // Enable video recording
     
  
  },
});