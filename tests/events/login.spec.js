let { events } = require('../../fixtures/events/globalFixtures.js');
let { expect } = require('@playwright/test');

events.describe('@Login page', () => {

    events.beforeEach(async ({ login, page }) => {
        await login.goToLogin();
        await expect(page).toHaveURL(/login/ig); //not allowed '**/login**' in toHaveUrl
    })


    events('login successfull if all valid', async ({ page, login, loginData }) => {

        await login.fillEmail(loginData.username);
        expect(await login.getEmailId()).toBe(loginData.username);
        await login.fillPassword(loginData.password);
        expect(await login.getPassword()).toBe(loginData.password);
        await login.signIn();
        // to wait for the page to load completely after login
        await page.waitForLoadState('networkidle');
        // will chek if url contains login or not, 
        // if it does not contain then we are on home page and login is successfull
        expect(await page.url()).not.toContain('login');
    })

    events('login will not be successful if no input entered', async ({ login, page }) => {
        await login.signIn();
        await page.waitForLoadState('load'); // load means page is ready with all elemented loaded
        expect(await page.url()).toContain('login');
    })
})