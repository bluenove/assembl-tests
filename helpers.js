const data = require('./data');
const { url, users } = data;
const { participant } = users;

module.exports = {
  async signin(
    baseUrl = `${url}/e2e-tests-thread`,
    email = participant.email,
    password = participant.password
  ) {
    await page.goto(`${baseUrl}/login`, { timeout: 0});
    page.waitForNavigation({ timeout: 0 });
    await page.waitForSelector('.login-container');
    await page.click('input[name=identifier]');
    await page.type('input[name=identifier]', email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', password);
    await page.click("button[name='login']");
    // check if the profile menu is visible
    page.waitForNavigation({ timeout: 0 });
    await page.waitForSelector('.user-account');
  }
};
