const data = require('../data');
const signIn = require('../helpers').signin;

describe('assembl logout', () => {
  beforeAll(async () => {
    await jest.setTimeout(10000);
    await signIn();
  });
  test('I can logout from assembl', async () => {
    const userAccountDropdown = '#user-dropdown';
    const logoutButton = '#logout-dropdown';
    const connection = '.connection';
    let connectionButton;
    await page.waitForSelector(userAccountDropdown);
    await page.click(userAccountDropdown);
    await page.waitForSelector(logoutButton);
    await page.click(logoutButton);
    try {
      await page.waitForSelector(connection);
      connectionButton = true;
    } catch (error) {
      connectionButton = false;
      console.log('something went wrong: ' + error);
    }
    await expect(connectionButton).toBe(true);
  });
});
