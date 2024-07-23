const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: '5djfo1',
    baseUrl: 'http://192.168.10.1',
    setupNodeEvents(on, config) { },
  },
})
