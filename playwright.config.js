import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: ['steps/*.js', 'fixtures.js'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
   workers: 2,
     fullyParallel: true,
  use: {
    baseURL: 'https://www.amazon.co.uk/ref=nav_logo',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
