import { defineConfig } from '@playwright/test'

module.exports = defineConfig({
  testDir: './e2e-tests',
  webServer: {
    command: 'npm run start-prod',
    url: 'http://localhost:5000',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:5000/',
  },
})