const signIn = require('../../helpers').signin;

describe('Assembl signin', () => {
  beforeAll(async () => {
    jest.setTimeout(100000);
  });

  test('I can sign in on Assembl', async () => {
    await signIn();
    const profileMenu = await page.$eval(
      '#user-dropdown',
      el => (el ? true : false)
    );
    await expect(profileMenu).toBe(true);
  });
});
