import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testMatch: /.*\.visual\.ts/,
  fullyParallel: true,
  timeout: 120000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    launchOptions: {
      slowMo: 200,
    },
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: Object.assign({}, devices['Desktop Chrome']),
    },
    {
      name: 'firefox',
      use: Object.assign({}, devices['Desktop Firefox']),
    },
    {
      name: 'webkit',
      use: Object.assign({}, devices['Desktop Safari']),
    },
    {
      name: 'Mobile Chrome',
      use: Object.assign({}, devices['Pixel 5']),
    },
    {
      name: 'Mobile Safari',
      use: Object.assign({}, devices['iPhone 12']),
    },
  ],
  webServer: {
    command: 'cd documentation/angular && npm run dev',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
//# sourceMappingURL=playwright.config.js.map
