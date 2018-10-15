const data = require('../data');
const { url, user1 } = data;
const signIn = async (
  baseUrl = url,
  email = user1.email,
  password = user1.password
) => {
  await page.goto(`${baseUrl}/login`);
  await page.waitForSelector('.login-container');
  await page.click('input[name=identifier]');
  await page.type('input[name=identifier]', email);
  await page.click('input[name=password]');
  await page.type('input[name=password]', password);
  await page.click("button[name='login']");
  // check if the profile menu is visible
  await page.waitForSelector('.user-account');
};

describe('Assembl signin', () => {
  beforeEach(async () => {
    jest.setTimeout(100000);
    await page.goto(`${url}/login`);
  });

  test('I can sign in assembl', async () => {
    await signIn();
    const profileMenu = await page.$eval(
      '#user-dropdown',
      el => (el ? true : false)
    );
    await expect(profileMenu).toBe(true);
  });
});

module.exports = signIn;
