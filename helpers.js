const data = require('./data');
const { url, users, threadTest} = data;
const { participant } = users;

module.exports = {
  async signin(
    baseUrl = `${url}/${threadTest.slug}`,
    email = participant.email,
    password = participant.password
  ) {
    await page.goto(`${baseUrl}/login`);
    await page.waitForSelector('.login-container');
    await page.click('input[name=identifier]');
    await page.type('input[name=identifier]', email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', password);
    await page.click("button[name='login']");
    // check if the profile menu is visible
    await page.waitForSelector('.user-account');
  }
};
