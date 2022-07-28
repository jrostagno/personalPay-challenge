const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "http://localhost:3000",
  },
  // env: {
  //   URL: "https://api.openweathermap.org/data/2.5/",
  //   APP_ID: "84cbb6c6fcb30fa644a6da1056db1b2b",
  //   LOCATION: "London",
  // },
});
