import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures.js';

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When('I log in as {string} with password {string}', async ({ loginPage }, user, pass) => {
  await loginPage.login(user, pass);
});

Then('I should see the {string} page', async ({ productsPage }, title) => {
  await expect(productsPage.title).toHaveText(title);
});

Then('I should see an error containing {string}', async ({ loginPage }, text) => {
  await expect(loginPage.errorMessage).toContainText(text);
});
