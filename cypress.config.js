const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://dev-f0x-wallet.netlify.app/",
    pageLoadTimeout: 100000,
    viewportHeight: 800,
    viewportWidth: 1280
  },

});

