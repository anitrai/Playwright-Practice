// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  timeout: 30 * 1000,

  expect: { timeout: 5 * 1000 },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: "always" }]], // always || on-failure || never
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: { baseURL: "https://eventhub.rahulshettyacademy.com" },
  /* Configure projects for major browsers */
  /* every use in projects will override & extend main use*/
  projects: [ 
    {
      name: 'event_chromium',
      use: {
        browserName: "chromium",
        //baseURL:"https://eventhub.rahulshettyacademy.com",
        headless: true,
        TestIdAttribute: "testid", // used for page.getByTestId()
        trace: "retain-on-failure", // off, on,retain-on-failure, on-first-retry
        video: "retain-on-failure", // off,on,retain-on-failure,on-first-retry
        screenshot: "only-on-failure", // off,on,only-on-failure
        ...devices['Desktop Chrome'],
        //viewport : {width: 280 , height:300} 
      },
    },

    {
      name: 'event_firefox',
      use: {
        browserName: "firefox",
        headless: true,
        trace: "retain-on-failure", // off, on,retain-on-failure, on-first-retry
        video: "retain-on-failure", // off,on,retain-on-failure,on-first-retry
        screenshot: "only-on-failure", // off,on,only-on-failure
        ...devices['Desktop Firefox']
      },
    },

    {
      name: 'event_webkit',
      use: {
        browserName: "webkit",
        headless: true,
        trace: "retain-on-failure", // off, on,retain-on-failure, on-first-retry
        video: "retain-on-failure", // off,on,retain-on-failure,on-first-retry
        screenshot: "only-on-failure", // off,on,only-on-failure
        ...devices['Desktop Safari']
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

