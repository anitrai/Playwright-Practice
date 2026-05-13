let { test: base } = require('@playwright/test');
const { pommanager } = require('../pages/pommanager');
// extending the test annotation to store test data as global fixture
exports.events = base.extend({
    pommnger: async ({ page }, use) => {
        let pommanagerobj = await new pommanager(page);
        await use(pommanagerobj);
    },
    login: async ({ pommnger }, use) => {
        let loginobj = await pommnger.getLoginObj();
        await use(loginobj);
    },
    loginData: async ({ }, use) => {
        await use({ username: "anitrai2013@gmail.com", password: "Anit@95+" });
    }
})