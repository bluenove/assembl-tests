const faker = require('faker');
const data = require('../../data');

const user = {
  email: faker.internet.email(),
  password: 'test',
  username: faker.internet.userName(),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName()
};

describe('Assembl signup', () => {
  beforeAll(async () => {
    jest.setTimeout(20000);
    await page.goto(`${data.url}/e2e-tests-thread/signup`);
  });

  test('signup form loads correctly', async () => {
    await page.waitForSelector('.login-view');
    const signupForm = await page.$eval('.signup', el => (el ? true : false));
    expect(signupForm).toBe(true);
  });

  test('I can sign up in assembl', async () => {
    await page.waitForSelector('.login-view');
    await page.click('input[name=fullname]');
    await page.type(
      'input[name=fullname]',
      `${user.firstname} ${user.lastname}`
    );
    await page.click('input[name=username]');
    await page.type('input[name=username]', user.username);
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
