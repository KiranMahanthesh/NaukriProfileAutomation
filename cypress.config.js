const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    UserAgent : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
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
    video: true,// Enable video recording
    
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
    
    
  
     
  
  },
});