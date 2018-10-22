const signIn = require('../../helpers').signin;

describe('Assembl signin', () => {
  let page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    jest.setTimeout(100000);
  });

  test('I can sign in on Assembl', async () => {
    await signIn();
    const profileDropdown = '#user-dropdown';
    await page.waitForSelector(profileDropdown);
    const profileMenu = await page.$eval(
      profileDropdown,
      el => (el ? true : false)
    );
    await expect(profileMenu).toBe(true);
  });
});
