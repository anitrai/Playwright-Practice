let { events } = require('../../fixtures/events/globalFixtures.js');
let { expect } = require('@playwright/test');

events.describe('@Login page', () => {

    events.beforeEach(async ({ login }) => {
        await login.goToLogin();
    })


    events('login successfull if all valid', async ({ page, login, loginData }) => {
        await login.fillEmail(loginData.username);
    })
})