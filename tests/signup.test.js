const faker = require('faker');

const user = {
  email: faker.internet.email(),
  password: 'test',
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName()
};

describe('Assembl signup', () => {
  beforeAll(async () => {
    await page.goto('https://dev-assembl.bluenove.com/felixdebate/signup');
  });

  test('signup form loads correctly', async () => {
    await page.waitForSelector('.login-view');
    const signupForm = await page.$eval('.signup', el => (el ? true : false));
    expect(signupForm).toBe(true);
  });

  test('I can sign up in assembl', async () => {
    await page.waitForSelector('.login-view');
    await page.screenshot({ path: 'screenshots/signup.png' });
    await page.click('input[name=fullname]');
    await page.type('input[name=fullname]', user.firstname);
    await page.click('input[name=email]');
    await page.type('input[name=email]', user.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', user.password);
    await page.click('input[name=password2]');
    await page.type('input[name=password2]', user.password);
    await page.click('input[type=checkbox]');
    await page.click('button[type=submit]');
    await page.waitForSelector('.resendPwd');
    const submitConfirmation = await page.$eval(
      '.resendPwd',
      el => (el ? true : false)
    );
    expect(submitConfirmation).toBe(true);
  });
});
