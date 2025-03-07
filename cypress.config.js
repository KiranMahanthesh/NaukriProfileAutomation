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

      return config;
    },
    
    specPattern: "cypress/e2e/*.feature",  // Feature files location
    stepDefinitions: "cypress/support/step_definitions/*.js",  // Step definitions location
    
    //baseUrl: "https://www.naukri.com",   // Sets base URL
    chromeWebSecurity: false,            // Disables Chrome security restrictions
    defaultCommandTimeout: 5000,        // Increases default timeout
    requestTimeout: 5000,               // Increases request timeout
    pageLoadTimeout: 5000,              // Extends page load timeout
    experimentalSessionAndOrigin: true,   // Enables cross-origin support
    failOnStatusCode: false,              // Prevents failures due to non-2xx responses
    viewportWidth: 1280,                  // Sets default viewport width
    viewportHeight: 720,                  // Sets default viewport height
    experimentalModifyObstructiveThirdPartyCode: true,
    modifyObstructiveCode: false,
     
  
  },
});