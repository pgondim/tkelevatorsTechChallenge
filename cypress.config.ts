import {urls} from './cypress/fixtures/urls'

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: urls.homePage
  },
});
